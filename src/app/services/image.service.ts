import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpClient: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/images';

  uploadImage(formData: FormData): Observable<any> {
    const file = formData.get('file') as File;
    console.log(file);
    const url = this.baseUrl + '/upload?files=$(file.name)';

    return this._httpClient.post(url, formData, { responseType: 'text' });
  }
}
