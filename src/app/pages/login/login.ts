import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Nav, Footer, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
