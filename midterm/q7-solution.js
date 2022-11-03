function foo() {
    console.log("Called foo with arguments: ");
    var argStr = " "
    for (let arg of arguments) {
        argStr = argStr + " " + arg.toString();
    }
    console.log(argStr);
    return 'End';
}


function preLog(f) {
    console.log("Before Calling " + f.name);
}

function proLog(f) {
    console.log("Done calling " + f.name);
}

function wrapFunc(func, preFunc, postFunc) {
	return function() {
		preFunc(func);
		var res = func.apply(null, arguments);
		postFunc(func);
		return res;
	}
}

var g = wrapFunc(foo, preLog, proLog)
console.log(g(1, 2, 3))
