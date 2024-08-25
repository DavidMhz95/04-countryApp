import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError,map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

private apiURL: string = 'https://restcountries.com/v3.1'


  constructor(private http: HttpClient) { }

  searchCapital( capitalName:string ):Observable<Country[]> {
    const url:string = `${this.apiURL}/capital/${capitalName}`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    )
  }


  searchCountry( countryName:string ):Observable<Country[]> {
    const url:string = `${this.apiURL}/name/${countryName}`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    )
  }

  searchRegion( regionName:string ):Observable<Country[]> {
    const url:string = `${this.apiURL}/region/${regionName}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    )
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null>{
    const url:string = `${this.apiURL}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError(() => of(null))
    )
  }
}
