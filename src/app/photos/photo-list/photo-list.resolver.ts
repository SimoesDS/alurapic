import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { DataListPhotos } from '../photo/photo';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<DataListPhotos>> {
  constructor(private service: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<DataListPhotos>
    | Observable<Observable<DataListPhotos>>
    | Promise<Observable<DataListPhotos>> {
    const userName = route.params.userName;
    return this.service.listFromUserPagenated(userName, 1);
  }
}
