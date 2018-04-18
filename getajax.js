let getapi = "https://codepen.io/jobs.json";
			const getHtp = new XMLHttpRequest();
			getHtp.open("GET", getapi);
			getHtp.onreadystatechange = function(){
				if(getHtp.readyState == 4){
					let getjson = JSON.parse(getHtp.responseText);				
					for(let i=0;i<getjson.jobs.length;i++){
						document.getElementById("display").innerHTML = "Job title: <a href=" + getjson.jobs[i].url + "><br>" + getjson.job[i].title + "</a>";
						//+ "<br>Company: " + getjson.jobs[i].company_name + "<br>";
						//getjson.jobs[i].address.city + ", " +
						//getjson.jobs[i].address.state_prov;
						//console.log(getjson.jobs.length);
					}
				}
			}
			getHtp.send();