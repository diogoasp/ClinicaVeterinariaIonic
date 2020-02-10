import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAnimalService } from 'src/app/service/api-animais.service';
import { ApiClientesService } from 'src/app/service/api-clientes.service';
import { Cliente } from 'src/app/models/Cliente';
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
  animais: Observable<any>;
  animal: Animal;
  icon : String;

  constructor(private router: Router, private apiAnimal: ApiAnimalService, private apiCliente: ApiClientesService) {}

  async getAllAnimais() {
    this.animais = this.apiAnimal.getAll();
  }

  ngOnInit() {}

  addAnimal() {
    this.router.navigate(['form-animais', 0]);
  }

  editAnimal(id: number) {
    this.router.navigate(['form-animais', id]);
  }
  removeAnimal(id: number) {
    this.apiAnimal.delete(id).subscribe(data => { this.getAllAnimais() });
  }

  //mostra os detalhes de animal ao clicar
  showDetailsAnimal(id: string) {
    let elem = document.getElementById(id);
    if(elem.hidden == false)
      elem.hidden = true;
    else elem.hidden = false;
  }

  showDetailsCliente(id: number) {
    this.router.navigate(['details-cliente', id]);
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
  removeCliente(id: number) {
    this.apiCliente.delete(id).subscribe(data => { this.getAllClientes() });
  }
  showListCliente() {
    this.getAllClientes();
    let listaCliente = document.getElementById("listaCliente");
    let listaAnimal = document.getElementById("listaAnimal");

    listaCliente.hidden = false;
    listaAnimal.hidden = true;
  }

  showListAnimal() {
    this.getAllAnimais();
    let listaCliente = document.getElementById("listaCliente");
    let listaAnimal = document.getElementById("listaAnimal");
    listaCliente.hidden = true;
    listaAnimal.hidden = false;
  }

}

