import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace',
})
export class ConvertToSpacePipe implements PipeTransform {
  //ritorna il valore di tipo string
  //la var carattere è quella che andra a sostituire
  //spazio ' ' è il valore che
  transform(valore: string, carattere: string): string {
    return valore.replace(carattere, ' ');
  }
}
