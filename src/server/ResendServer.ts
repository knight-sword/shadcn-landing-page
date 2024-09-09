import { Resend } from 'resend';

const resend = new Resend('re_QNYU5but_DPN2uhT1S2jZLeesJ27PYxTz');

export const resendServer = async() => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <Acme@lightojoy.com>',
    to: ['296490231@qq.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};