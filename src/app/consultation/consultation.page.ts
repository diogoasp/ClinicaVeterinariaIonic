import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiAnimalService } from 'src/app/service/api-animais.service';
import { Consulta } from 'src/app/models/Consulta';
import { ApiConsultasService } from 'src/app/service/api-consultas.service';
import { Animal } from '../models/Animal';

@Component({
  selector: 'app-consultation',
  templateUrl: 'consultation.page.html',
  styleUrls: ['consultation.page.scss']
})
export class ConsultationPage implements OnInit{

  consultas: Observable<any>
  consulta: Consulta;
  animal: Animal;
  animais: Observable<any>;

  constructor(private router: Router, private apiConsulta: ApiConsultasService, private apiAnimal: ApiAnimalService) {
    this.getAllConsultas();
  }

  ngOnInit(){}

  async getAllConsultas() {
    this.consultas = this.apiConsulta.getAll();
  }

  showDetailsConsulta(id: number){
    this.apiConsulta.get(id);
  }

  showDetailsAnimal(id: number) {
    this.animais = this.apiAnimal.get(id);
  }
}
