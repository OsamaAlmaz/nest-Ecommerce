import { Address } from "nodemailer/lib/mailer"

export type SendEmailDTO = {
    from?: Address;
    recipients: Address[];
    subject: string; 
    html: string; 
    text?: string; 
    placeholderReplacement?: Record<string, string>;
}