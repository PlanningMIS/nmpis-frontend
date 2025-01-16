import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { EmpowerLoadingService } from '@empower/services/loading/loading.service';
import { Observable, finalize, take } from 'rxjs';

export const empowerLoadingInterceptor = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
    const empowerLoadingService = inject(EmpowerLoadingService);
    let handleRequestsAutomatically = false;

    empowerLoadingService.auto$.pipe(take(1)).subscribe((value) => {
        handleRequestsAutomatically = value;
    });

    // If the Auto mode is turned off, do nothing
    if (!handleRequestsAutomatically) {
        return next(req);
    }

    // Set the loading status to true
    empowerLoadingService._setLoadingStatus(true, req.url);

    return next(req).pipe(
        finalize(() => {
            // Set the status to false if there are any errors or the request is completed
            empowerLoadingService._setLoadingStatus(false, req.url);
        })
    );
};
