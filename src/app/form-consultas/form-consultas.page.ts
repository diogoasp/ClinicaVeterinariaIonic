import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/Consulta';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConsultasService } from '../service/api-consultas.service';

@Component({
  selector: 'app-form-consultas',
  templateUrl: './form-consultas.page.html',
  styleUrls: ['./form-consultas.page.scss'],
})
export class FormConsultasPage implements OnInit {

  consulta : Consulta;
  id: number = 0;

  constructor(private actRoute: ActivatedRoute, private router: Router,
    private api:ApiConsultasService) { 
      this.consulta = new Consulta();
  }
  save(){
    if (this.id==0) {
      this.api.create(this.consulta).subscribe(data => {this.ionViewWillEnter()});
    }
    else {
      this.api.update(this.id,this.consulta).subscribe(data => {this.ionViewWillEnter()});
    }
    this.router.navigateByUrl('/consultas');
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.actRoute.params.subscribe(params => {
      this.id = params['id'];      
      console.log('Id de consulta: '+this.id);
    });
    if (this.id!=0) {
      this.api.get(this.id).subscribe(resultado => {
        this.consulta = resultado;
      });
    }
  }
}
