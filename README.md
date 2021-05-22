# 静的サイトをインターネットに公開するまで
- Vue.jsを使っている

## buildされ、公開される先を変更する
- srcと同じ階層に、configを作る
- confg/index.js

```
const path = require('path')

module.exports = {
  dev: {
     /* 中略 */
  },

  build: {
    index: path.resolve(__dirname, '../docs/index.html'),

    assetsRoot: path.resolve(__dirname, '../docs'), 
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    /* 中略 */
  }
}
```

## 公開用に、buildを行う
- `yarn build`

## [Github.io](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages)を使う

いよいよ GitHub Pages の設定です。GitHubリポジトリの Settings → Pages → Source のところで、master branch を選択し、その後 Save ボタンを押します。


