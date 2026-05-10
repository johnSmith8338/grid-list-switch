import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CardData {
  id: number;
  img: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataSvc {
  private http = inject(HttpClient);

  getCardsData(): Observable<CardData[]> {
    return this.http.get<CardData[]>('json/data.json');
  }
}
