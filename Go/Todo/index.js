//登録ボタンの処理
function createTodo(){
  //nameとtodoから取得して定数に格納、戻り値はオブジェクト
  const name = document.getElementById("name");
  const todo = document.getElementById("todo");

 // console.log(name.value);
 // console.log(todo.value);

  const form = {
      name: name.value,
      todo: todo.value,
  }

  //リソースの取得
  fetch("/Todo",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      //オブジェクトをJSONに変換、responseを引数に渡しアロー関数に処理内容
      body: JSON.stringify(form) 
    }).then((response) =>  {
        if (response.ok){
            alert("登録しました");
            console.log(form);
            getTodo();
        } else {
            alert("登録失敗しました");
        }
    }).catch((err) => {
        console.log(err);
    });
  }

  //fetch指定なければデフォルトはGET
  function getTodo(){
      fetch("/").then((response) => {
          return response.json();
      }).then((todos)=> {
          //todosの値を順番にtodoに入れて反復処理、データが入っているとき後ろに削除ボタンを出す
          for (const todo of todos){
              todo.button = "button";
          }
          //Todo一覧を取得してtodosに格納、順番に一覧に追加
          makeTodoTable(todos)
      }).catch((err)=>{
          console.log(err);
      })
  }

  function makeTodoTable(todos){
      const table = document.getElementById("table");
      table.innerHTML = "";
      //取得したtodoの先頭にヘッダー行追加
      todos.unshift({id:"id",name:"name",todo:"todo",oparation:"operation"});

      for(const todo of todos){
          const tr = document.createElement("tr");
          //values：値を配列にして、cを順番に処理
          for (const c of Object.values(todo)){
              if(c === "button"){
                  const button = document.createElement("button");
                  button.textContent("削除");
                  button.onclick(deleteTodo(todo))
              }
          }
      }
  }

