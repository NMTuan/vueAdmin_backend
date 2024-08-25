//https://nitro.unjs.io/config
export default defineNitroConfig({
    srcDir: "server",
    routeRules: {
        "api/v1/**": { cors: true },
    },
});
