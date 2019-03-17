var overLay = document.getElementById('overLay');
var popUp = document.getElementById('popUp');
var popUpText = document.getElementById('popUpText');
var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
var isSafari = navigator.userAgent.indexOf("Safari") != -1;
var isIE = false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = navigator.userAgent.indexOf("Chrome") != -1;

var thankYou = "Thank You For Downloading";
var notSupported = "Browser Not Supported";

function openPopup(){
    overLay.style.display = 'block';
    popUp.style.display = 'block';
}

function closePopUp(){
    overLay.style.display = 'none';
    popUp.style.display = 'none';
}

function browserRender(){
	if(isEdge){
		popUp.className += " edgeClass";
		popUpText.innerHTML = thankYou;
	}
	else if(isFirefox){
		popUp.className += " fireFoxClass";
		popUpText.innerHTML = thankYou;
	}	
	else if(isChrome)
    {
		popUp.className += " chromeClass";
        popUpText.innerHTML = thankYou;
    }
	else if(isSafari){
		popUp.className += " safariClass";
		popUpText.innerHTML = thankYou;
	}
	else{
		popUpText.innerHTML = notSupported;
	}
}

browserRender();
