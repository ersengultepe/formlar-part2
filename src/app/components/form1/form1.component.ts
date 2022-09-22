import { Component, OnInit } from '@angular/core';

export class PersonelModel{
  tcNo: number;
  personelAdi: string;
  bolumu: string;
  maasi: number;
  iseGirisTarihi: Date;
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
  constructor() { }

  ngOnInit(): void {
  }

}
