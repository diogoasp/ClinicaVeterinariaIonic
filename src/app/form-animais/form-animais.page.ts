import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/Animal';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiAnimalService } from '../service/api-animais.service';

@Component({
  selector: 'app-form-animais',
  templateUrl: './form-animais.page.html',
  styleUrls: ['./form-animais.page.scss'],
})
export class FormAnimaisPage implements OnInit {

  animal : Animal;
  id: number = 0;

  constructor(private actRoute: ActivatedRoute, private router: Router,
    private api:ApiAnimalService) { 
      this.animal = new Animal();
  }

  save(){
    if (this.id==0) {
      this.api.create(this.animal).subscribe(data => {this.ionViewWillEnter()});
    }
    else {
      this.api.update(this.id,this.animal).subscribe(data => {this.ionViewWillEnter()});
    }
    this.router.navigateByUrl('/animais');
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

}
