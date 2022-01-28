function myBackyard() {
    let backyard = prompt ('Do you want to see snow in my backyard? (y or n. The only answer is y :-D):');
    while(backyard != "y")
    {
        backyard = prompt ('Invalid input. The only answer is y :-D (y or n):');
    }
    return backyard;
}

function numTimes() {
    let times = prompt ('How many times would you like to see my backyard? (Between 1 - 2)');
    while(times != "1" && times != "2")
    {
        times = prompt ('Invalid input. How many times would you lik2 to see my backyard? (Between 1 - 2)');
    }
    return times
}

function displayImages(showBackyard, count)
{
    if(showBackyard != "y")
        return;
    let counter = 0;
    while(counter < count)
    {
        document.write('<img src="https://user-images.githubusercontent.com/98134026/151079080-9e1846a0-d3c7-410e-9ec4-cf4bededc002.jpg">')
        counter++;   
    }
}    

let backyard = myBackyard();
let times  = numTimes();
displayImages(backyard, times);