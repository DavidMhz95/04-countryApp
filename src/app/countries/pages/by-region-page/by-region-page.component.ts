import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';




@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[]=[]
  public regions:Region[] =['Africa','America','Asia','Europe','Oceania']
  public selecteRegion?:Region

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
    this.selecteRegion = this.countriesService.cacheStore.byRegion.region
  }


  constructor(private countriesService: CountriesService){}

    public searchByRegion(region: Region){
      this.selecteRegion = region
      this.countriesService.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries;
      })
    }
}
