/*
*   Created by Dustin Parker
*   This is just an example file of how the people_sorter library works. 
*   It should be called after the people_sorter.js.
*
*   Last modified: 9/27/2013
*/

//example list of people objects
var people = [
    {
        "name": "John W. Smith",
        "familyName": "Smith",
        "birthDayNumber": 2418938.000003,
        "birthCountry": "United States"
    },
    {
        "name": "Jane L. Smith",
        "familyName": "Smith",
        "birthDayNumber": 2418938.000003,
        "birthCountry": "United States"
    },
    {
        "name": "John B. Allgood",
        "familyName": "Allgood",
        "birthDayNumber": 2419000.000004,
        "birthCountry": "Denmark"
    },
    {
        "name": "John B. Allgood",
        "familyName": "Allgood",
        "birthDayNumber": 2419000.000004,
        "birthCountry": "Australia"
    },
    {
        "name": "Amy F. Zoo",
        "familyName": "Zoo",
        "birthDayNumber": 2318930.000001,
        "birthCountry": "Zimbabwe"
    },
    {
        "name": "Zeb K. Doo",
        "familyName": "Doo",
        "birthDayNumber": 2318930.000002,
        "birthCountry": "Croatia"
    },
    {
        "name": "Zeb K. Doo",
        "familyName": "Doo",
        "birthDayNumber": 2318930.000002,
        "birthCountry": "Croatia"
    }
];

//call the sortPeople function with supplied people object array and list of sort parameters.
var success = peopleSorter(people, [ "name", "birthDayNumber", "birthCountry" ]);

//print the ordered list of people to the console
if (success) {
    for (var i in people) {
        console.log(people[i].birthDayNumber + " " + people[i].name + " was born in " + people[i].birthCountry);
    }
}