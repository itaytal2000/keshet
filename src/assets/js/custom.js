// pdate(string) = date in string format (like this example: 2021-02-14 03:00:00) 
// pYear (boolean) = function returns only the year (otherwise => return weekday, day, Month-name)
function fncDayMonthYear(pdate, pYear)
{
  var retval;
  var day;
  var month;
  var weekday;
  if (pYear) // Return year only
  {
    retval = pdate.substring(0,4);
  }
  else // return date like in this example: Mon, 15 Feb 
  {
    // Get weekday
    switch (new Date(pdate).getDay()) 
    {
      case 0:
        weekday = "Sun";
        break;
      case 1:
        weekday = "Mon";
        break;
      case 2:
        weekday = "Tue";
        break;
      case 3:
        weekday = "Wed";
        break;
      case 4:
        weekday = "Thu";
        break;
      case 5:
        weekday = "Fri";
        break;
      case 6:
        weekday = "Sat";
        break;
    }

    // Get day (without leading zero)
    if (pdate.substring(8,9)==="0")
    {
      day=pdate.substring(9,10);
    }
    else
    {
      day = pdate.substring(8,10);
    }

    // Get month name
    switch(pdate.substring(5,7)) 
    { 
      case "01":
        month="Jan";
        break;
      case "02":
        month="Feb";
        break;
      case "03":
        month="Mar";
      break;
      case "04":
        month="Apr";
      break;
      case "05":
        month="May";
      break;
      case "06":
        month="Jun";
      break;
      case "07":
        month="Jul";
        break;
      case "08":
        month="Aug";
        break;
      case "09":
        month="Sep";
      break;
      case "10":
        month="Oct";
      break;
      case "11":
        month="Nov";
      break;
      case "12":
        month="Dec";
      break;
    } 
    retval = weekday + ", " + day + " " + month;
  }
  return(retval);
}