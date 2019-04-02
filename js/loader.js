var container = document.querySelector('.page_container')
function pageLoader(input){
	var xhr=new XMLHttpRequest();

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			container.innerHTML=xhr.responseText
		}
	}
	xhr.open("GET", input,true);

	xhr.send();
}