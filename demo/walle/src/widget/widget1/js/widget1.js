function Widget1(){
	this.name="Widget1";
};

Widget1.prototype.hello = function(){
	console.log("hello," + this.name);
};