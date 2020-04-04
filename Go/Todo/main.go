package main

import(
  "net/http"
)

func main(){
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/todos", fun(w http.ResponseWriter, r *http.Request))
  type Todo struct{
   ID int
   name string
  }
}
