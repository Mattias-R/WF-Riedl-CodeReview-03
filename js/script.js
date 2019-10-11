window.onload = function(){


for(i=0;i<movies.length;i++){
//all variables
	var obj = movies[i];
	var box = box;
	var img = img;
	var rightSide = rightSide;
	var u = u;
	var d = d ;
	var like = like ;


//box for the movies
	box = document.createElement("div");
		box.style.backgroundColor = "#101010";
		box.style.height = "30em";
		box.style.width= "40em";
		box.style.display = "flex";
		box.style.margin ="1em 0em 1em 0em"
		box.setAttribute("id","box"+i)
// the place for the pictures
	img = document.createElement("div");
		img.style.height = "90%";
		img.style.width= "45%";
		img.style.backgroundColor = "green";
		img.style.margin = "auto 0 auto 1em";
		img.setAttribute("id","img"+i)
		box.appendChild(img);
//the picture it self
	pic = document.createElement("IMG");
		pic.setAttribute("src", "./img/img"+[i]+".jpg");
		pic.style.imageSize = "cover";
		pic.style.height = "100%";
		pic.style.width= "100%";
		img.appendChild(pic);
//rightside is the headline & description & button field

rightSide = document.createElement("div");
		rightSide.style.width = "45%";
		rightSide.style.height = "90%";
		rightSide.style.margin = "1.5em 1em 1em 1em";
		rightSide.style.backgroundColor = "##333333";
		rightSide.setAttribute("id","rightSide"+i);
		box.appendChild(rightSide);
//Überschrift
	u = document.createElement("h1");
		var node = document.createTextNode(obj.uberschrift);
		u.style.margin ="1em auto";
		u.style.textAlign ="center";
		u.style.color = "white";
		u.appendChild(node);
		rightSide.appendChild(u);
//film description
	d = document.createElement("div");
		d.style.height = "60%";
		var node2 = document.createTextNode(obj.description);
		d.style.marginLeft = "1em";
		d.style.color = "white";
		d.appendChild(node2)
		rightSide.appendChild(d);
//Like button
	like = document.createElement("div");
		var btn = document.createElement("BUTTON");
		var node3 = document.createTextNode("Like 👍");
		var circle = document.createElement("div");
		var number = document.createElement("p");
		var node4 = document.createTextNode("0");
		//Button
		btn.setAttribute("id","click"+i)
		btn.onclick=function(v){
			var clicks = 0;
			clicks = Number(document.getElementById(this.id).value);
			clicks++;
			document.getElementById(this.id).value=clicks;
			v.target.nextElementSibling.innerHTML=clicks;
			console.log(clicks);
		}
		btn.style.outline = "none";
		btn.style.fontSize ="2em";
		btn.style.background="#101010";
		btn.style.border = "none";
		btn.style.color = "green";
//this is the box around the button and the circle
		like.style.display = "flex";
		like.style.color = "white";
		like.style.textAlign = "right";
		like.style.justifyContent ="flex-end";
		like.style.marginRight = "1em";
//the green circle
		circle.style.height = "4em"
		circle.style.width = "4em"
		circle.style.borderRadius ="8em"
		circle.style.backgroundColor = "green";
		circle.style.textAlign = "center";
		number.style.fontSize = "1.3em"
		number.setAttribute("id", i)
//this assambles everything
		number.appendChild(node4);
		circle.appendChild(number);
		btn.appendChild(node3)
		like.appendChild(btn)
		like.appendChild(circle)
		rightSide.appendChild(like);

	
	
	var elementPIC = document.getElementById("movieSection");
	elementPIC.appendChild(box);


}
/*
var clicks = 0;
	
   for(i=0;i<movies.length;i++){
	document.getElementById("click"+i).addEventListener("click", function(){
		clicks += 1;
  		
  		console.log("ich bin klick" +i);
});
}*/

}

