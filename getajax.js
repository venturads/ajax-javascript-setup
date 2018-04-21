let getapi = "https://codepen.io/jobs.json";
let getHtp = new XMLHttpRequest();
	getHtp.open("GET", getapi);
	getHtp.onreadystatechange = function(){
		if(getHtp.readyState == 4){
			myList(this);
			}
		}
	getHtp.send();
		
function myList(getHtp){
	let table = "<br>";
  let getjson = JSON.parse(getHtp.responseText);				
	for(let i=0;i<getjson.jobs.length;i++){
		table += "<p><a href='" + getjson.jobs[i].url + "' target='_blank'><br>" + getjson.jobs[i].title	+ "<br>Company: " + getjson.jobs[i].company_name + "<br>" +	getjson.jobs[i] + ", " +	getjson.jobs[i].address + "</a></p><hr>";
  }		
	document.getElementById("display").innerHTML = table;
}