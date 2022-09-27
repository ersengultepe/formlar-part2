import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SwalService } from 'src/app/services/swal.service';
import { PersonelModel } from '../form1/models/form1.model';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  personels: PersonelModel[] = [];
  isUpdateFormActive: boolean = false;
  model: PersonelModel = new PersonelModel();
  
  selectedItem: string = "";
  
  index: number = 0;

  constructor(
    private _date: DatePipe,
    private _swal: SwalService
  ) {  }

  ngOnInit(): void {}
 

  getir(index: number){
    // this.isUpdateFormActive = true;
    // this.updateModel = this.personels[index]
    // this.index = index
    // this.createUpdateForm();
  }

  delete(index: number){
    // this.personels.splice(index,1);
    // this._swal.callSwal("Personel kaydı başarıyla silindi","Başarılı","info");
  }


  kaydet(event: any){
    this.personels.push(event);
    this._swal.callSwal("Personel kayıt işlemi başarıyla tamamlandı","Başarılı","success")
    //this.createKayitForm();
  }

  guncelle(){
    // if (!this.updateForm.valid) {
    //   this._swal.callSwal("Zorunlu alanları doldurun!","Validasyon Hatası!","error")
    //   return;
    // }

    // this.personels[this.index] = this.updateForm.value
    // this.vazgec();
  }

  vazgec(){
    // this.isUpdateFormActive = false;
    // this.updateForm.reset();
  }

  
}
