// $(function(){
// 	console.log("test");
// })

function log(){
	// arguments是伪数组，想使用数组的标准方法，可以通过Array.prototype.call()方法来实现
	var args = Array.prototype.slice.call(arguments);
	args.unshift('(app)');
	console.log.apply(console,args);
}

log('1');
log('1,2');

var bindObject = {
	bar:1,
	eventBind:function(){
		$('.bindClass').on('click',function(){
			console.log('bindClass click method invoked!');
			console.log(this.bar);
		}.bind(this));
	}
}

bindObject.eventBind();




