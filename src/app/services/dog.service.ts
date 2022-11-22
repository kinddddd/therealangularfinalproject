import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  public getAllDogs(): Observable<any> {
    return this.http.get('http://localhost:8000/dogs')
  }

  public getDog(id: string): Observable<any> {
    return this.http.get('http://localhost:8000/dogs/id/' + id)
  }

  public postDog(newDog: any) {
    return this.http.post('http://localhost:8000/dogs/create', newDog)
  }

  public deleteDog(id: string) {
    return this.http.delete('http://localhost:8000/dogs/delete/' + id)
  }

  public putDog(id: string, updatedDog: any) {
    return this.http.put('http://localhost:8000/dogs/edit/' + id, updatedDog)
  }
}
