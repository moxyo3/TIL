# JavaScriptとの差異まとめ

- document.getElementById("hoge").valueでエラー

The property 'hoge' does not exist on value of type 'HTMLElement'
のエラーが発生する
HTMLElementの型にはvalueプロパティが存在しないので、HTMLInputElement(HTMLElementを継承している)にType Assertionする

```
  const element: HTMLInputElement =<HTMLInputElement>document.getElementById('hoge');
  const value: string = element.value;

```

【参考】
[TypeScriptで document.getElementById("hoge").value をすると出るThe property ‘hoge' does not exist on value of type 'HTMLElement' というエラーを解消する](https://qiita.com/Sekky0905/items/a88721f2af41050c93f2)

