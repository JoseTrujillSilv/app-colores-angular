import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  color:string = 'red';
  colores = ['yellow','black','red','purple','green'];
  onclick(){
    this.color = this.colores[Math.floor(Math.random() * (4 - 0 + 1))];
    console.log(this.color);
  }
}
