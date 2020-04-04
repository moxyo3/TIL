package main

import(
	"encoding/json"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/todos", func(w http.ResponseWriter, r *http.Request)) {
	createTodo(w,r)
	}

  type Todo struct {
   ID int		`json:"id"`
   name string	`json:"name"`
   Todo string	`json:"todo"`
  }
}

func createTodo(w ResponseWriter, r *http.Request) {
	var todo Todo
}