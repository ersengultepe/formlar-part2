import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export class PersonelModel{
  id: number = 0;
  tcNo: number = 0;
  personelAdi: string = "";
  bolumu: string = "Muhasebe";
  maasi: number = 0;
  iseGirisTarihi: string;

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

  model: PersonelModel = new PersonelModel();

  personels: PersonelModel[] = [];


  constructor(
    private _date: DatePipe
  ) { 
    this.model.iseGirisTarihi = _date.transform(new Date(), 'yyyy-MM-dd')
  }

  ngOnInit(): void {
  }

  kaydet(){
   this.personels.push(this.model);    
   this.model = new PersonelModel();  
  }

}
