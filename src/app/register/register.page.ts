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
    this.getAllClientes();
    let listaCliente = document.getElementById("listaCliente");
    let listaAnimal = document.getElementById("listaAnimal");

    listaCliente.hidden = false;
    listaAnimal.hidden = true;
  }

  showListAnimal() {
    this.getAllAnimais();
    this.putIcon();
    let listaCliente = document.getElementById("listaCliente");
    let listaAnimal = document.getElementById("listaAnimal");
    listaCliente.hidden = true;
    listaAnimal.hidden = false;
  }

  putIcon(){
    this.animais.forEach(a => {
      let element = Array.from(document.getElementsByClassName("animalIco"));
      element.forEach(e => {
        var txt = a.especie;
        console.log("Espécie: "+txt);
          var img;
          if(txt == "Canino") img = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/1024px-Creative-Tail-Animal-dog.svg.png";
          if(txt == "Felino") img = "http://www.iconsalot.com/asset/icons/pixel-perfect/animals/512/cat-icon.png";
          if(txt == "Equino") img = "https://gilletteveterinarian.com/wp-content/uploads/2016/03/Horse-Icon.png";
          if(txt == "Roedor") img = "http://www.iconsalot.com/asset/icons/freepik/pet-shop-17/128/014-hamster-icon.png";
          if(txt == "Ave") img = "http://www.iconsalot.com/asset/icons/freepik/pet-shop-17/512/022-bird-icon.png";
          if(txt == "Bovino") img = "https://gilletteveterinarian.com/wp-content/uploads/2016/03/Cow-Icon.png";
          //a.= img;
      }) 
    });
  }
}

