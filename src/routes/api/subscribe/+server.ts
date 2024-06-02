import type { RequestHandler } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
  const { email } = await request.json();

  const { data, error } = await resend.emails.send({
    from: 'PrintPoly <onboarding@resend.dev>',
    to: [email],
    subject: "PrintPoly Email Subscription Confirmation",
    html: "<strong>Hey there!</strong> Thanks for signing up for beta notifications.",
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }
  
  return new Response('OK', { status: 200 });
};
