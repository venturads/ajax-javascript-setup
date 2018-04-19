let getapi = "https://codepen.io/jobs.json";
for(let i=0;i<10;i++){
		let getHtp = new XMLHttpRequest();
		getHtp.open("GET", getapi);
		getHtp.onreadystatechange = function(){
			
			if(getHtp.readyState == 4){
			let getjson = JSON.parse(getHtp.responseText);				
				document.getElementById("display").innerHTML = getjson.jobs[i].title + "<br>"
				+ "<br>Company: " + getjson.jobs[i].company_name + "<br>";
				console.log(getjson.jobs[i].company_name);
				//getjson.jobs[i].address.city + ", " +
				//getjson.jobs[i].address.state_prov;					
				}
			}
		getHtp.send();
		}