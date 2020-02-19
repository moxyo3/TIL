# Gitとは
プロジェクト内で複数人が開発を行うときなど、リモートリポジトリ（共有リポジトリ）からローカルリポジトリにデータを保存しておき、
ローカルで編集後、編集履歴をリモートリポジトリに反映していく、分散バージョン管理のシステム。

## clone
リモートリポジトリをローカルにコピー

## fetch
リモートリポジトリのmasterブランチからローカルのorigin/masterブランチへ取り込む

## merge
ローカルのorigin/masterブランチからローカルのmasterブランチへ取り込む

## pull
git fetchとgit mergeを同時に行う
リモートリポジトリのmaster→（ローカルのorigin/master）→ローカルのmaster
```
git pull [リポジトリ名/defaultだとorigin] [ブランチ名]
```

## add
対象ファイルをバージョン管理の対象にする＝インデックスに登録
（＝ステージング）
```
git add [file名] #fileをインデックスに登録
git add . #すべてのファイルをインデックスに登録
```

参考
[【初心者向け】git fetch、git merge、git pullの違いについて](https://qiita.com/wann/items/688bc17460a457104d7d)
