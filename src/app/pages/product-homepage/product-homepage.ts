import { Component, OnInit } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { ProductService } from '../../@services/product.service';
 
@Component({
  selector: 'app-product-homepage',
  imports: [Nav, Footer],  
  templateUrl: './product-homepage.html',
  styleUrl: './product-homepage.scss',
})
export class ProductHomepage implements OnInit {
  products: any[] = []; 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('產品資料:', this.products);
      },
      error: (error) => {
        console.error('讀取產品資料失敗:', error);
      }
    });
  }
}