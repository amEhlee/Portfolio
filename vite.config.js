import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  base: "/Portfolio/",
  plugins: [reactRefresh()],
  server: {
    open: true,
    port: 4000
  },
});
