import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IPost} from "../models";
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts);
  }
}
