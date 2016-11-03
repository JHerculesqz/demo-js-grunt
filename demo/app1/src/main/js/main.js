function ModuleMain(){
	this.name="ModuleMain";

    this.hello = function(){
        var oModule1 = new Module1();
        oModule1.hello();
    };
};