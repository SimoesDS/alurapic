import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo, DataListPhotos } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  dataListPhotos: DataListPhotos;
  photos: Photo[] = [];
  filter: string = '';
  
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = false;
  currentPage: number = 1;
  userName: string = '';

  private maxRow: number = 12;
  private totalPhotos: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }
  
  ngOnInit(): void {
    this.totalPhotos = this.activatedRoute.snapshot.data.dataListPhotos.total;
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.dataListPhotos.photos;
    this.hasMore = this.hasMorePhotos();
    
    this.debounce
    .pipe(debounceTime(300))
    .subscribe( filter => this.filter = filter);
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  loadMore() {
    this.photoService
      .listFromUserPagenated(this.userName, ++this.currentPage)
      .subscribe( dataListPhotos => {
        this.totalPhotos = dataListPhotos.total;
        this.photos = this.photos.concat(dataListPhotos.photos);
        this.hasMore = this.hasMorePhotos();
      });
  }

  private hasMorePhotos(): boolean {
    return this.totalPhotos && (this.currentPage * this.maxRow) < this.totalPhotos;
  }
}