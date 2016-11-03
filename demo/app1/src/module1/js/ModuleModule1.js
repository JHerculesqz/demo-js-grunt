/**
 * Created by JHercules on 2016/11/3.
 */
function Module1(){
	this.name="Module1";

    this.imsg = {
        imsgFunc1 : function(){
            console.log("imsgFunc1...");
        }
    };

    this.msg = {
        msgFunc1 : function(){
            console.log("msgFunc1...");
        }
    };

    this.state = {
        stateFunc1 : function(){
            console.log("stateFunc1...");
        }
    };
};
var module1 = new Module1();