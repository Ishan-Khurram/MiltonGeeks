import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // block any method that is not a POST
    if (req.method !== 'POST') return res.status(405).json({error: "Email not allowed to be sent"});
    // repond w json, confirm wiring here. 
    return res.status(200).json({ok: true, recieved: req.body ?? null})
};