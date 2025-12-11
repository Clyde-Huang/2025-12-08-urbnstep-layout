import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductHomepage } from './pages/product-homepage/product-homepage';
import { BrandStory } from './pages/brand-story/brand-story';


export const routes: Routes = [
    //(path:)後面路徑自己命名

    { path: 'Home', component: Home },
    { path: 'ProductHomepage', component: ProductHomepage },
    { path: 'BrandStory', component: BrandStory },





    { path: '**', component: Home }, //亂打網址到到這 要最下方
    { path: '', redirectTo: '/Home', pathMatch: 'full' }, //重新倒到首頁到Home 這樣Home為初始頁  但先要設path:home
















];
