import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SwalService } from 'src/app/services/swal.service';
import { PersonelModel } from './models/form1.model';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  filterText: string = "";

  bolumler: string[] = [
    "Muhasebe",
    "Emeklilik İşlemleri",
    "Sağlık",
    "Bilgi İşlem",
    "Torpilli"
  ]

  model: PersonelModel = new PersonelModel();

  isUpdateFormActive: boolean = false;
  index: number = 0;

  selectedItem: string = "Muhasebe";

  personels: PersonelModel[] = [
    {
      "id": 0,
      "personelAdi": "Taner Saydam",
      "maasi": 5500,
      "bolumu": "Muhasebe",
      "tcNo": 53331231,
      "iseGirisTarihi": "09.22.2022"
    },
    {
      "id": 1,
      "personelAdi": "Tugay Saydam",
      "maasi": 1500,
      "bolumu": "Yazılım",
      "tcNo": 53331231231,
      "iseGirisTarihi": "09.25.2022"
    },
    {
      "id": 2,
      "personelAdi": "Seval Saydam",
      "maasi": 5100,
      "bolumu": "Bilgi İşlem",
      "tcNo": 53331231,
      "iseGirisTarihi": "02.09.2022"
    },
    {
      "id": 3,
      "personelAdi": "Tahir Saydam",
      "maasi": 8500,
      "bolumu": "Torpilli",
      "tcNo": 53331231,
      "iseGirisTarihi": "01.08.2022"
    }
  ];
  updateModel: PersonelModel = new PersonelModel();


  constructor(
    private _date: DatePipe,
    private _swal: SwalService
  ) { }

  ngOnInit(): void {
  }

  kaydet() {
    if (this.model.maasi < 5500) {
      this._swal.callSwal("Personel maaşı asgari ücretten az olamaz", "Error!", "error")
      return;
    }

    if (this.model.personelAdi.length<4) {
      this._swal.callSwal("Personel adı en az 3 karakter olmalıdır", "Error!", "error")
      return;
    }

    this.model.maasi = +this.model.maasi.toString().replace(",", ".")
    this.model.bolumu = this.selectedItem;

    this.personels.push(this.model);
    this.model = new PersonelModel();

    this._swal.callSwal("Kayıt işlemi başarılı", "Başarılı", "success")
  }

  delete(index: number) {
    this.personels.splice(index, 1);

    this._swal.callSwal("Silme işlemi başarılı", "Başarılı", "info")
  }

  getir(index: number) {
    this.updateModel = this.personels[index]
    this.isUpdateFormActive = true;
    this.index = index;
  }

  guncelle() {
    this.personels[this.index] = this.updateModel;
    this.isUpdateFormActive = false;
    this.updateModel = new PersonelModel();

    this._swal.callSwal("Güncelleme işlemi başarılı", "Başarılı", "warning")
  }

  vazgec() {
    this.isUpdateFormActive = false;
  }

  isSelectedItem(event: any) {
    this.selectedItem = event.target.value

  }
}
