const path = require('path')
const watch = process.argv.includes('--watch')
const minify = process.argv.includes('--minify')

const vuePlugin = require('esbuild-vue');

if (require.main === module) {
  require('esbuild').build({
    entryPoints: ['app/javascript/hello_vue.js', 'app/javascript/show_current_time.js', 'app/javascript/application.js'],
    bundle: true,
    outdir: path.join(process.cwd(), 'app/assets/builds'),
    sourcemap: true,
    watch,
    minify,
    plugins: [vuePlugin()],
    define: {
      "process.env.NODE_ENV": JSON.stringify("development"),
    },
  });
}
