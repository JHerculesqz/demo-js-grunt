function Module1(){
	this.name="Module1";
};

Module1.prototype.hello = function(){
	console.log("hello," + this.name);
};