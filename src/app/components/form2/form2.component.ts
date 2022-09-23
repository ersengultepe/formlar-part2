import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  kayitForm: FormGroup;

  constructor(
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.createKayitForm();
  }

  createKayitForm(){
    this.kayitForm = new FormGroup({
      personelAdi: new FormControl("",[Validators.required, Validators.minLength(3)]),
      bolumu: new FormControl("Muhasebe", Validators.required),
      maasi: new FormControl(5500, [Validators.required, Validators.min(5500)]),
      iseGirisTarihi: new FormControl(this._date.transform(new Date(), 'yyyy-MM-dd'), Validators.required),
      tcNo: new FormControl("",[Validators.required, Validators.minLength(11),Validators.maxLength(11), Validators.pattern("[a-zA-Z0-9[B]_-.[/B]]")])
    })
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
