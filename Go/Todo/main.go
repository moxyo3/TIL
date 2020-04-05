package main

import (
	"encoding/json"
	"net/http"
	"log"
)

//jsonを格納する構造体
type Todo struct {
   ID int		`json:"id"`
   Name string	`json:"name"`
   Todo string	`json:"todo"`
}

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/todos", func(w http.ResponseWriter, r *http.Request){
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
}