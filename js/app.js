var  homePage = document.querySelector('.home');

homePage.classList.add('up');

var startPageLoginBtn = document.querySelector('.start_page_login');

startPageLoginBtn.onclick = function() {
	homePage.classList.remove('up');
	homePage.classList.add('normal');
}