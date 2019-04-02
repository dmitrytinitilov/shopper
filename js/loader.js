var container = document.querySelector('.page_container')
function pageLoader(pageName){
	var xhr=new XMLHttpRequest();

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			container.innerHTML=xhr.responseText
		}
	}
	xhr.open("GET", pageName,true);

	xhr.send();
}
pageLoader("index.html")	