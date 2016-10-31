function Core1(){
	this.name="Core1";
};

Core1.prototype.hello = function(){
	console.log("hello," + this.name);
};