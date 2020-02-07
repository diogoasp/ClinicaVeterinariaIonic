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

  ngOnInit() { }

  async getAllConsultas() {
    this.consultas = this.apiConsulta.getAll();
  }

  addConsulta() {
    this.router.navigate(['form-consultas', 0]);
  }

  editConsulta(id: number) {
    this.router.navigate(['form-consultas', id]);
  }

  removeConsulta(id: number) {
    this.apiConsulta.delete(id).subscribe(data => { this.getAllConsultas() });
  }
}
