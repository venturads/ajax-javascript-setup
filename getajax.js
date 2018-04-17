let getapi = "https://codepen.io/jobs.json";
			const getHtp = new XMLHttpRequest();
			getHtp.open("GET", getapi);
			getHtp.onreadystatechange = function(){
				if(getHtp.readyState == 4){
					let getjson = JSON.parse(getHtp.responseText);
					document.getElementById("display").innerHTML = "Job title: " + getjson.jobs[2].title + "<br>" + 
					"url: " + getjson.jobs[0].url;
				}
			};
			getHtp.send();