import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data-service';
import { Brewery } from './models/brewery-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected loading: boolean = false;
  protected msg: string;
  protected name: string;
  protected state: string;
  protected limit: string = "10";
  protected breweries: Brewery[] = [];

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.getAllBreweries();
  }

  private getAllBreweries(): void {
    this.dataService.Get()
      .subscribe(data => {
        this.breweries = data;
      });
  }

  private clear(): void {
    this.name = "";
  }

  private onSubmit(): void {
    this.loading = true;

    this.dataService.GetWithParams(this.state, this.state, this.limit)
      .subscribe(data => {
        this.breweries = data;
        this.loading = false;
      });
  }
}
