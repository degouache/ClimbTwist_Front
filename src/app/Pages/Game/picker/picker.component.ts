import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {

  selectedCircles: string[] = [];
  selected: number[] = [];
  circleWords = ['rojo', 'rosa', 'morado', 'azul', 'verde', 'amarillo', 'gris', 'negro', 'naranja', 'comodín'];

  constructor() { }

  ngOnInit(): void {
  }
  selectCircles(index: number) {
    const word = this.circleWords[index];
    const i = this.selectedCircles.indexOf(word);
    if (i > -1) {
      this.selectedCircles.splice(i, 1);
      this.selected.splice(this.selected.indexOf(index),1);
    } else {
      this.selectedCircles.push(word);
      this.selected.push(index);
    }
  }
}
