import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (ctx) => {
    console.log(ctx)
    console.log("---------------")
    const operands = await ctx.request.body().value; // receive json data
    console.log(`calc with request body params: ${operands.A}+${operands.B}`)
    ctx.response.body = { Result: operands.A + operands.B }; // return json data
});

export function serve(port:number) { app.listen({port:port})}
export default app.handle;