import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export class PersonelModel{
  id: number = 0;
  tcNo: number = 0;
  personelAdi: string = "";
  bolumu: string = "Muhasebe";
  maasi: number = 0;
  iseGirisTarihi: string;

  constructor(
    private _date: DatePipe
  ){
    this.iseGirisTarihi = _date.transform(new Date(), 'yyyy-MM-dd');
  }


  // constructor(tc: number, personelAdi: string, bolumu: string){
  //   this.tcNo = tc;
  //   this.personelAdi = personelAdi;
  //   this.bolumu = bolumu;
  // }
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  bolumler: string[] = [
    "Muhasebe",
    "Emeklilik İşlemleri",
    "Sağlık",
    "Bilgi İşlem",
    "Torpilli"
  ]

  model: PersonelModel = new PersonelModel(this._date);

  isUpdateFormActive: boolean = false;
  index: number = 0;

  personels: PersonelModel[] = [];
  updateModel: PersonelModel = new PersonelModel(this._date);


  constructor(
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
  }

  kaydet(){
   this.model.maasi = +this.model.maasi.toString().replace(",",".")
   this.personels.push(this.model);    
   this.model = new PersonelModel(this._date); 
  }

  delete(index: number){
    this.personels.splice(index,1);
  }

  getir(index: number){
    this.updateModel = this.personels[index]
    this.isUpdateFormActive = true;
    this.index = index;
  }

  guncelle(){
    this.personels[this.index] = this.updateModel;
    this.isUpdateFormActive = false;
    this.updateModel = new PersonelModel(this._date);
  }

  vazgec(){
    this.isUpdateFormActive = false;
  }
}
