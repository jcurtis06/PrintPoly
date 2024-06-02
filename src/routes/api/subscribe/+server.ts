import type { RequestHandler } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
  console.log("hello world")
  console.log('Request', request);
  console.log('API KEY', RESEND_API_KEY);
  const { email } = await request.json();

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }
  
  return new Response('OK', { status: 200 });
};
