import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
    console.log(`rquest received! ${ctx.request}`)
    ctx.response.body = `Hello World with Oak! @ ${new Date().toLocaleTimeString()}`;
});

export function serve(port:number) { app.listen({port:port})}

export default app.handle;