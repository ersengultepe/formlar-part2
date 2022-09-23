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
}
