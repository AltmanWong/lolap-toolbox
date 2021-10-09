import { action, makeObservable, observable, observe } from 'mobx';

class WeightCalculatorStore {
  gearsList = [];
  selectedGears = [];

  KEY = {
    GEAR_LIST: 'GEAR_LIST',
    SELECTED_GEARS: 'SELECTED_GEARS'
  }

  constructor() {
    this.reloadFromLocalStorage();

    makeObservable(this, {
      gearsList: observable,
      addToGearList: action,
      removeFromGearList: action,
      selectedGears: observable,
      addToSelectedGear: action,
      removeFromSelectedGear: action,
      isGearSelected: action
    });

    this.observeDataChangeAndWriteToLocalStorage();
  }

  reloadFromLocalStorage = () => {
    if (this.KEY.GEAR_LIST in localStorage) {
      try {
        var storedGearList = localStorage.getItem(this.KEY.GEAR_LIST);

        if (storedGearList) {
          this.gearsList = JSON.parse(storedGearList);
        }
      } catch (ex) {
        console.log(ex);
      }
    }

    if (this.KEY.SELECTED_GEARS in localStorage) {
      try {
        var storedSelectedGears = localStorage.getItem(this.SELECTED_GEARS);

        if (storedSelectedGears) {
          this.selectedGears = JSON.parse(storedSelectedGears);
        }
      } catch (ex) {
        console.log(ex);
      }
    }
  }

  observeDataChangeAndWriteToLocalStorage = () => {
    observe(this.gearsList, (change) => {
      localStorage.setItem(this.KEY.GEAR_LIST, JSON.stringify(this.gearsList));
    });

    observe(this.selectedGears, (change) => {
      localStorage.setItem(this.KEY.SELECTED_GEARS, JSON.stringify(this.selectedGears));
    })
  }

  addToGearList = (data) => {
    if (this.gearsList.filter(x => x.name === data.name).length > 0) {
      return;
    }

    this.gearsList.push(data);
  }

  removeFromGearList = (data) => {
    const index = this.gearsList.findIndex(x => x.name === data.name);

    if (index > -1) {
      this.gearsList.splice(index, 1);
    }
  }

  addToSelectedGear = (data) => {
    this.selectedGears.push(data);
  }

  removeFromSelectedGear = (data) => {
    const index = this.selectedGears.findIndex(x => x.name === data.name);

    if (index > -1) {
      this.selectedGears.splice(index, 1);
    }
  }

  isGearSelected = (data) => {
    return !!this.selectedGears.find(x => x.name === data.name)
  }
}

export default WeightCalculatorStore;