Deno.serve((_req) => new Response("Hello, world!"), {
  port: 8000,
  hostname: "0.0.0.0",
});