import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})


export class CitySelectComponent implements OnInit 
{
  @Output()cityChanged: EventEmitter<string> = new EventEmitter<string>();


  constructor() 
  {
  }


  ngOnInit() 
  {
  }


  // List of cities - JSON
  citiesList: any = [
    {
      'cityName': 'Barcelona, Spain',
      'cityVal' : 'Barcelona'
    },
    {
      'cityName': 'London, UK',
      'cityVal' : 'London'
    },
    {
      'cityName': 'Moscow, Russia',
      'cityVal' : 'Moscow'
    },
    {
      'cityName': 'Paris, France',
      'cityVal' : 'Paris'
    },
    {
      'cityName': 'Tel aviv, Israel',
      'cityVal' : 'Tel-aviv'
    }
  ];
  

  // Search (city) Form
  citiesForm = new FormGroup(
  {
    theCity: new FormControl('theCity')
  });


  // Send City's name back to parent
  submitForm(cityName: string)
  {
    this.cityChanged.emit(cityName);
  }
}