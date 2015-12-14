(function(){
	var ep = {};
	ep.$ = function(id){
		return document.getElementById(id);
	}


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

	console.log('********************数组快速复制********************');
	var array = ['2','e','3','g'];
	var newArray = array.concat(array);
	console.log(newArray.join(','));


	var arrayTest = [1,2,3,4,5,6,7,8,9,10];

	//移除数组的最后一个元素，pop()方法类似于栈中的pop()方法，后进先出，所以是移除最后一个元素。
	console.log('array pop() method: ' + arrayTest.pop());
	//移除数组的第一个元素，得用shift()方法

	console.log('array push() method: ' + arrayTest.push()); //返回的是数组的新长度值

	console.log('array reverse() method: ' + arrayTest.reverse());//返回的是原数组，而不是新创建一个数组

	// 数组切片，array.slice(start,end)
	console.log('array slice method: ' + arrayTest.slice(0));
	// 从一个数组中移除一个或多个元素，数组拼接方法：array.splice(index,howmany,element1,......,elementX)
	console.log('array splice method: ' +　arrayTest.splice(2,0,'test','haha','splice'));
	console.log(arrayTest);



	// Difference between call and apply method
	function People(){

	}

	People.prototype = {
		age: "30",
		say: function(){
			console.log('people age is :' + this.age);
		}
	}

	var Hanson = new People();
	Hanson.say();

	var Qin = {
		age: '29'
	}

	People.prototype.say.call(Qin);
	People.prototype.say.apply(Qin);
	People.prototype.say.bind(Qin)();

	function add(numA,numB){
		console.log(this.original + numA + numB);
	}

	add(2,3);
	var obj1 = {original:10};
	add.call(obj1,2,3);
	add.apply(obj1,[2,3]);
	add.bind(obj1)(2,3);


	function justFun(){
		var x = 1;
		var func1 = function(){
			alert(x);
		}
		return func1;
	}

	var testJust = justFun();
	testJust();
})();