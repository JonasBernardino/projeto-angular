import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnderecoComponent } from "./components/endereco/endereco.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnderecoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
