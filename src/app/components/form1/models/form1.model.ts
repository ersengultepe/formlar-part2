import { DatePipe } from "@angular/common";

export class PersonelModel{
    id: number = 0;
    tcNo: number = 0;
    personelAdi: string = "";
    bolumu: string = "Muhasebe";
    maasi: number = 0;
    iseGirisTarihi: string;
  
    // constructor(
    //   private _date: DatePipe
    // ){
    //   this.iseGirisTarihi = _date.transform(new Date(), 'yyyy-MM-dd');
    // }

  }