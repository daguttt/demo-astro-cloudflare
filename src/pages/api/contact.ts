import type { APIRoute } from 'astro';

export const POST: APIRoute = ({}) => {
  return new Response(JSON.stringify({ message: 'Contact info received!' }));
};
