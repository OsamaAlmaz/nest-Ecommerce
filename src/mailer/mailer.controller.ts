import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDTO } from './mailer.interface';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
  @Post('/send-email')
  async sendMail(){
    const dto: SendEmailDTO = {
      from: {name: 'osama', address: 'osama@example.com'},
      recipients: [{name: 'John Doe',address:'john@example.com'}],
      subject: 'Lucky Winner' , 
      html:'<p> Hello John you are lucky to Win 100 dollar</p>' , 
    };
    return await this.mailerService.sendEmail(dto);
  }
}
