import { ResolveFn } from '@angular/router';

export const testResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};

// import { inject } from '@angular/core';
// import { ResolveFn, Router } from '@angular/router';
// import { ClientService } from 'app/services/client.service';
// import { catchError, of } from 'rxjs';

// export const clientResolver: ResolveFn<any> = (route, state) => {
  
//     const clientService = inject(ClientService)
//     const router = inject(Router)

//     return clientService.getClients(1,10).pipe(
//       catchError(error => {
//         console.error('Data fetching error:', error);
//         router.navigate(['pages/error/500']); // Redirect to error page
//         return of(null);
//       })
//     );

// };
