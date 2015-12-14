function showText(){
	var work= document.getElementById("work");

	var spanText= work.getElementsByTagName("span");

	var items= work.getElementsByTagName("a");

	for (var i = 0; i < items.length; i++) {
		 items[i].addEventListener("mouseover",function(){
				this.getElementsByTagName("span")[0].style.display="block";
			});

		 items[i].addEventListener("mouseleave",function(){
				this.getElementsByTagName("span")[0].style.display="none";
			});
	};
}

showText();

