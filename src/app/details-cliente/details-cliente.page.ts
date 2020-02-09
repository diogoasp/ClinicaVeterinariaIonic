import { Component, OnInit } from '@angular/core';
import { ApiAnimalService } from '../service/api-animais.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientesService } from '../service/api-clientes.service';
import { Cliente } from '../models/Cliente';
import { Animal } from '../models/Animal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-cliente',
  templateUrl: './details-cliente.page.html',
  styleUrls: ['./details-cliente.page.scss'],
})
export class DetailsClientePage implements OnInit {
  
  result_animal: Observable<any>;
  animal: Animal;
  cliente: Cliente;
  id: number;
  array = Array<number>();

  constructor(private actRoute: ActivatedRoute, private router: Router,
    private apiAnimal:ApiAnimalService, private apiCliente: ApiClientesService) { 
      this.cliente = new Cliente();
      this.animal = new Animal();
      this.getAnimais();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.actRoute.params.subscribe(params => {
      this.id = params['id'];      
      console.log('Id de cliente: '+this.id);
    });
    if (this.id!=0) {
      this.apiCliente.get(this.id).subscribe(resultado => {
        this.cliente = resultado;
      });
    }
  }

  getAnimais() {
    this.result_animal = this.apiAnimal.getAll()
  }

  getAnimaisByResponsavel(id : number, idResp : number){

  }
  showAnimalList(){
    let elem = document.getElementById("list");
    if(elem.hidden == false)
      elem.hidden = true;
    else elem.hidden = false;
  }

  setArray(id : number){
    this.array.push(id);
    this.array.forEach(a=>{
      console.log(a.valueOf);
    });
  }

}
