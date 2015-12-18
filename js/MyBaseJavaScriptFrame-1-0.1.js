//for test
Object.prototype.TestByLog=function (){
	console.log(this);
};

//
Object.prototype.GetByClass=function (sClass){
        var Ele=this.getElementsByTagName('*');
        var Result=[];
        var re=new RegExp('\\b'+sClass+'\\b','i');
        
        for(var i=0;i<Ele.length;i++)
        {
                if(re.test(Ele[i].className))
                {
                        Result.push(Ele[i]);
                };
        };
        
        return Result;
};

//add one class name
function addOneClass(element,newClassName){

	if (typeof(element)=="object"||element.className!="undefined") {
		
		var currentClass=element.className;

		element.className+=(currentClass=="")?newClassName:" "+newClassName;
	};

};

//remove one class name
function removeOneClass(element,newClassName){

	if (typeof(element)=="object"||element.className!="undefined") {

		var currentClass=element.className;
 		element.className="";
 		if (currentClass.indexOf(" ")>-1) {
 		   arr=currentClass.replace(/\s+/g, ' ').split(' ');

 		   for(var i=0;i<arr.length;i++){
 		   	    if (arr[i]!==newClassName&&arr[i]!=="") {
 		   	    	addOneClass(element,arr[i]);
 		   	    };
 		   };
 		}else{
 			element.className=(currentClass===newClassName)?"":currentClass;
 		};
	};
};

//add an attribute
function addAttrbuteForList(list,attrName,attrValue){
	if (typeof(list)=="object") {
		for(var i = 0; i<list.length;i++){
			if(list[i].setAttribute){
				list[i].setAttribute(attrName,attrValue);
			}
		};
	};
};
   
//add class name for a list
function addClassNameForList(list,newClassName){
	if (typeof(list)=="object"){
		
		if (typeof(list.className)!="undefined"&&typeof(list.className)=="string") {
			addOneClass(list,newClassName);
		}else{
				
			for(var i= 0; i<list.length;i++){

				addOneClass(list[i],newClassName);

			};
		};
	};
};

//remove class name for a list
function removeClassNameForList(list,newClassName){
	if (typeof(list)=="object"){
				
		if (typeof(list.className)!="undefined"&&typeof(list.className)=="string") {
			removeOneClass(list,newClassName);
		}else{
				
			for(var i= 0; i<list.length;i++){

				removeOneClass(list[i],newClassName);

			};
		};
	};
};

// get the same tags from a root.
function getArrByTag(list,tagName){
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

//implement trigger
function trigger(element,eventName){
	element[eventName].call(element);
};