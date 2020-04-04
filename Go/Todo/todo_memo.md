# todoアプリ作成メモ

## main.go

### main関数

- http.Handle()：アクセスされたURLと実行させる関数を関連付ける（ハンドラーの登録）

/にアクセスすると現在のディレクトリをResponseとして返す

- http.FilrServer()：引数に渡したものをResponseとして返す

- http.Dir()：指定したディレクトリを読み込む

- log.Fatal()：引数実行衆の致命的なエラーをターミナルに出力

