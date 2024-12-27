// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///D:/web/MyAmazon_Web/node_modules/.pnpm/vitest@2.1.8_@types+node@22.10.2_jsdom@25.0.1_sass-embedded@1.83.0/node_modules/vitest/dist/config.js";

// vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///D:/web/MyAmazon_Web/node_modules/.pnpm/vite@6.0.3_@types+node@22.10.2_sass-embedded@1.83.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/web/MyAmazon_Web/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@6.0.3_@types+node@22.10.2_sass-embedded@1.83.0__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/web/MyAmazon_Web/node_modules/.pnpm/vite-plugin-vue-devtools@7.6.8_rollup@4.28.1_vite@6.0.3_@types+node@22.10.2_sass-embedded@1.8_6mkl2snsgsznwtry63w6us6vsa/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/web/MyAmazon_Web/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///D:/web/MyAmazon_Web/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHdlYlxcXFxNeUFtYXpvbl9XZWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdlYlxcXFxNeUFtYXpvbl9XZWJcXFxcdml0ZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd2ViL015QW1hem9uX1dlYi92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgbWVyZ2VDb25maWcsIGRlZmluZUNvbmZpZywgY29uZmlnRGVmYXVsdHMgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xuaW1wb3J0IHZpdGVDb25maWcgZnJvbSAnLi92aXRlLmNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VDb25maWcoXG4gIHZpdGVDb25maWcsXG4gIGRlZmluZUNvbmZpZyh7XG4gICAgdGVzdDoge1xuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qKiddLFxuICAgICAgcm9vdDogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0pLFxuKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJcXFxcTXlBbWF6b25fV2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3ZWJcXFxcTXlBbWF6b25fV2ViXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93ZWIvTXlBbWF6b25fV2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVAsU0FBUyxpQkFBQUEsc0JBQXFCO0FBQ25SLFNBQVMsYUFBYSxnQkFBQUMsZUFBYyxzQkFBc0I7OztBQ0R1TCxTQUFTLGVBQWUsT0FBQUMsWUFBVztBQUVwUixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKMkgsSUFBTSwyQ0FBMkM7QUFPcE0sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJQyxLQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRGpCb0osSUFBTUMsNENBQTJDO0FBSXRNLElBQU8sd0JBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQUMsY0FBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEdBQUcsZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUM3QyxNQUFNQyxlQUFjLElBQUksSUFBSSxNQUFNRix5Q0FBZSxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiZmlsZVVSTFRvUGF0aCIsICJkZWZpbmVDb25maWciLCAiVVJMIiwgIlVSTCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgImRlZmluZUNvbmZpZyIsICJmaWxlVVJMVG9QYXRoIl0KfQo=
