import { Product } from './../models/Product';
import { ToastrService } from 'ngx-toastr';
import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CrudService } from '../services/crud.service';

@Injectable()
export class ProductDetailsResolver implements Resolve<Product> {
  constructor( private crudService: CrudService,private router: Router, private toast: ToastrService) {}
    
  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    const apiController = 'products/';

    return this.crudService.getById(apiController, route.params['id']).pipe(
        catchError(error => {
            this.toast.error('problem retrieving data');
            this.router.navigate(['/products']);
            return of (null);
        })
    );
  }
}