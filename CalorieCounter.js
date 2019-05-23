

function inputCaloriesByDay(myDay)
{


    var day = myDay.toLowerCase();

    if(day === "sunday")
    {
        return 1500;
    }
    else if(day === "monday")
    {
        return 2000;
    }
    else if(day === "tuesday")
    {
        return 1435;
    }
    else if(day === "wednesday")
    {
        return 2341;
    }
    else if(day === "thursday")
    {
        return 4312;
    }
    else if(day === "friday")
    {
        return 2113;
    }
    else if(day === "saturday")
    {
        return 1123;
    }
    else
    {
        return 'Please choose valid day';
    }

}


function totalCaloriesConsumed(){
    return inputCaloriesByDay("sunday") + inputCaloriesByDay("MONday")+inputCaloriesByDay("tuesday")+inputCaloriesByDay("wednesday")+inputCaloriesByDay("thursday")+inputCaloriesByDay("friday")+inputCaloriesByDay("saturday")
}