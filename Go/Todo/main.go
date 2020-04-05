package main

import (
	"encoding/json"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/todos", func(w http.ResponseWriter, r *http.Request){
	createTodo(w,r)
	})

  type Todo struct {
   ID int		`json:"id"`
   Name string	`json:"name"`
   Todo string	`json:"todo"`
  }
}

func createTodo(w ResponseWriter, r *http.Request) {
	var todo Todo
	if err := json.NewDecoder(r.Body).Decode(&todo); err != nil{
		http.Error(w, err.Error(), 500)
		return
	}
}
