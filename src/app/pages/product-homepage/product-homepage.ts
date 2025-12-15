import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { ProductService } from '../../@services/product.service';

interface Product {
  圖片: string;
  名稱: string;
  系列: string;
  價格: number;
  顏色: string;
  尺寸: any[];
}

@Component({
  selector: 'app-product-homepage',
  imports: [Nav, Footer, FormsModule, RouterModule],
  templateUrl: './product-homepage.html',
  styleUrl: './product-homepage.scss',
})
export class ProductHomepage implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText: string = '';
  selectedCategory: string = '所有商品';

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
        console.log('產品資料:', this.products);
      },
      error: (error) => {
        console.error('讀取產品資料失敗:', error);
      }
    });
  }

  // 搜尋功能(名稱模糊搜尋 + 類別篩選)
  onSearch(): void {
    const searchLower = this.searchText.toLowerCase().trim();

    this.filteredProducts = this.products.filter(product => {
      // 名稱模糊搜尋
      const matchesSearch = !searchLower ||
        product['名稱'].toLowerCase().includes(searchLower);

      // 類別篩選
      const matchesCategory = this.selectedCategory === '所有商品' ||
        product['系列'] === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  // 分類篩選
  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.onSearch();
  }

  // 導航到商品詳情頁並傳遞資料
  goToProductDetail(product: Product): void {
    this.router.navigate(['/ProductCollectpage'], {
      state: { product: product }
    });
  }
}