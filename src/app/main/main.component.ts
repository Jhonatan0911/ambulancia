import { Component } from '@angular/core';
import { Ambulancia } from '../models/Ambulancia';
import { AmbulanciaService } from '../services/ambulancia.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private AmbulanciaService: AmbulanciaService){
    this.getAll();
  }

  loading: boolean = false;

  ambulancia: Ambulancia[] = [];


  getAll(){
    this.loading = true;
    let data: any = {
      filtro: '',
      estado: 'ACT'
    }
    this.AmbulanciaService.getAll(data).subscribe({
      next: (req:any) => {
        this.ambulancia = req.data
      },
      error: (err: any) => {
        this.loading = false
      },
      complete: () => {
        this.loading = false
      }
    })
  }
}
