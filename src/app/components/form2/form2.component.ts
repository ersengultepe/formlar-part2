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
  updateForm: FormGroup;

  constructor(
    private _date: DatePipe,
    private _swal: SwalService
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
      tcNo: new FormControl("",[Validators.required, Validators.minLength(11),Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    })
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      personelAdi: new FormControl(this.updateModel.personelAdi,[Validators.required, Validators.minLength(3)]),
      bolumu: new FormControl(this.updateModel.bolumu, Validators.required),
      maasi: new FormControl(this.updateModel.maasi, [Validators.required, Validators.min(5500)]),
      iseGirisTarihi: new FormControl(this._date.transform(this.updateModel.iseGirisTarihi, 'yyyy-MM-dd'), Validators.required),
      tcNo: new FormControl(this.updateModel.tcNo,[Validators.required, Validators.minLength(11),Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      id: new FormControl(this.updateModel.id, Validators.required)
    })
  }

  getir(index: number){
    this.isUpdateFormActive = true;
    this.updateModel = this.personels[index]
    this.createUpdateForm();
  }

  delete(index: number){
    this.personels.splice(index,1);
    this._swal.callSwal("Personel kaydı başarıyla silindi","Başarılı","info");
  }

  isSelectedItem(event: any){

  }

  kaydet(){
    //console.log(this.kayitForm.value);   
    if (!this.kayitForm.valid) {
      this._swal.callSwal("Zorunlu alanları doldurun!","Validasyon Hatası!","error")
      return;
    } 

    this.personels.push(this.kayitForm.value);
    this._swal.callSwal("Personel kayıt işlemi başarıyla tamamlandı","Başarılı","success")
    this.createKayitForm();
  }

  guncelle(){

  }

  vazgec(){

  }

  checkInputForValid(name: string){
    //console.log(this.kayitForm.controls[name]);
    if (!this.kayitForm.controls[name].touched) {
      return "form-control"
    }

    if(this.kayitForm.controls[name].valid){
      return "form-control is-valid"
    }

    return "form-control is-invalid"
  }
}
