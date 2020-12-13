// JavaScript Document
var count_hours =0;
document.getElementById("hrs").value = count_hours;
var count_mins = 0;
document.getElementById("mins").value = count_mins;
var count_secs = 0;
document.getElementbyId("secs").value = count_secs;

var won, bond,lost = 0;
 document.getElementsByClassName("hours").value = won;
 document.getElementsByClassName("minutes").value = bond;
 document.getElementsByClassName("secs").value = lost; 

won = count_hours;
bond = count_mins;
lost = count_secs;

function start(won,bond,lost){
	for(lost =count_secs;lost <= 60;lost-- ){
		if(lost ==0){
			for(bond = count_mins;bond <=60;bond--){
				won--;
			}
		}
	}
}