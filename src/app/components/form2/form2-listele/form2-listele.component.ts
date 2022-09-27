import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonelModel } from '../../form1/models/form1.model';

@Component({
  selector: 'app-form2-listele',
  templateUrl: './form2-listele.component.html',
  styleUrls: ['./form2-listele.component.css']
})
export class Form2ListeleComponent implements OnInit {

  filterText: string = "";
  @Input() personels: PersonelModel[] = [];
  @Output() deleteEvent = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  getir(index: number){

  }

  delete(index: number){
    this.deleteEvent.emit(index);
  }

}
