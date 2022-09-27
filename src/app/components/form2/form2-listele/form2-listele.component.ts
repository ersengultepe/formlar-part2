import { Component, Input, OnInit } from '@angular/core';
import { PersonelModel } from '../../form1/models/form1.model';

@Component({
  selector: 'app-form2-listele',
  templateUrl: './form2-listele.component.html',
  styleUrls: ['./form2-listele.component.css']
})
export class Form2ListeleComponent implements OnInit {

  filterText: string = "";
  @Input() personels: PersonelModel[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  getir(index: number){

  }

  delete(index: number){

  }

}
