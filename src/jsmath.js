(function(ext) {
	ext._shutdown = function() {}
    ext._getStatus = function() {
        return {status: 1, msg: 'Some of the blocks may not work.'}
    };
    ext.pi = function(){return Math.PI}
    ext.e = function(){return Math.E}
    ext.math = function(num1,operation,num2){
        if (operation=='+'){return Number(num1)+Number(num2)}
        if (operation=='-'){return num1-num2}
        if (operation=='*'){return num1*num2}
        if (operation=='/'){return num1/num2}
        if (operation=='^'){return Math.pow(num1,num2)}
    };
    var descriptor = {
        blocks: [
            ['r', 'π(Pi)', 'pi'],
            ['r', "E", 'e'],
            ['r', "%n %m.math %n", 'math','2','+','2'],
        ],
        menus:{
        math: ['+','-','*','/','^'],
        }
    };
    ScratchExtensions.register('Boost - JavaScript Math3', descriptor, ext);
})({})
