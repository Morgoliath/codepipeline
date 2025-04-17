import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'; // Import necessary form modules

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  calculatorForm = new FormGroup({
    // Use number | null for type safety with 'number' inputs and setValue(null)
    firstInput: new FormControl<number | null>(null, Validators.required),
    secondInput: new FormControl<number | null>(null, Validators.required),
    operator: new FormControl<string | null>('', Validators.required) // Operator is a string
  });

  result: number | null = null;
  errorMessage: string | null = null;

  onSubmit() {
    this.result = null; // Clear previous result/error
    this.errorMessage = null;

    if (this.calculatorForm.valid) {
      // Use Number() to ensure values are treated as numbers
      const firstInput = Number(this.calculatorForm.value.firstInput);
      const secondInput = Number(this.calculatorForm.value.secondInput);
      const operator = this.calculatorForm.value.operator;

      // Check if inputs are valid numbers after conversion (though Validators.required helps)
       if (isNaN(firstInput) || isNaN(secondInput)) {
           this.errorMessage = 'Invalid number input.';
           return;
       }


      switch (operator) {
        case '+': {
          this.result = firstInput + secondInput;
          break;
        }
        case '-': {
          this.result = firstInput - secondInput;
          break;
        }
        case '*': {
          this.result = firstInput * secondInput;
          break;
        }
        case '/': {
          if (secondInput === 0) {
            this.errorMessage = "Error: Cannot divide by zero!";
            this.result = null;
          } else {
            this.result = firstInput / secondInput;
          }
          break;
        }
        default: {
          this.errorMessage = "Invalid operator selected.";
          this.result = null;
          break;
        }
      }
    } else {
        this.errorMessage = "Please fill in all fields correctly.";
    }
  }

  onClear() {
    this.calculatorForm.reset({
        firstInput: null,
        secondInput: null,
        operator: ''
    }); // Reset form to initial state
    this.result = null;
    this.errorMessage = null;
  }
}