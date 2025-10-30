import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import ContactEmail from '../emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const isPhone = (s: string) => /^[\d\s+()-]{7,20}$/.test(s || '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name = '', phone = '', message = '', company = '' } =
      (req.body ?? {}) as Record<string, string>;

    if (company) return res.status(200).json({ ok: true }); // honeypot
    if (!name || !phone || !message) return res.status(400).json({ error: 'Missing fields' });
    if (!isPhone(phone)) return res.status(400).json({ error: 'Invalid phone' });

    const from = process.env.RESEND_FROM as string;
    const to = process.env.RESEND_TO as string;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: 'New Milton Geeks form submission',
      react: ContactEmail({ name, phone, message }),
    });

    if (error) {
  console.error('Resend error:', error);
  return res.status(500).json({ error: error.message });
}
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message ?? 'Server error' });
  }
}
