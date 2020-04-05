# todoアプリ作成メモ

## index.js
Fetch APIにネット通信を含むリソース取得のためのインターフェースが定義されている
→RequestとResponse

### fetch()メソッド
取得したいリソースのパスを指定すると、成功か失敗かに関わらずリクエストに対するResponseに解決できるPromiseを返す
fetch()の引数はRequest()コンストラクタと同じ

## main.go

### main関数

- http.Handle()：アクセスされたURLと実行させる関数を関連付ける（ハンドラーの登録）

/にアクセスすると現在のディレクトリをResponseとして返す

- http.FilrServer()：引数に渡したものをResponseとして返す

- http.Dir()：指定したディレクトリを読み込む

- log.Fatal()：引数実行衆の致命的なエラーをターミナルに出力

### httpサーバー周り

- Handlerインターフェース
HTTPリクエストを受け取ってResponseを返す
ResponseWriterにリクエストを書き込む
ServeHTTP(ReaponseWriter, *Request)を定義するインターフェース

- http.Handle
表示するパスと、そのパスに対して実行される関数を指定する
→対応するHandlerをDefaultServeMuxに登録する
DefaultServeMux
→net/httpパッケージであらかじめ用意されたhttp.ServeMux型の構造体
 URLに対応したhttp.Handlerを実行するルーター

- http.HandleFunc
パスとfunc(ResponseWriter, *Request)を渡してDefaultServeMuxに登録する
HandlerのServeHTTP関数と同じシグニチャの関数をHandlerに変換した上で、DefaultServeMuxに登録する
[Go言語入門 Twitter風のWebアプリを作ろう（Webサーバーの実装編）](https://blog.kannart.co.jp/programming/2026/)

[GoでHTTPサーバー入門 [Handler][HandleFunc][ServeMux]](https://noumenon-th.net/programming/2019/09/12/handler/)

### jsonのデコード
- エンコード
構造体→文字列

- デコード
(jsonの)文字列→構造体
json自体が複雑な入れ子になっていると、結果を受け取る構造体も入れ子にしなければならないため実装が大変

### HTTPリクエスト
HTTPリクエスト(レスポンス？)のPOSTメソッドのBODYにjsonの文字列が格納される

