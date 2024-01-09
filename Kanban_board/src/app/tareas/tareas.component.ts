import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../models/tarea-model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  @Input() tareas: Tarea;
  @Output() listas: String[] = [];

  constructor() {
    this.tareas = {id: 0, lista:"", img:"", titulo:"", usuarios:[], fechaFin: new Date()}

  }

  colorFecha(): String {
    let fechaActual = new Date();
    const milisegundos = 24*60*60*1000;

    if (this.tareas.lista != this.listas[2] && this.tareas.fechaFin || fechaActual > fechaActual) {
      return 'rojo';
    } else if (this.tareas.lista == this.listas[2] && this.tareas.fechaFin || fechaActual > fechaActual) {
      return 'verde'
    } else {
      return'gris'
    } 
      
    
  }
  

}
