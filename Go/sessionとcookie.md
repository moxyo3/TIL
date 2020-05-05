# Goでのセッション
[sessionとcookie](https://astaxie.gitbooks.io/build-web-application-with-golang/ja/06.1.html)

## セッション 
HTTPプロトコルはステートレス、どの接続がどのユーザーのものか判断できない
→cookieとsessionで解決

### cookie
- クライアント側
ローカルマシンに保存されたユーザの履歴情報（ログイン情報を含む）
ログイン後、再度アクセスする際にブラウザがHTTPプロトコルを通してローカルのcookieの内容をサーバへ送信し検証する

### session
- サーバ側
サーバ上に保存されたユーザの操作の履歴情報
ハッシュテーブル構造でデータ保存
閲覧者にユニークなID = SessionIDを与える
秘密鍵に相当
cookieを通じてクライアントにsession idを保存する
クライアントサイドとサーバサイドの間でstateを保持

保存形式は
- URLによって渡す

- クライアントのcookieに保存する

- Sessionをデータベースに保存
