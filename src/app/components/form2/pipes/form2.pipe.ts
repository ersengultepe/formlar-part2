import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'form2Pipe'
})
export class Form2Pipe implements PipeTransform {

  transform(value: any[], searchText: string) {
    if (searchText == "") {
      return value;
    }

    return value.filter(p=> {
      const tcNo = p.tcNo.includes(searchText);
      const personelAdi = p.personelAdi.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
      const bolumu = p.bolumu.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
      const maasi = p.maasi.includes(searchText);
      const iseGirisTarihi = p.iseGirisTarihi.includes(searchText);
      return (tcNo + personelAdi + bolumu + maasi + iseGirisTarihi)
    })
  }

}
