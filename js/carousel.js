
Object.prototype.InitCarousel = function(interval){

	var pointer;
	var banner;
	var pointerArr;
	var bannerArr;
	var arr = getArrByTag(this,"ul");
	var previous=this.GetByClass("previous")[0];
	var next=this.GetByClass("next")[0];


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
				if (interval!=false) {
					clearInterval(autoPlayTimer);
   					autoPlayTimer = self.setInterval(autoPlayHandler,interval);
   				};
			};
    	});


	function autoPlayHandler(){
   		var currentPointer = pointer.GetByClass("active")[0].getAttribute("target-num");
   		Next(pointerArr,currentPointer);
   	};

	if (interval!=false) {
   		var autoPlayTimer = self.setInterval(autoPlayHandler,interval);
	}

   previous.addEventListener("click",function(){
   		var currentPointer = pointer.GetByClass("active")[0].getAttribute("target-num");
   		Previous(pointerArr,currentPointer);
   });

   addEvent("click",next,function(){
   		var currentPointer = pointer.GetByClass("active")[0].getAttribute("target-num");
   		Next(pointerArr,currentPointer);
   });
};

function Next(list,current){
	
			var length=list.length;
			if (current==length-1||length==1) {

				trigger(list[0],"click");
	
			}else{

				trigger(list[Number(current)+1],"click");
			};
	
};

function Previous(list,current){

			var length = list.length;

			if (length==1||current==0) {
				trigger(list[Number(length)-1],"click");
			}else {
				trigger(list[Number(current)-1],"click")
			};
};




