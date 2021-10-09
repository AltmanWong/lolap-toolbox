import WeightCalculatorStore from './pages/camp/weight-calculator/weight-calculator-store';

class RootStore {
  constructor() {
    this.weightCalculatorStore = new WeightCalculatorStore(this)
  }
}

export default RootStore;