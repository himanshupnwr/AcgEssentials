import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../InvestmentInput';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter<InvestmentInput>();
  
  // enteredInitialInvestment = 0;
  // enteredAnnualInvestment = 0;
  // enteredExpectedReturn = 5;
  // enteredDuration = 10;

  // onSubmit() {
  //   this.calculate.emit({
  //     initialInvestment: +this.enteredInitialInvestment,
  //     duration: +this.enteredDuration,
  //     expectedReturn: +this.enteredExpectedReturn,
  //     annualInvestment: +this.enteredAnnualInvestment,
  //   });
  // }

  constructor(private investmentService: InvestmentService) {}
  
  //using signals
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
  }
}
