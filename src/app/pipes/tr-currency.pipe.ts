import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trCurrency'
})
export class TrCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string { 
    if (value == 0) {
      return "0,00 ₺";
    }

    let para = value.toString().split(".")
    let yeniTL = "";
    let tl = para[0];
    let kurus = "00";
    if (para.length > 1) {
      kurus = para[1]
      if (kurus.length == 1) {
        kurus = kurus + "0"
      }

      if (kurus.length > 1) {
        kurus = kurus.substring(0,2);    
      }
    }

    let count = 0;
    for (let i = tl.length; i > 0; i--) {      
      if (count == 3 && count < (tl.length)) {
        yeniTL = tl[i-1] + "." + yeniTL 
        count = 1;
      }else{
        yeniTL = tl[i-1] + yeniTL
        count++;
      }
    }
    yeniTL = yeniTL + "," + kurus + " ₺";
    return yeniTL;
  }

}
