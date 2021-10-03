import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx';

class WeightCalculatorStore {
  gearsList = [];
  selectedGears = [];

  constructor() {
    makeObservable(this, {
      gearsList: observable,
      addToGearList: action,
      removeFromGearList: action,
      selectedGears: observable,
      addToSelectedGears: action,
      removeFromSelectedGear: action
    });
  }

  addToGearList = (data) => {
    if (this.gearsList.filter(x => x.name === data.name).length > 0) {
      return;
    }

    this.gearsList.push(data);

    this.gearsList = this.gearsList.slice();  // dereference for update
  }

  removeFromGearList = (data) => {
    var target = this.gearsList.filter(x => x.name === data.name);

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