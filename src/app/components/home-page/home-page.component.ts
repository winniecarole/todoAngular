import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TodoService} from "../../todo.service";
import {TodoListe} from "../../todos";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private modalService: NgbModal,private todoservice:TodoService) { }
  title:string='';
  public todoItemListe=TodoListe;



  ngOnInit(): void {
    this.todoservice.getAllTodo().subscribe(res=>{
      this.todoItemListe=res;
    })
    this.todoItemListe=this.todoservice.todo;
  }
  closeResult: string = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.todoservice.addNewItem(this.title);
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  additem(item:any){
    this.todoservice.doneItem(item);
  }



}
