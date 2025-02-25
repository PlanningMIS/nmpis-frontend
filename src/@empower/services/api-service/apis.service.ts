import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApisService {

  // imageUrl = environment.imageUrl;
  private baseUrl = environment.apiUrl;


  constructor(
    private http: HttpClient,
  ) {
    console.log("URL = ", this.baseUrl);
  }

  uploadFile(files: File[]) {
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('image', f))
    return this.http.post(this.baseUrl + 'v1/' + 'uploadImage', formData)
  }

  public get_public(url: any) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + url).subscribe(res => {
        resolve(res);
      }, error => {
        console.log(error);
        reject(error);
      });
    });
  }

  public get_private(url: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      };
      
      // if (!navigator.onLine) {
      //   return of({ message: 'You are offline, showing cached data' });
      // }
      // return this.http.get<any>(this.apiUrl).pipe(
      //   catchError(() => of({ message: 'Error fetching data, using cache' }))
      // );

      this.http.get(this.baseUrl + url, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public post(url: any, body: any) {
    return new Promise((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      };
      const param = this.JSON_to_URLEncoded(body);
      this.http.post(this.baseUrl + url, param, header).subscribe((res) => {
        resolve(res);
      }, error => {
        console.log(error);
        reject(error);
      });
    });
  }

  public post_private(url: any, body: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      };
      this.http.post(this.baseUrl + url, body, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public postTemp(url: any, body: any, temp: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', `Bearer ${temp}`)
      };
      const param = this.JSON_to_URLEncoded(body);
      console.log(param);
      this.http.post(this.baseUrl + url, param, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  JSON_to_URLEncoded(element: any, key?: any, list?: any) {
    let new_list = list || [];
    if (typeof element == "object") {
      for (let idx in element) {
        this.JSON_to_URLEncoded(
          element[idx],
          key ? key + "[" + idx + "]" : idx,
          new_list
        );
      }
    } else {
      new_list.push(key + "=" + encodeURIComponent(element));
    }
    return new_list.join("&");
  }

  public getLanguageJson(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get('assets/i18n/untitle.json').subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      })
    });
  }

  public getLocalAssets(name: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      };
      this.http.get('assets/jsons/' + name, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}