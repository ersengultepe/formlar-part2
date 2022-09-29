import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonelModel } from '../../form1/models/form1.model';

@Component({
  selector: 'app-form2-listele',
  templateUrl: './form2-listele.component.html',
  styleUrls: ['./form2-listele.component.css']
})
export class Form2ListeleComponent implements OnInit {

  filterText: string = "";
  @Input() isUpdateFormActive: boolean = false;
  @Input() personels: PersonelModel[] = [];
  @Output() deleteEvent = new EventEmitter<any>();

  @Output() getirEvent = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  getir(index: number){
    this.getirEvent.emit(index);
  }

  delete(index: number){
    this.deleteEvent.emit(index);
  }

}
