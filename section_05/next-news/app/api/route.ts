export const GET = (request: Request) => {
  console.log(request);

  return new Response('Hello world!');
};