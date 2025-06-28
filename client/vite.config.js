// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react-swc'

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   server: {https: true},
// //   plugins: [react()],
// // })


// import { defineConfig } from "vite";
// import mkcert from "vite-plugin-mkcert";

// export default defineConfig({
//   server: { https: true },
//   plugins: [mkcert()],
// });
// ` `


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {https: true},
//   plugins: [react()],
// })
// vite.config.js
export default {
  server: {
    https: false, // <-- change this to false or remove it
  },
};


import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

// export default defineConfig({
//   server: { https: true },
//   plugins: [mkcert()],
// });