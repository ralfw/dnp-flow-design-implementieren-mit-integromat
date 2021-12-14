import { Response, Request } from 'https://deno.land/std@0.106.0/http/server.ts';

export default (req:Request) => {
    console.log(req);
    return new Response(`Hello, from Deno v${Deno.version.deno}!`);
}