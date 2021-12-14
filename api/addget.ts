import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (ctx) => {
    // @ts-ignore
    const a = parseFloat(ctx.request.url.searchParams.get("a"))
    // @ts-ignore
    const b = parseFloat(ctx.request.url.searchParams.get("b"))
    console.log(`calc with query string params: ${a}+${b}`)
    ctx.response.body = `${a+b}`;
});

export function serve(port:number) { app.listen({port:port})}

export default app.handle;