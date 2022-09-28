import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(message:string, title: string, options: any){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      timer: 3000,
      timerProgressBar: true,
      showCancelButton: false,
      showConfirmButton: false
    })
    Toast.fire(title,message, options)
  }

  callSwalQuestion(title: string, text: string, btnIcon: string, btnName: string){
    let swal = Swal.fire({
      title: title,
      text: text,
      showCancelButton: true,
      cancelButtonText: "<i class='fa-solid fa-circle-xmark'></i> Vazgeç",
      showConfirmButton: true,
      cancelButtonColor: "red",
      confirmButtonText: "<i class='" + btnIcon + "'></i> " + btnName,
      icon: "question"
    });
    return swal;
  }
  
}
