import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {RegEx} from "../../constants";
import {CarService} from "../../services";
import {ICar} from "../../models";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  cars: ICar[];
  editCar: ICar | null;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [
        Validators.pattern(RegEx.model),
        Validators.required
      ]),
      year: new FormControl(null, [
        Validators.min(1990),
        Validators.max(new Date().getFullYear()),
        Validators.required
      ]),
      price: new FormControl(0, [
        Validators.min(0),
        Validators.max(1000000),
        Validators.required
      ])
    })
  }

  save() {
    if (!this.editCar) {
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value);
        this.form.reset();
      })
    } else {
      this.carService.updateById(this.editCar.id, this.form.value).subscribe(value => {
        const updateCar = this.cars.find(car => car.id === this.editCar?.id);
        Object.assign(updateCar, value)
        this.editCar = null;

      })
    }
  }

  deleteCar(id: number): void {
    if (confirm(`Are you sure to delete?`)) {


      this.carService.deleteById(id).subscribe(() => {
        const index = this.cars.findIndex(car => car.id === id);
        this.cars.splice(index, 1);
      })
    }
  }

  editingCar(car: ICar): void {
    this.editCar = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
   }

}
