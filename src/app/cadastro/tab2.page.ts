import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/Animal';
import { Cliente } from '../models/Cliente';
import { Router } from '@angular/router';
import { ApiAnimalService } from 'src/app/service/api-animais.service';
import { ApiClientesService } from 'src/app/service/api-clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  clientes: Observable<any>;
  cliente: Cliente;
  animais: Observable<any>;
  animal: Animal;

  constructor(private router: Router, private apiAnimal: ApiAnimalService, private apiCliente: ApiClientesService) {
    this.getAllAnimais;
    this.getAllClientes;
  }

  ngOnInit() {}
  async getAllAnimais() {
    this.animais = this.apiAnimal.getAll();
  }
  addAnimal() {
    this.router.navigate(['form-animais', 0]);
  }
  editAnimal(id: number) {
    this.router.navigate(['form-animais', id]);
  }
  removeAnimal(id: number) {
    this.apiAnimal.delete(id).subscribe(data => { this.getAllAnimais() });
  }

  async getAllClientes() {
    this.clientes = this.apiCliente.getAll();
  }
  addCliente() {
    this.router.navigate(['form-clientes', 0]);
  }
  editCliente(id: number) {
    this.router.navigate(['form-clientes', id]);
  }
  removeCleinte(id: number) {
    this.apiCliente.delete(id).subscribe(data => { this.getAllClientes() });
  }
  showListCliente() {
    //this.getAllClientes;
    let listaCliente = document.getElementById("listaCliente");
    let listaAnimal = document.getElementById("listaAnimal");

    listaCliente.hidden = false;
    listaAnimal.hidden = true;
  }

  showListAnimal() {
    //this.getAllAnimais;
    let listaCliente = document.getElementById("listaCliente");
    let listaAnimal = document.getElementById("listaAnimal");
    listaCliente.hidden = true;
    listaAnimal.hidden = false;
  }
}

