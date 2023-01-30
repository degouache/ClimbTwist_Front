import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {

  selectedCircles: string[] = [];
  selectedCirclesNum: number[] = [];
  circleWords = ['rojo', 'rosa', 'morado', 'azul', 'verde', 'amarillo', 'gris', 'negro', 'naranja', 'comodín'];
  selectedParts: string[] = [];
  selectedPartsNum: number[] = [];
  partsWords = ['Pie izquierdo', 'Pie derecho', 'Mano izquierda', 'Mano derecha'];

  constructor() { }

  ngOnInit(): void {
  }
  selectCircles(index: number) {
    const word = this.circleWords[index];
    const i = this.selectedCircles.indexOf(word);
    if (i > -1) {
      this.selectedCircles.splice(i, 1);
      this.selectedCirclesNum.splice(this.selectedCirclesNum.indexOf(index),1);
    } else {
      this.selectedCircles.push(word);
      this.selectedCirclesNum.push(index);
    }
  }

  selectPart(index: number) {
    const word = this.partsWords[index];
    const i = this.selectedParts.indexOf(word);
    if (i > -1) {
      this.selectedParts.splice(i, 1);
      this.selectedPartsNum.splice(this.selectedPartsNum.indexOf(index),1);
    } else {
      this.selectedParts.push(word);
      this.selectedPartsNum.push(index);
    }
  }
}
