import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "919765086e2d9f",
      pass: "d2824ae38ea73c"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
     await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: ' Fernanda Oliveira <fernandafranciele@yahoo.com.br>',
        subject,
        html: body,
    })

    }
}