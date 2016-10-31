function Core1(){
	this.name="Core1";
};

Core1.prototype.hello = function(){
	console.log("hello," + this.name);
};

function Component1(){
	this.name="Component1";
};

Component1.prototype.hello = function(){
	console.log("hello," + this.name);
};

function Widget1(){
	this.name="Widget1";
};

Widget1.prototype.hello = function(){
	console.log("hello," + this.name);
};