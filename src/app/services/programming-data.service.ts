import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from '../../../public/interfaces/ProgrammingLanguage.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgrammingDataService {
  // private data: ProgrammingLanguage[] = [];
  private dataurl: string = 'data/ProgrammingLanguages.json';

  constructor(private http: HttpClient) { }

  getProgrammingData(): Observable<ProgrammingLanguage[]> {
    return this.http.get<ProgrammingLanguage[]>(this.dataurl);
  }
}
