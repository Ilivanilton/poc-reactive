import { Product } from './product';

export class ProductData {

  static products: Product[] = [
    {
      id: 1,
      productName: 'Machado',
      productCode: 'GDN-0011',
      description: 'Descri',
      price: 19.95,
      categoryId: 1,
      quantityInStock: 15,
      supplierIds: [1, 2]
    },
    {
      id: 2,
      productName: 'Martelo',
      productCode: 'GDN-0023',
      description: 'Descri',
      price: 32.99,
      categoryId: 1,
      quantityInStock: 2,
      supplierIds: [3, 4]
    },
    {
      id: 5,
      productName: 'Cadeira',
      productCode: 'TBX-0048',
      description: 'Descri',
      price: 8.9,
      categoryId: 3,
      quantityInStock: 8,
      supplierIds: [5, 6]
    },
    {
      id: 8,
      productName: 'Carro de brinquedo',
      productCode: 'TBX-0022',
      description: 'Descri',
      price: 11.55,
      categoryId: 3,
      quantityInStock: 6,
      supplierIds: [7, 8]
    },
    {
      id: 10,
      productName: 'PS5',
      productCode: 'GMG-0042',
      description: 'Descri',
      price: 35.95,
      categoryId: 5,
      quantityInStock: 12,
      supplierIds: [9, 10]
    },
    {
      id: 13,
      productName: 'Mouse',
      productCode: 'GMG-0001',
      description: 'Descri',
      price: 675.00,
      categoryId: 5,
      quantityInStock: 0
    }
  ];
}
