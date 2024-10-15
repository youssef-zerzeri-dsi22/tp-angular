import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule], // Add FormsModule here
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'angapp';
  list: string[] = [];
  msg: string = ''; // Initialize msg properly
  i:number=0;
  color: string[] = ['red','green','yellow','black'];
  nom='Liste';
  randd: boolean = true;
  isVisible: boolean = true;
  ajouter() {
    console.log('Button clicked!');
  }

  Ajouter() {
   
    this.list.push(this.msg); 
this.i++;
if(this.i==4){
  this.i=0;

}
  }
  suprimer(){
    this.list.pop();
    }
    rand(){
      if (this.nom === 'Liste') {
        this.nom = 'Random';
        this.randd=false;

      } else {
        this.nom = 'Liste';
        this.randd=true;
        this.i= Math.floor(Math.random() * 3);
this.Ajouter();
      }


    }
    toggleList() {
      this.isVisible = !this.isVisible;
    }
}
