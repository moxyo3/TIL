//登録ボタンの処理
function createTodo(){
  //nameとtodoから取得して定数に格納、戻り値はオブジェクト
  const name = document.getElementById("name")
  const todo = document.getElementById("todo")

  console.log(name.getAttribute(name))
  console.log(todo.getAttribute(todo))
}
