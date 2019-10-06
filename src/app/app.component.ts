import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dss-course';
  costs = {
    bcw: 0.0,
    saleCost: 0.0,
    insurance: 0.0,
    transportCharges: 0.0,
    variableCost: 0.0,
    fixedCost: 0.0,
    tax: 0.0
  };
  isLocal: boolean;

  calculateCosts() {
      this.costs.saleCost = this.costs.bcw * 0.07;
      this.costs.insurance = this.costs.bcw * 0.02;
      this.costs.transportCharges = this.isLocal ? this.costs.bcw * 0.03 : this.costs.bcw * 0.1;
      if (this.costs.bcw > 1000) {
        this.costs.variableCost = this.costs.bcw * 0.08;
      } else if (this.costs.bcw > 800) {
        this.costs.variableCost = this.costs.bcw * 0.06;
      } else if (this.costs.bcw > 600) {
        this.costs.variableCost = this.costs.bcw * 0.05;
      } else {
        this.costs.variableCost = 0;
      }
      this.costs.fixedCost = 300;
      const beforeTax = this.costs.saleCost + this.costs.insurance +
                                          this.costs.transportCharges + this.costs.variableCost + this.costs.fixedCost;
      if (beforeTax < 1000) {
        this.costs.tax = beforeTax * 0.1;
      } else if (beforeTax < 2000) {
        this.costs.tax = beforeTax * 0.15;
      } else if (beforeTax < 3000) {
        this.costs.tax = beforeTax * 0.2;
      } else {
        this.costs.tax = 0;
      }
  }
}
