import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  constructor( private todoService:TodoService) { }
  public item:any=[];

  ngOnInit(): void {
    this.todoService.getItem().subscribe(res=>{
      this.item=res;
    });

  }

  //legt ein todo wieder in der liste
  unDone(item:any){
    this.todoService.unDoneItem(item)
  }

  //löscht ein todo in der Done Liste
  delete(item:any){
    this.todoService.deleteItem(item)
  }


}
