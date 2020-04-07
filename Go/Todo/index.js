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
  fetch("/todos",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      //オブジェクトをJSONに変換、responseを引数に渡しアロー関数に処理内容
      body: JSON.stringify(form) 
    }).then((response) =>  {
        if (response.ok){
            alert("登録しました");
            //console.log(form);
            getTodo();
        } else {
            alert("登録失敗しました");
        }
    }).catch((err) => {
        console.log(err);
    });
  }

  //fetch指定なければデフォルトはGET
  //サーバーからデータを取得
  function getTodo(){
      fetch("/todos").then((response) => {
          //responseをjsonとしてパース
          return response.json();
      }).then((todos)=> {
          makeTodoTable(todos)
      }).catch((err)=>{
          console.log(err);
      })
  }

//取得したtodoからテーブル作成
  function makeTodoTable(todos){
      alert("tableつくるよ！")
      const table = document.getElementById("table");
      table.innerHTML = "";
      //取得したtodoの先頭にヘッダー行追加
      todos.unshift({id:"id",name:"name",todo:"todo",oparation:"operation"});

      for(const todo of todos){
          const tr = document.createElement("tr");
          //values：値を配列にして、cを順番に処理
          for (const c of Object.values(todo)){
                  const td = document.createElement("td");
                  td.textContent = c;
                  tr.appendChild(td);
              }
        }
          table.appendChild(tr);
      }