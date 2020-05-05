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