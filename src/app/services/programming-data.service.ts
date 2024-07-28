import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from '../../../public/interfaces/ProgrammingLanguage.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgrammingDataService {
  private dataUrl: string = 'data/ProgrammingLanguages.json';
  programmingData: ProgrammingLanguage[] = [];
  selectedLanguage: string = 'All';

  constructor(private http: HttpClient) {}

  loadProgrammingData(): Observable<ProgrammingLanguage[]> {
    return this.http.get<ProgrammingLanguage[]>(this.dataUrl).pipe(
      tap((data: ProgrammingLanguage[]) => {
        this.programmingData = data;
      })
    );
  }

  getProgrammingData(): Observable<ProgrammingLanguage[]> {
    if (this.programmingData.length) {
      return of(this.programmingData);
    } else {
      return this.loadProgrammingData();
    }
  }

  getSelectedLanguage(): string {
    return this.selectedLanguage;
  }

  selectLanguage(language: string): void {
    if (this.selectedLanguage === language) {
      this.selectedLanguage = 'All';
    } else {
      this.selectedLanguage = language;
    }
  }
}
