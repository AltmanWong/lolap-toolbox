import { makeAutoObservable } from 'mobx';

class WeightCalculatorStore {
  constructor() {
    makeAutoObservable(this);

    this.gearsList = [];
    this.selectedGears = [];
  }

  addToGearList = (data) => {
    if (this.gearsList.filter(x => x.title === data.title)) {
      return;
    }

    this.gearsList.push(data);
  }

  removeFromGearList = (data) => {
    var target = this.gearsList.filter(x => x.title === data.title);

    if (target.length > 0) {
      for (var item in target) {
        this.gearsList.remove(item);
      }
    }
  }

  addToSelectedGears = (data) => {
    this.selectedGears.push(data);
  }

  removeFromSelectedGear = (data) => {

  }
}

export default WeightCalculatorStore;