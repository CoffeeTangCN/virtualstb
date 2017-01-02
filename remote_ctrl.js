var RM_FOCUS_TARGET = null;
function simulateKeyPress(ev){
	if(isArrowKey(ev.keyCode)){
		se ={keyCode:ev.keyCode,target:ev.target,srcElement:ev.srcElement,which:ev.which};
		if(document.onkeypress){
			document.onkeypress(se);
			ev.preventDefault();
		}
	}
}


window.addEventListener("load",function(){
	var links = document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].addEventListener('focus', function(ev){	
			RM_FOCUS_TARGET= ev.target;
		});
		links[i].addEventListener('onkeydown', simulateKeyPress);
	}
	var btns = document.getElementsByClassName("RM_key_button");
	for(var i=0;i<btns.length;i++){
		btns[i].addEventListener('click', function(ev){	
			var id = window.event.srcElement.id;
			var idx = id.lastIndexOf("_")
			var code = parseInt(id.substring(idx+1));
			if(document.onkeypress){
				document.onkeypress( {keyCode:code,target:RM_FOCUS_TARGET,srcElement:RM_FOCUS_TARGET,which:code});
			}
		});
	}

});
function isArrowKey(key){
	if(key == 37  || key == 38 || key==39 || key==40){
		return true;
	}else{
		return false;
	}
}

document.onkeydown=simulateKeyPress;

