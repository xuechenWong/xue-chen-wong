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

// get all property of object:like windwo

for(prop in window){
	if(window.hasOwnProperty(prop)){
		console.log("own property is :" + prop);
	}else{
		console.log("property from inherit: " + prop);
	}
}

var con = '';
$('.area-select option').each(function(){
    var test = $(this).attr('value') + ":\"" + $(this).text() + "\"," + "\n";
    con += test;
})
console.log(con);

var fn = this, context = arguments[0], args = Array.prototype.slice.call(arguments, 1);


// Closure practise code
var cloe = "global param";
function closure(){
	var cloe = 'private param';
	return function funcInClosure(){
		console.log("closure param is:" + cloe);
	}
}
var testClosure = closure();
testClosure();