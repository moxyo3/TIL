# MySQLメモ

## Ubuntuローカル環境へ構築

[UbuntuにMySQLをインストール](https://qiita.com/houtarou/items/a44ce783d09201fc28f5)

- MySQLにログイン

```
$ sudo mysql -u root
```

## memo

- Booleanの扱い
booleanでもtinyint(1)のどちらでもOK
INSERTするときはtrueは「1」、falseは「0」

値の比較は「=」で（isだと想定と違う）

[【MySQL】MySQLでのBooleanの扱い](https://tmg0525.hatenadiary.jp/entry/2019/05/11/065857)

## 文字コード
uft8mb4に設定（絵文字にも対応OK)
[MySQL 5.7 文字コードの確認とmy.confでutf8mb4への変更](https://symfoware.blog.fc2.com/blog-entry-2244.html)

