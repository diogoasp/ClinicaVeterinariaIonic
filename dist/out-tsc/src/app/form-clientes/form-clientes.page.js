import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientesService } from '../service/api-clientes.service';
let FormClientesPage = class FormClientesPage {
    constructor(actRoute, router, api) {
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.id = 0;
        this.cliente = new Cliente();
    }
    save() {
        if (this.id == 0) {
            this.api.create(this.cliente).subscribe(data => { this.ionViewWillEnter(); });
        }
        else {
            this.api.update(this.id, this.cliente).subscribe(data => { this.ionViewWillEnter(); });
        }
        this.router.navigateByUrl('/tabs/register');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.actRoute.params.subscribe(params => {
            this.id = params['id'];
            console.log('Id de cliente: ' + this.id);
        });
        if (this.id != 0) {
            this.api.get(this.id).subscribe(resultado => {
                this.cliente = resultado;
            });
        }
    }
};
FormClientesPage = tslib_1.__decorate([
    Component({
        selector: 'app-form-clientes',
        templateUrl: './form-clientes.page.html',
        styleUrls: ['./form-clientes.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        ApiClientesService])
], FormClientesPage);
export { FormClientesPage };
//# sourceMappingURL=form-clientes.page.js.map