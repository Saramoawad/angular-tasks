
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, ContentComponent], 
  
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'firstProject';
 
}
