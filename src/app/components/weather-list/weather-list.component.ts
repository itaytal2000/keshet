import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileDataService } from '../../../shared/file-data.Service';
import { HourForecast } from '../../../shared/hour-forecast.model';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

// Get Day, Month, Year out of a string such as this=> 2021-02-14 03:00:00
// First parameter is for the (string) date and second one is for getting only the year (boolean)
declare function fncDayMonthYear (pdate:any, pYear:any);

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})

export class WeatherListComponent implements OnInit {

  public city:  string;         // Forecast city
  allResults:   HourForecast[]; // All API's results 
  temprtr:      string;         // Temperature
  icon:         string;         // Icon of temperature
  description:  string;         // Description of temperature
  dayMonth:     string;         // Day and month of temperature
  year:         string;         // Year of temperature
    
  
  constructor(private fileDataService:FileDataService, private snackBar: MatSnackBar) 
  { 
  }


  ngOnInit() 
  {
  }


  // Opening SnackBar (alert)
  openSnackBar(message)
  {
    this.snackBar.open(message, '', {duration:1500} );
  }


  // API search by city's name
  onFormSearch(cityName: string)
  {
    if (cityName) // City was chosen
    {
      this.city = cityName;
      let arraylist = [];
      var appid = "7a9affbf16cb8b578fe4afa8a7b8c970";
      // Openweathermap 5 days forecast by city's name
      this.fileDataService
      .getListOfGroup('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + appid + '&units=metric')
      .subscribe(
        data => {       
          // Get and push all Query results into ArrayList (every day has 8 items, take only 1 item for each day)
          for (var i = 0; i < data.list.length; i+=8)
          {
            this.temprtr = parseInt(data.list[i].main.temp).toString() + "°";
            this.icon = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
            this.description = data.list[i].weather[0].description;
            this.dayMonth = fncDayMonthYear(data.list[i].dt_txt, false);
            this.year = fncDayMonthYear(data.list[i].dt_txt, true);
            let daily = new HourForecast(this.temprtr, this.icon, this.description, this.dayMonth, this.year);
            arraylist.push(daily);
          }
          this.allResults = arraylist;
        },
        err => 
        {
          console.log("Error = " + err);
        }
      );
    }
    else
    {
      // User didn't choose any city
      this.openSnackBar('Please select city')
    }
  }
}