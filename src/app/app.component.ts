import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component'; // Import Calculator

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalculatorComponent], // Import CalculatorComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Link the correct CSS
})
export class AppComponent {
  // Updated title to match the image header
  title = 'Sample Angular App created for Solutions Architect Path';
}