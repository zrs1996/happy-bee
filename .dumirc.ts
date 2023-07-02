import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  // base: '/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // runtimePublicPath: {},
  hash: true,
  themeConfig: {
    name: 'test',
  },
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'src' }],
    codeBlockMode: 'active',
  },
  alias: {
    'happy-bee': require.resolve(path.resolve(__dirname, 'src')),
  },
});
