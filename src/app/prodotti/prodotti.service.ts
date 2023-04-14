import { Injectable } from '@angular/core';
import { IProdotto } from '../lista-prodotti';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  getProdotti(): IProdotto[] {
    return [
      {
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2021',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'https://m.media-amazon.com/images/I/71Y8qCGwOuL.jpg',
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2021',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'https://m.media-amazon.com/images/I/81-VfpVRKRL.jpg',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2021',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl:
          'https://www.collinsdictionary.com/images/full/hammer_370448246.jpg',
      },
      {
        productId: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2021',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl:
          'https://images.thdstatic.com/productImages/5b6c7087-b35a-439c-b3ea-7421ca152fd6/svn/ryobi-hand-saws-rhchs201-64_600.jpg',
      },
      {
        productId: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2020',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl: 'https://m.media-amazon.com/images/I/41LO2OX6pRL.jpg',
      },
    ];
  }
}
