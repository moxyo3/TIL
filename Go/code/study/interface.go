package main

import "fmt"

func ex (i interface{}){
  fmt.Println(i)
}

func main(){
  ex("Golang")
  ex("Java")
  }
