// import { Category } from './../models/Category';
// import { CrudService } from './../services/category.service';
// import { AlertifyService } from '../services/alertify.service';
// import { Injectable } from '@angular/core';
// import { Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';


// @Injectable()
// export class CategoryEditResolver implements Resolve<any[]> {
//     category: Category;
//     constructor( private categoryService: CrudService, private alertify: AlertifyService, private router: Router) {}

//     resolve(route: ActivatedRouteSnapshot): Observable<any> {
//         return this.categoryService.update(1, this.category).pipe(
//             catchError(error => {
//                 this.alertify.error('Problem retrieving data');
//                 return of(null);
//             })
//         );
//     }
// }
