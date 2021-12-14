import { ServerRequest } from 'https://deno.land/std@0.89.0/http/server.ts'

export default (req:ServerRequest) => {
    console.log(req);
    return new Response(`Hello, from Deno!! v${Deno.version.deno}! ${new Date().toLocaleTimeString()}`);
}