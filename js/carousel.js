
Object.prototype.InitCarousel = function(){
	var pointer;
	var banners;
	var list = getTagCountFromList(this,"ul");

	if (list.length==2) {
		pointer=list[0];
		banners=list[1];
	}else {
		console.log("init faild please check with document")
	};

    addEvent("click",pointer,function(e){
			e=e||window.event;
			var target=e.target||e.srcElement;
			var classname = target.className;
			
			if (classname.indexOf("active")==-1) {

				var name = target.parentNode.getElementsByTagName('li');

				removeClassNameForList(name,"active");

				target.className=" "+"active";
			};
    	});
};


