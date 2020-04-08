//登録ボタンの処理
function createTodo(){
  //nameとtodoから取得して定数に格納、戻り値はオブジェクト
  const name = document.getElementById("name");
  const todo = document.getElementById("todo");

  const form = {
      name: name.value,
      todo: todo.value,
  }

  //リソースの取得、Responseを含むpromiseを返す
    fetch("/todos",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
      //formオブジェクトをJSONに変換、responseを引数に渡しアロー関数に処理内容
      body: JSON.stringify(form) ,
    }).then((response) =>  {
        if (response.ok){
            alert("登録しました");
            getTodo();
        } else {
            alert("登録失敗しました");
        }
    }).catch((err) => {
        console.log(err);
    })
}

  //fetch指定なければデフォルトはGET
  //サーバーからデータを取得
  function getTodo(){
      fetch("/todos").then((response) => {
          return response.json();
      }).then((todos) => {
          for (const todo of todos){
              todo.button = "button";
          }
          makeTodoTable(todos);
      }).catch((err)=>{
          console.log(err);
      })
  }

//取得したtodoからテーブル作成
  function makeTodoTable(todos){
      const table = document.getElementById("table");
      table.innerHTML = "";
      //取得したtodoの先頭にヘッダー行追加
      todos.unshift({id:"id",name:"name",todo:"todo",oparation:"operation"});

      for(const todo of todos){
          const tr = document.createElement("tr");
          //values：値を配列にして、cを順番に処理
          for (const c of Object.values(todo)){
              if (c === "button"){
                  const button = document.createElement("button")
                  button.textContent = "削除";
                  button.onclick = function(){
                      fetch(`/todos?id=${todo.id}`,{
                          method: 'DELETE',
                      }).then((response)=> {
                          if (response.ok){
                              alert("削除しました");
                              getTodo();
                          } else {
                              alert("削除失敗しました");
                          }
                      }).catch((err)=> {
                          console.log(err);
                      })
                  }
                  tr.appendChild(button)
              } else {
                const td = document.createElement("td");
                td.textContent = c;
                tr.appendChild(td);
              }
            }
            table.appendChild(tr);
        }
      }
    
getTodo();