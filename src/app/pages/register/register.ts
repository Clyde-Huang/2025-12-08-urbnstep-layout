import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [Nav, Footer, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

}
