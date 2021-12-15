import { Response, ServerRequest } from 'https://deno.land/std@0.89.0/http/server.ts'

export default async (req:ServerRequest) => {
    const body = new TextDecoder().decode(
        await Deno.readAll(req.body)
    )
    console.log("--------")
    console.log(body)
    return new Response(`Hello! @ ${new Date().toLocaleTimeString()}`);
}