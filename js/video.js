

function showVideo(){
	var video = document.getElementById("video");

	var player=video.getElementsByTagName("img")[0];

	var youku=video.getElementsByTagName("embed")[0];

	player.addEventListener("click",function(){
		video.getElementsByClassName("cover")[0].style.display="none";
		youku.style.display="block";
	});
}

showVideo();