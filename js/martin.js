//for test
Object.prototype.TestByLog=function (){
	console.log(this);
};


//add class name for a list
function addClassNameForList(list,classname){
	if (typeof(list)=="object"){
		for(var i= 0; i<list.length;i++){
			if (list[i].className=="") {
				list[i].className=classname;
			}else {
				list[i].className=list[i].className+" "+classname;
			};
			
		};
	};
};

//remove class name for a list
function removeClassNameForList(list,classname){
	if (typeof(list)=="object"){
		for(var i= 0; i<list.length;i++){
			list[i].className=list[i].className.replace(classname,"");
		};
	};
};

// get the same tags from a root.
function getTagCountFromList(list,tagName){
	if (typeof(list)=="object") {
		return list.getElementsByTagName(tagName);
	};
	return false;
};

//for compatibility
function addEvent(eventName,element,logic){
	if (window.addEventListener) {
		element.addEventListener(eventName,logic);
	}else {
		element.attachEvent(eventName,logic);
	};
};


