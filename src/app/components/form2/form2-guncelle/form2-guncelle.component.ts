import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonelModel } from '../../form1/models/form1.model';

@Component({
  selector: 'app-form2-guncelle',
  templateUrl: './form2-guncelle.component.html',
  styleUrls: ['./form2-guncelle.component.css']
})
export class Form2GuncelleComponent implements OnInit {

  updateForm: FormGroup;
  updateModel: PersonelModel = new PersonelModel();
  bolumler: string[] = [
    "Muhasebe",
    "Emeklilik İşlemleri",
    "Sağlık",
    "Bilgi İşlem",
    "Torpilli"
  ]

  constructor(
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
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

  guncelle(){

  }

  vazgec(){

  }

  checkInputForValid(name: string){
    //console.log(this.kayitForm.controls[name]);
    if (!this.updateForm.controls[name].touched) {
      return "form-control"
    }

    if(this.updateForm.controls[name].valid){
      return "form-control is-valid"
    }

    return "form-control is-invalid"
  }
}
