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

//Refactored to pass tests using core of above code.

function sum(list){
	sums = 0;
	for(var i=0; i<list.length; i++){
		sums += list[i];
	}
	return sums;
}
sum(oddLengthArray);
sum(evenLengthArray);
function mean(list){
	means = 0;
	means = sum(list) / list.length
	return means;
}
mean(oddLengthArray);
mean(evenLengthArray);
function median(list){
	medians = 0;
	if (list.length % 2 === 0){
		medians= (list[list.length/2-1]+ list[list.length/2])/2;
	} else{
		medians= list[Math.round(list.length/2)-1];
	} 
	return medians;
}
median(oddLengthArray);
median(evenLengthArray);


