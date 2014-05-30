// My role in the group is: Release 2

// Here is my part of the challenge:

//I want to take two sets of numbers and find the total sum, mean, and median for each set of numbers. 

var odd = [1, 2, 3, 7, 12];
var even = [1, 2, 3, 4, 7, 10, 25, 26];

function measure(list){
	sum = 0;
	median = 0;
	mean = 0;
	for(var i=0; i<list.length; i++){
		sum += list[i];
	}
	mean = sum / list.length
	if (list.length % 2 === 0){
		median= (list[list.length/2-1]+ list[list.length/2])/2;
	} else{
		median= list[Math.round(list.length/2)-1];
	} 
	console.log(sum, mean, median);
}

measure(odd);

