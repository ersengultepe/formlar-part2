import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2-kayit',
  templateUrl: './form2-kayit.component.html',
  styleUrls: ['./form2-kayit.component.css']
})
export class Form2KayitComponent implements OnInit {

  kayitForm: FormGroup;
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

  kaydet(){

  }

}
