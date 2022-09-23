import { Component, OnInit } from '@angular/core';
import { PersonelModel } from '../form1/models/form1.model';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  filterText: string = "";
  personels: PersonelModel[] = [];
  isUpdateFormActive: boolean = false;
  model: PersonelModel = new PersonelModel();
  updateModel: PersonelModel = new PersonelModel();
  selectedItem: string = "";
  bolumler: string[] = [
    "Muhasebe",
    "Emeklilik İşlemleri",
    "Sağlık",
    "Bilgi İşlem",
    "Torpilli"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getir(index: number){

  }

  delete(index: number){

  }

  isSelectedItem(event: any){

  }

  kaydet(){

  }

  guncelle(){

  }

  vazgec(){
    
  }
}
