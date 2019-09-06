import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:4000/api/photos'

  constructor(
    private httpClient: HttpClient
  ) { }

  createPhoto(title: string, description: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.httpClient.post(this.URI, fd);
  }

  getPhotos() {
    return this.httpClient.get<Photo[]>(this.URI);
  }

  getPhoto(id: string) {
    return this.httpClient.get<Photo>(this.URI + '/' + id);
  }

  deletePhoto(id: string) {
    return this.httpClient.delete(`${ this.URI }/${ id }`);
  }

  updatePhoto(id: string, title: string, description: string) {
    return this.httpClient.put(`${ this.URI }/${ id }`, { title, description });
  }

}
