//登録ボタンの処理
function createTodo(){
  //nameとtodoから取得して定数に格納、戻り値はオブジェクト
  var name = document.getElementById("name").value;
  var todo = document.getElementById("todo").value;


  const form = {
      name: name.value,
      todo: todo.value
  }

  //リソースの取得
  fetch("/Todo",{
      method: 'POST' ,
      headers: {
          'Content-Type': 'application/json'
      },
      //オブジェクトをJSONに変換、responseを引数に渡しアロー関数に処理内容
      body: JSON.stringify(form)
    }).then((response) =>  {
        if (response.ok){
            alert("登録しました")
            getTodo()
        } else {
            alert("登録失敗しました")
        }
    }).catch((err) => {
        console.log(err);
    })
  }

  function getTodo(){

  }

