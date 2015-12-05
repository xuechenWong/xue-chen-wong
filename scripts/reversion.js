(function(){
	var ep = {};
	ep.$ = function(id){
		return document.getElementById(id);
	}

	var tt = 'https://github.com/jsfront/src/blob/master/qq.md';
})();

(function(){
	Array.prototype.contains = function(obj){
		var i = this.length;
		while(i--){
			if(this[i] === obj){
				return true;
			}
		}

		return false;
	}

	Array.prototype.insert = function(index,item){
		this.splice(index,0,item);
	}

	$('#inputString').on('blur',function(){
		var text = $(this).val();
		var array = [];
		if(text != ''){
			for(var i = 0; i < text.length; i++){
				array.push(text[i]);
			}
		}
		array.reverse();
		var result = array.join('');
		$('#resultString').html(result);
	})

	$('#latin-pig').on('blur',function(){
		var text = $(this).val();
		// 元音字母
		var arrayInit = ['a','e','i','o','u'];
		var array = [];
		if(text != ''){
			array = text.split('');
		}

		for(var i = 0; i < array.length; i++){
			if(arrayInit.contains(array[i])){
				var newValue = '-' + array[i] + 'ay';
				array.splice(i,1);
				array.insert(array.length,newValue);		
				break;
			}
		}
		var result = array.join('');
		$('#latin-result').html(result);
	})

})();