import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

interface SizeStock {
  [key: string]: number;
}

interface Product {
  圖片: string;
  名稱: string;
  系列: string;
  價格: number;
  顏色: string;
  尺寸: SizeStock[];
}

@Component({
  selector: 'app-product-collectpage',
  imports: [Nav, Footer, CommonModule],
  templateUrl: './product-collectpage.html',
  styleUrl: './product-collectpage.scss',
})
export class ProductCollectpage implements OnInit {
  product: Product | null = null;
  selectedSize: string = '';
  sizeOptions: { size: string; stock: number }[] = [];

  constructor(private router: Router) {
    // 從 navigation state 獲取產品資料
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.product = navigation.extras.state['product'];
    }
  }

  ngOnInit(): void {
    // 如果沒有從 navigation state 獲取到資料,嘗試從 history state 獲取
    if (!this.product) {
      const state = history.state;
      if (state && state.product) {
        this.product = state.product;
      }
    }

    // 處理尺寸資料
    if (this.product?.尺寸) {
      this.sizeOptions = this.product.尺寸.map(sizeObj => {
        const [size, stock] = Object.entries(sizeObj)[0];
        return { size, stock };
      });
    }
  }

  // 選擇尺寸
  selectSize(size: string): void {
    this.selectedSize = size;
  }

  // 獲取選中尺寸的庫存
  getSelectedStock(): number {
    const selected = this.sizeOptions.find(opt => opt.size === this.selectedSize);
    return selected ? selected.stock : 0;
  }

  // 檢查尺寸是否有庫存
  hasStock(stock: number): boolean {
    return stock > 0;
  }
}