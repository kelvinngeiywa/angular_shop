import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import productsData from '../../assets/data/products.json';

@Component({
  imports: [Navbar],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  products=productsData;

  
}
