/*
*   PEOPLE SORTER
*
*   Created by Dustin Parker
*   A reusable library that allows users to sort lists of persons by multiple keys. 
*   For example, users may wish to sort by name only. Some may sort by last name and birth day 
*   (matching last names would be together in the result and sub-sorted by birth day).
*
*   Last modified: 9/27/2013
*/

//peopleSorter takes an array of people objects and an array of sorting parameters
var peopleSorter = function (people, sortBy) {

    //Error checking
    //Check that the first argument is an array
    if (!Array.isArray(people)) {
        console.error("First argument should be an array of objects.");
        return 0;
    }
    else if (!Array.isArray(sortBy)) {
        console.error("Second argument should be an array of sort parameters.");
        return 0;
    }
    else {
        //and that each member of the array is an object
        for (var i in people) {
            if (typeof (people[i]) !== "object") {
                console.error("First argument should be an array of objects.");
                return 0;
            }
            //Check that the sort parameter is part of the people object
            for (var j in sortBy) {
                if (typeof (people[i][sortBy[j]]) === "undefined") {
                    console.error(sortBy[j] + " is not valid. Please enter a valid sort parameter.");
                }
            }
        }
       
    } //end of Error checking

    //return value -1 means a comes first, 0 the order stays the same, and 1 means b comes first
    function attrSort(a, b) {
        //loop through the sorting parameters
        for (var i in sortBy) {
            //check the first sort parameters
            if (a[sortBy[i]] > b[sortBy[i]]) {
                return 1;
            }
            else if (a[sortBy[i]] < b[sortBy[i]]) {
                return -1;
            }
            // a must be equal to b, so check if there are more sort parameters
            if (i < sortBy.length) {
                if (a[sortBy[i + 1]] > b[sortBy[i + 1]]) {
                    return 1;
                }
                else if (a[sortBy[i + 1]] < b[sortBy[i + 1]]) {
                    return -1;
                }
            }
                //there are no more sort parameters, so stop here and don't change the order
            else {
                return 0;
            }
        }
    }; //end of attrSort()

    //sort the list of people with attrSort()
    return people.sort(attrSort);

}; // end of peopleSorter()