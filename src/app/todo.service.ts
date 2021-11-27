import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TodoInterface} from "./todoInterface";
import {TodoListe} from "./todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  public doneItemList:any=[]
  public ItemList = new BehaviorSubject<any>([]);
  public todoItemList = new BehaviorSubject<any>([]);
  public todo=TodoListe;
  public newItemId:number=2;

//löscht ein todo in der Done Liste
  deleteItem(item: any){
      this.doneItemList.map((a:any, index:any)=>{
          if(item.id=== a.id){
              this.doneItemList.splice(index,1);
          }
      })
    this.ItemList.next(this.doneItemList);
  }

//All Done todo
  getItem(){
      return this.ItemList.asObservable();
  }

//legt ein todo wieder in der liste
  unDoneItem(item:any){
      this.doneItemList.map((a:any, index:any)=>{
          if(item.id=== a.id){
              this.todo.push(item);
              this.todoItemList.next(this.todo);
              this.ItemList.next(this.doneItemList);
              this.doneItemList.splice(index,1);
          }
      })
     return this.todoItemList.asObservable();
  }

  doneItem(item : any){
      this.doneItemList.push(item);
      this.ItemList.next(this.doneItemList);
      this.todo=this.todo.filter(elt=>elt.id!=item.id);
      this.todoItemList.next(this.todo);
  }

  removeAllItem(){
    this.doneItemList = []
    this.ItemList.next(this.doneItemList);
  }
 // add Item
  addNewItem(titles:string){
     this.todo.push({"id": this.newItemId++, "title" : titles, "date": new Date()});
     this.todoItemList.next(this.todo);
     return this.todoItemList.asObservable();

  }
  //All  todo
  getAllTodo(){
    return this.todoItemList.asObservable();
  }
}
