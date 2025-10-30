import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);
const isPhone = (s: string) => /^[\d\s+()-]{7,20}$/.test(s || '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (process.env.DEBUG_CONTACT === '1') {
    return res.status(200).json({ ok: true, mode: 'debug' });
  }

  try {
    const { name = '', phone = '', message = '', company = '' } =
      (req.body ?? {}) as Record<string, string>;

    if (company) return res.status(200).json({ ok: true });

    if (!name || !phone || !message) return res.status(400).json({ error: 'Missing fields' });
    if (!isPhone(phone)) return res.status(400).json({ error: 'Invalid phone' });

    const from = process.env.RESEND_FROM;
    const to = process.env.RESEND_TO;
    if (!process.env.RESEND_API_KEY || !from || !to) {
      console.error('Env missing:', {
        hasKey: !!process.env.RESEND_API_KEY,
        from,
        to,
      });
      return res.status(500).json({ error: 'Email env vars not configured' });
    }

    console.log('Diag from/to presence:', { hasKey: !!process.env.RESEND_API_KEY, from, to });
    console.log('Incoming payload:', { name, phone, message, company });

    let emailHtml: string | undefined;
    try {
      const { default: ContactEmail } = await import('../emails/ContactEmail.js');
      // Add await here since render() returns Promise<string>
      emailHtml = await render(ContactEmail({ name, phone, message }));
    } catch (e: any) {
      console.error('React email render error:', e?.message || e);
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: to,
      subject: 'New Milton Geeks form submission',
      ...(emailHtml ? { html: emailHtml } : {}),
      text: `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: err?.message ?? 'Server error' });
  }
}