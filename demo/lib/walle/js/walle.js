function Core1(){
	this.name="Core1";
    var privateProp = "privateProp";

    this.hello = function(){
        console.log("hello," + this.name);
    };

    var privateFunc = function(){
        console.log("privateFunc");
    };
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