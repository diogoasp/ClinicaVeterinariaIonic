import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/Animal';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiAnimalService } from '../service/api-animais.service';
import { ApiClientesService } from '../service/api-clientes.service';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { TypeCliente } from '../models/TypeCliente';

@Component({
  selector: 'app-form-animais',
  templateUrl: './form-animais.page.html',
  styleUrls: ['./form-animais.page.scss'],
})
export class FormAnimaisPage implements OnInit {

  animal : Animal;
  id: number = 0;
  clientes: Observable<any>;
  cliente : Cliente;

  constructor(private actRoute: ActivatedRoute, private router: Router,
    private api:ApiAnimalService, private apiCliente: ApiClientesService) { 
      this.animal = new Animal();
      this.cliente = new Cliente();
      this.getAllCliente();
  }

  save(){
    if (this.id==0) {
      this.api.create(this.animal).subscribe(data => {this.ionViewWillEnter()});
    }
    else {
      this.api.update(this.id,this.animal).subscribe(data => {this.ionViewWillEnter()});
    }
    this.router.navigateByUrl('/tabs/register?refresh=1');
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.actRoute.params.subscribe(params => {
      this.id = params['id'];      
      console.log('Id de animal: '+this.id);
    });
    if (this.id!=0) {
      this.api.get(this.id).subscribe(resultado => {
        this.animal = resultado;
      });
    }
  }

  async getAllCliente(){
    this.clientes = this.apiCliente.getAll();
  }

  setCliente(){
    console.log(this.cliente.nome)
    this.animal.responsavel = new TypeCliente(this.cliente.nome, this.cliente.id);
  }
}
