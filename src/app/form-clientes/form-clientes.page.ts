import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientesService } from '../service/api-clientes.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.page.html',
  styleUrls: ['./form-clientes.page.scss'],
})
export class FormClientesPage implements OnInit {

  cliente : Cliente;
  id: number = 0;

  constructor(private actRoute: ActivatedRoute, private router: Router,
    private api:ApiClientesService) { 
      this.cliente = new Cliente();
  }

  save(){
    if (this.id==0) {
      this.api.create(this.cliente).subscribe(data => {this.ionViewWillEnter()});
    }
    else {
      this.api.update(this.id,this.cliente).subscribe(data => {this.ionViewWillEnter()});
    }
    this.router.navigateByUrl('/tabs/register');
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.actRoute.params.subscribe(params => {
      this.id = params['id'];      
      console.log('Id de cliente: '+this.id);
    });
    if (this.id!=0) {
      this.api.get(this.id).subscribe(resultado => {
        this.cliente = resultado;
      });
    }
  }

}
