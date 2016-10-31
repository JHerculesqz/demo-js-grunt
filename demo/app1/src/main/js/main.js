function ModuleMain(){
	this.name="ModuleMain";
};

ModuleMain.prototype.hello = function(){
	var oModule1 = new Module1();
	oModule1.hello();
};