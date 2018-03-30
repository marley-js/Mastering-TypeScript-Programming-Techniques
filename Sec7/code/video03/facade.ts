import { Funds  } from './subsystem1';
import { BackgroundCheck } from './subsystem2';
import { Fraud } from './subsystem3';

export class Facade {
  private funds: Funds = new Funds();
  private backgroundCheck: BackgroundCheck = new BackgroundCheck();
  private fraud: Fraud = new Fraud();

  checkEligibility() {
    if (this.funds.checkFunds() && !this.backgroundCheck.criminalRecords() && !this.fraud.checkFraud()) {
      console.log('Eligible');
    } else {
      console.log('Not eligible');
    }
  }
}