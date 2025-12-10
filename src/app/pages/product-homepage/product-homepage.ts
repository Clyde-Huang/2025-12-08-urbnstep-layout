import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
 
@Component({
  selector: 'app-product-homepage',
  imports: [Nav,Footer],
  templateUrl: './product-homepage.html',
  styleUrl: './product-homepage.scss',
})
export class ProductHomepage {

}
