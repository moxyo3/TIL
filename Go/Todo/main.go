package main

import (
	"encoding/json"
	"net/http"
	"log"
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

//jsonを格納する構造体
type Todo struct {
   ID int		`json:"id"`
   Name string	`json:"name"`
   Todo string	`json:"todo"`
}

func main() {
	var err error
	db, err = sql.Open("sqlite3", "todo.db")
	if err != nil{
		log.Fatal(err)
	}
	//defer:関数の終了時にdbクローズ
	defer db.Close()

	if _, err := db.Exec("create table if not exists todos(id integer primary key autoincrement, name varchar(255), todo varchar(255))"); err != nil{
		log.Fatal(err)
	}

	http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/Todo", func(w http.ResponseWriter, r *http.Request){
	createTodo(w,r)
	})

	log.Println("start http server :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}


func createTodo(w http.ResponseWriter, r *http.Request) {
	var todo Todo
	if err := json.NewDecoder(r.Body).Decode(&todo); err != nil{
		http.Error(w, err.Error(), 500)
		return
	}

	if _, err := db.Exec("insert into todos (name, todo) values (?, ?)", todo.Name, todo.Todo); err != http.Error(w, err.Error(), 500)
	return
}