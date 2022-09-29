import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SwalService } from 'src/app/services/swal.service';
import { PersonelModel } from '../form1/models/form1.model';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  updateModel: PersonelModel = new PersonelModel();
  personels: PersonelModel[] = [
    {
      id: 0,
      bolumu : "Muhasebe",
      iseGirisTarihi : "01.01.2022",
      maasi : 5500,
      personelAdi: "Taner Saydam",
      tcNo : 53317237416
    },
    {
      id: 1,
      bolumu : "Yazılım",
      iseGirisTarihi : "02.02.2022",
      maasi : 5500,
      personelAdi: "Tugay Saydam",
      tcNo : 53417237416
    },
    {
      id: 2,
      bolumu : "Müdür",
      iseGirisTarihi : "03.03.2022",
      maasi : 5500,
      personelAdi: "Seval Saydam",
      tcNo : 53517237416
    }
  ];
  isUpdateFormActive: boolean = false;
  model: PersonelModel = new PersonelModel();
  isSuccess = false;
  selectedItem: string = "";
  
  index: number = 0;

  constructor(
    private _date: DatePipe,
    private _swal: SwalService
  ) {  }


  ngOnInit(): void {}
 
  canDeactive(){
    if (this.isUpdateFormActive) {
      return confirm("Çıkmak istiyor musunuz?")
    }
    return true;    
  }

  getir(index: number){
    this.isUpdateFormActive = true;
    this.updateModel = this.personels[index]
    this.index = index
  }

  delete(index: number){
    this._swal.callSwalQuestion("Sil?","Silmek istiyor musunuz?","fa-solid fa-trash","Sil").then((res)=>{
      if (res.isConfirmed) {
        this.personels.splice(index,1);
        this._swal.callSwal("Personel kaydı başarıyla silindi","Başarılı","info");    
      }
    })
  }


  kaydet(event: any){
    this.personels.push(event);
    this._swal.callSwal("Personel kayıt işlemi başarıyla tamamlandı","Başarılı","success")
    this.isSuccess = true
    //this.createKayitForm();
  }

  guncelle(event: any){    
    this.personels[this.index] = event
    this.vazgec();
  }

  vazgec(){
     this.isUpdateFormActive = false;
    }

  isSuccessChange(event: any){
    if (event) {
      this.isSuccess = !this.isSuccess
    }
  }
  
}
