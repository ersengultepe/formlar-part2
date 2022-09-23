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

  selectedItem: string = "Muhasebe";

  personels: PersonelModel[] = [];
  updateModel: PersonelModel = new PersonelModel(this._date);


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
    this.model = new PersonelModel(this._date);

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
    this.updateModel = new PersonelModel(this._date);

    this._swal.callSwal("Güncelleme işlemi başarılı", "Başarılı", "warning")
  }

  vazgec() {
    this.isUpdateFormActive = false;
  }

  isSelectedItem(event: any) {
    this.selectedItem = event.target.value

  }
}
