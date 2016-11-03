function Core1(){
	this.name="Core1";
    var privateProp = "privateProp";

    this.prototype.hello = function(){
        console.log("hello," + this.name);
    };

    var privateFunc = function(){
        console.log("privateFunc");
    };
};