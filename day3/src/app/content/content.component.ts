import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-content',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  selectedCategory: string = 'all';

  products = [
    { name: 'black bag', category: 'bags', price: 500, quantity: 5, image: 'images/bag1.jpg' },
    { name: 'brown scarf', category: 'scarf', price: 200, quantity: 1, image: 'images/s1.jpg' },
    { name: 'brown bag', category: 'bags', price: 350, quantity: 2, image: 'images/bag2.jpg' },
    { name: 'flory scarf', category: 'scarf', price: 150, quantity: 0, image: 'images/s2.jpg' },
    { name: 'modern bag', category: 'bags', price: 600, quantity: 3, image: 'images/bag3.jpg'} ,
    {name: 'white scarf', category: 'scarf', price: 400, quantity: 2, image: 'images/s3.jpg' }
    
  ];
  

  filterProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }
}
