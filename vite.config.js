import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        folderHome: "folder-home.html",
        projectRoom: "project-room.html",
        projectRoomClean: "project-room-clean.html",
        spotlight: "spotlight.html",
      },
    },
  },
  plugins: [react()],
});
