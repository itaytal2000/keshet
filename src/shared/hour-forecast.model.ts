// Forecast (needed) data from JSON
export class HourForecast 
{
    constructor
    (
        _temprtr:       string,
        _icon:          string,
        _description:   string,
        _dayMonth:      string,
        _year:          string
    ) 
    {
        this.temprtr =      _temprtr;
        this.icon =         _icon;
        this.description =  _description;
        this.dayMonth =     _dayMonth;
        this.year =         _year;
    }
    temprtr:        string;
    icon:           string;
    description :   string;
    dayMonth:       string;
    year:           string;
  }