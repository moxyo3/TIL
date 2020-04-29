# TypeScript

## 環境
- Ubuntu18.04
- visual studio code

## TypeScriptとは
Microsoft社によって開発されたAltJS(Alternative JavaScript)

### 実行環境
- webpackでの実行 

[TypeScriptチュートリアル](https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103)

distフォルダにhtml配置
srcにtsファイル配置

```
  npm start
```
で実行環境であるwebpack-dev-serverが起動
localhost:8080にアクセス
webpackの機能で自動再コンパイル、ブラウザリロードが行われる設定になっている

- VS CodeでのTypeScript

1. VS CodeでTypeScriptコードをjsにビルド

2. Ctrl + Shift + B（orターミナル>ビルド）
tsc:build - tsconfig.jsonを選択

3. Ctrl + F5でトランスパイル＆実行

[Visual Studio CodeではじめるTypeScript入門](https://www.casleyconsulting.co.jp/blog/engineer/255/)

[TypeScriptの環境:Visual Studio CodeでTypeScriptの開発環境を構築する](https://maku.blog/p/ak7u3h3/)

- VS Code環境設定
[Node.jsエコシステムを体験しよう](https://future-architect.github.io/typescript-guide/ecosystem.html)