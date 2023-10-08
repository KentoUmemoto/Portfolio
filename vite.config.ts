import generouted from '@generouted/react-router/plugin'
import mdx, { Options } from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import remarkGfm from 'remark-gfm'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

const mdxOptions: Options = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    generouted(),
    { enforce: 'pre', ...mdx(mdxOptions) },
  ],
})
