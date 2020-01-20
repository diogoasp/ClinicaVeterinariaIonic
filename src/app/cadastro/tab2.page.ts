import { Component } from '@angular/core';
import { Animal } from '../models/Animal';
import { Cliente } from '../models/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  clientes: any;
  cliente: Cliente;
  animais: any;
  animal: Animal;

  constructor(private router : Router) {
  }

  showListCliente(){
    let listaCliente = document.getElementById("listaCliente");
    let listaAnimal = document.getElementById("listaAnimal");

    listaCliente.hidden = false;
    listaAnimal.hidden = true;
  }

  showListAnimal(){
    let listaCliente = document.getElementById("listaCliente");
    let listaAnimal = document.getElementById("listaAnimal");
    this.getListClientes();
    listaCliente.hidden = true;
    listaAnimal.hidden = false;
  }

  getListClientes(){
  }
}
