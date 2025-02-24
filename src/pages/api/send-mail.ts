import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from 'node:process';

const nodemailer = require('nodemailer');

const email = env.EMAIL_USER as string;
const password = env.EMAIL_PASS as string;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    
}
