import { Component, OnInit } from '@angular/core';
import { ApiAnimalService } from '../../service/api-animais.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientesService } from '../../service/api-clientes.service';
import { Cliente } from '../../models/Cliente';
import { Animal } from '../../models/Animal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-cliente',
  templateUrl: './details-cliente.page.html',
  styleUrls: ['./details-cliente.page.scss'],
})
export class DetailsClientePage implements OnInit {

  animais : Observable<Animal>;
  cliente: Cliente;
  id: number;

  constructor(private actRoute: ActivatedRoute, private router: Router,
    private apiAnimal:ApiAnimalService, private apiCliente: ApiClientesService) { 
      this.cliente = new Cliente();
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

  async getAnimais() {
    this.animais = this.apiAnimal.getAll();
  }

  showAnimalList(){
    this.getAnimais();
    let elem = document.getElementById("list");
    if(elem.hidden == false)
      elem.hidden = true;
    else elem.hidden = false;
  }

}
