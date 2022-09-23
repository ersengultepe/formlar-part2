import { Pipe, PipeTransform } from '@angular/core';
import { PersonelModel } from '../models/form1.model';

@Pipe({
  name: 'form1Pipe'
})
export class Form1Pipe implements PipeTransform {

  transform(value: any[], search: string) {
    if (search == "") {
      return value;
    }

    //bir parameterli aramalar için geçerli
    //return value.filter(p => p.personelAdi.toLocaleLowerCase().includes(search.toLocaleLowerCase()))


    //birden fazla arama yapmak istiyorsak aşağıdaki gibi yazmalıyız
    return value.filter(p=> {
      const personelAdi = p.personelAdi.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      const bolumu = p.bolumu.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      const maasi = p.maasi.toString().includes(search);
      const iseGirisTarihi = p.iseGirisTarihi.includes(search);
      const tcNo = p.tcNo.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase());
      return (personelAdi + bolumu + maasi + iseGirisTarihi + tcNo)
    });
  }

}
