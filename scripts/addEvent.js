function addEvent(target,eventName,callback,useCapture){
	if(target.addEventListener){
		target.addEventListener(eventName,handler,useCapture);
	}else if(target.attachEvent){
		target.attachEvent("on" + eventName,handler);
	}else{
		target["on" + eventName] = handler;
	}

	function handler(){
		callback.call(target);
	}

	return handler;
}

function removeEvent(target,eventName,callback,useCapture){
	if(target.removeEventListener){
		target.removeEventListener(eventName,callback,useCapture);
	}else if(target.detachEvent){
		target.detachEvent("on"+eventName,callback);
	}else{
		target["on" + eventName] = null;
	}
}

