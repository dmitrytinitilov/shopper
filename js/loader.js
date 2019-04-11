const container = document.querySelector(".page_container")

function pageLoader(pageName){
	let xhr=new XMLHttpRequest();

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			container.innerHTML=xhr.responseText
		}
	}
	xhr.open("GET", pageName,true);

	xhr.send();
}
//Example
/*var button=document.querySelector('.button')
button.onclick=function(){
	pageLoader('index.html')
}	*/