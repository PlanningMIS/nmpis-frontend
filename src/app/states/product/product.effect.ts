import { Injectable, inject } from '@angular/core';
import { ApisService } from '@empower/services/api-service/apis.service';
// import { ProductApiService } from '../../shared/services/product-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';
@Injectable()
export class ProductEffect {
  private apiService = inject(ApisService);
  action$ = inject(Actions);

  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.loadProduct),
      switchMap(() =>
        from(this.apiService.get_private('projects/conceptnote/')).pipe(
          map((response) =>
            ProductActions.loadProductSuccess({ products: response.data })
          ),
          catchError((error) =>
            of(
              ProductActions.loadProductFailure({
                errorMessage: error.message || 'Failed to load products',
              })
            )
          )
        )
      )
    )
  );
}
