import {defineConfig} from "vite";
// import {viteMockServe} from "vite-plugin-mock";
import nodeExternals from "vite-plugin-node-externals";

export default defineConfig(({mode}) => {
    const isRelease = mode === "release";

    return {
        build: {
            ssr: true, // サーバーサイドとしてビルド
            target: "node24", // Node.js 24向けに最適化
            sourcemap: !isRelease,
            minify: isRelease ? "esbuild" : false,
            lib: {
                entry: "src/ts/index.ts",
                formats: ["es"], // モダンなES Modules形式
                fileName: "index",
            },
            outDir: "dist",
            rollupOptions: {
                // 外部モジュールとして扱う（ビルドに含めない）
                external: ["express", "http-auth", "http-auth-connect"],
            },
        },
        plugins: [nodeExternals()],
    };
});
