## Spring Boot 入門メモ

### thymeleafテンプレート
- 選択変数式「*{フィールド名}」

th:objectをつけたタグ内ではオブジェクト名を省略可
省略しない場合は${オブジェクト名.フィールド名}を指定する必要がある

- th:inline="text"

[[ ${オブジェクト名.フィールド名} ]] で囲んだテキストを展開して表示

- リンクURL式「@{…}」

参照先（href、srcなど）を指定

- メッセージ式「#{…}」

外部テキスト読み込み

- th:errorclass="スタイル"

エラー時にclassにスタイルを追加する
th:fieldかname属性からエラーチェック時取得

- th:errors

エラー時にエラーメッセージを表示


### css,jsの置き場所
src/main/resources/static内にフォルダを作成
