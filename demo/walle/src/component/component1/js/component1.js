function Component1(){
	this.name="Component1";
};

Component1.prototype.hello = function(){
	console.log("hello," + this.name);
};