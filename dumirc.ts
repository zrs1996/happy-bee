import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'doc-site', // 输出文件夹
  // dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  hash: true,
  crossorigin: {},
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'src' }],
    codeBlockMode: 'active',
  },
  alias: {
    'happy-bee': require.resolve(path.resolve(__dirname, 'src')),
  },
  themeConfig: {
    // 主题配置项均放置在这一层
  },
});