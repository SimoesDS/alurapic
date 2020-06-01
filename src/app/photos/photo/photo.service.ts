import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo, DataListPhotos } from './photo';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string): Observable<DataListPhotos> {
    return this.http.get<DataListPhotos>(`${API}/${userName}/photos`);
  }

  listFromUserPagenated(
    userName: string,
    page: number
  ): Observable<DataListPhotos> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<DataListPhotos>(`${API}/${userName}/photos`, {
      params,
    });
  }
}
