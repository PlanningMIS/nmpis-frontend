import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export type EmpowerMockApiReplyCallback =
    | ((data: {
          request: HttpRequest<any>;
          urlParams: { [key: string]: string };
      }) => [number, string | any] | Observable<any>)
    | undefined;

export type EmpowerMockApiMethods =
    | 'get'
    | 'post'
    | 'patch'
    | 'delete'
    | 'put'
    | 'head'
    | 'jsonp'
    | 'options';
