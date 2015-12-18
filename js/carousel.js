
Object.prototype.InitCarousel = function(){

	var pointer;
	var banner;
	var pointerArr;
	var bannerArr;
	var arr = getArrByTag(this,"ul");

	if (arr.length==2) {
		pointer=arr[0];
		pointerArr=getArrByTag(pointer,"li");
		banner=arr[1];
		bannerArr=getArrByTag(banner,"li");

		for(var i = 0; i<pointerArr.length;i++){
			
			pointerArr[i].setAttribute("target-num",i);

		};

	}else {
		console.log("init faild please check with document")
	};

    addEvent("click",pointer,function(e){
			e=e||window.event;
			var target=e.target||e.srcElement;
			var classname = target.className;
			
			if (classname.indexOf("active")==-1) {
				var num=target.getAttribute("target-num");
				removeClassNameForList(pointerArr,"active");
				removeClassNameForList(bannerArr,"active");
				addOneClass(target,"active");
				addOneClass(bannerArr[num],"active");
			};
    	});

   var currentPointer = pointer.GetByClass("active")[0].getAttribute("target-num");

   swithing(pointerArr,currentPointer);
};

function swithing(list,current){
	
			var length=list.length;
			if (current==length-1||length==1) {

				trigger(list[current],"click");
	
			}else{

				trigger(list[Number(current)+1],"click");
			};
	
};




