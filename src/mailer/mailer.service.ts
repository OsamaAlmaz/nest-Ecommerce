import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDTO } from './mailer.interface';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailerService {

    constructor(private readonly configService: ConfigService){}

    mailTransport (){
        console.log("Before transporter")
        const transporter = nodemailer.createTransport({
            host: this.configService.get<string>('MAIL_HOST'),
            port: this.configService.get<number>('MAIL_PORT'),
            secure: false,
            auth:{
                user: this.configService.get<string>('MAIL_USER'),
                pass: this.configService.get<string>('MAIL_PASSWORD')
            },
            tls:{
                rejectUnauthorized: false,
            }
        })
        console.log("After transporter")
        
        return transporter;
    }
    
    async sendEmail(dto: SendEmailDTO){
        console.log("dto: ", dto )
        const {from, recipients, subject, html, text, placeholderReplacement} = dto;
        const transport = this.mailTransport()
        console.log("After Mailtransporter")

        const options: Mail.Options = {
            from: from ?? {
                name: this.configService.get<string>('APP_NAME'),
                address: this.configService.get<string>('DEFAULT_EMAIL_FROM'),
            },
            to: recipients,
            subject,
            html, 
        }
        try{
            console.log("Before sendMail ", options)
            const result = await transport.sendMail(options)
            return result;

        }catch(error){
            console.log(error)
        }
    }
}
