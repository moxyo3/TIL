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
	http.HandleFunc("/todos", func(w http.ResponseWriter, r *http.Request){
		switch r.Method{
		case http.MethodPost:
			createTodo(w,r)
		case http.MethodGet:
			getTodo(w,r)
		case http.MethodDelete:
			deleteTodo(w,r)
		}
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

	//jsonから受け取ったnameとtodoをdbにinsert
	if _, err := db.Exec("insert into todos (name, todo) values (?, ?)", todo.Name, todo.Todo); err != nil{
		http.Error(w, err.Error(), 500)
		return
	}
}


func getTodo(w http.ResponseWriter, r *http.Request){
	todos := []Todo{}
	rows, err := db.Query("select * from todos")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next(){
		var (
			id int
			name string
			todo string
		)

		if err := rows.Scan(&id, &name, &todo); err != nil{
			http.Error(w, err.Error(), 500)
			return
		}
		
		todos = append(todos, Todo{ID: id, Name: name, Todo: todo})
	}

	if err := json.NewEncoder(w).Encode(&todo); err != nil{
		http.Error(w, err.Error(), 500)
		return
	}
}

func deleteTodo(w http.ResponseWriter, r *http.Request){
	id := r.URL.Query().Get("id");
	if (id == ""){
		http.Error(w,"id parameter is not found", 500)
		return
	}

	if _, err := db.Exec("delete from todos where id = ?", id) ; err != nil{
		http.Error(w, err.Error(), 500)
		return
	}
}
