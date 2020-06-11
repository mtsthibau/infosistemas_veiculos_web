import { Component, OnInit } from '@angular/core';
import { VeiculoService } from './services/veiculo.service';
import { Veiculo } from './models/veiculo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  veiculo = {} as Veiculo;
  veiculos: Veiculo[];

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit() {
    this.getVeiculos();
  }

  getVeiculos() {
    this.veiculoService.getVeiculos().subscribe((veiculos: Veiculo[]) => {
      this.veiculos = veiculos;
    });
  }
}
