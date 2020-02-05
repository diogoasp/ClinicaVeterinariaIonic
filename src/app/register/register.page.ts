import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAnimalService } from 'src/app/service/api-animais.service';
import { ApiClientesService } from 'src/app/service/api-clientes.service';
import {Cliente} from 'src/app/models/Cliente';
import { Observable, from } from 'rxjs';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage implements OnInit{
  clientes: Observable<any>;
  cliente: Cliente;
  animais: Observable<Animal>;
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

