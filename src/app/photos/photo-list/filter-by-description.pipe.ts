import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
  transform(phostos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery.length) {
      return phostos.filter((phosto) =>
        phosto.description.trim().toLowerCase().includes(descriptionQuery)
      );
    } else return phostos;
  }
}
