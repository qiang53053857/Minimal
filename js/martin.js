//for test
Object.prototype.TestByLog=function (){
	console.log(this);
};



//add one class name
function addOneClass(element,classname){

	if (typeof(element)=="object"||element.className!="undefined") {
		
		var currentClass=element.className;

		element.className+=(currentClass=="")?classname:" "+classname;
	};

};

//remove one class name
function removeOneClass(element,classname){

	if (typeof(element)=="object"||element.className!="undefined") {

		var currentClass=element.className;
 		element.className="";
 		if (currentClass.indexOf(" ")>-1) {
 		   arr=currentClass.replace(/\s+/g, ' ').split(' ');

 		   for(var i=0;i<arr.length;i++){
 		   	    if (arr[i]!==classname&&arr[i]!=="") {
 		   	    	addOneClass(element,arr[i]);
 		   	    };
 		   };
 		}else{
 			element.className=(currentClass===classname)?"":currentClass;
 		};
	};
};

   
//add class name for a list
function addClassNameForList(list,classname){
	if (typeof(list)=="object"){
		
		if (typeof(list.className)!="undefined"&&typeof(list.className)=="string") {
			addOneClass(list,classname);
		}else{
				
			for(var i= 0; i<list.length;i++){

				addOneClass(list[i],classname);

			};
		};
	};
};




//remove class name for a list
function removeClassNameForList(list,classname){
	if (typeof(list)=="object"){
				
		if (typeof(list.className)!="undefined"&&typeof(list.className)=="string") {
			removeOneClass(list,classname);
		}else{
				
			for(var i= 0; i<list.length;i++){

				removeOneClass(list[i],classname);

			};
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


