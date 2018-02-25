

// cards = document.getElementsByClassName("pcard");
// for(let i = 0;i < cards.length;i++){
// 	cards[i].style.marginTop = (Math.random()*70)+10 + "px";
// 	cards[i].style.marginBottom = (Math.random()*70)+10 + "px";
// 	cards[i].style.marginLeft = (Math.random()*70)+10 + "px";
// 	cards[i].style.marginRight = (Math.random()*70)+10 + "px";	

// }

// pages = document.getElementsByName("page");
// leftArrow = document.getElementById("left-arrow");
// rightArrow = document.getElementById("right-arrow");

// function movePage(direction){
// 	if(direction === "left"){

// 	}
// 	else{

// 	}
// }

// function changePage(){
// 	document.getElementById("MyElement").classList.add('hidden-page');
// 	document.getElementById("MyElement").classList.remove('page');

// }


const pages = document.getElementsByClassName("page");
let pageIndex = 0; //0=about me 1=projects 2=resume 3=contact
let leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function slide(direction){
	// currPage = (currPage+1)%4;
	// for(let i = 0;i < pages.length;i++){
	// 	if(i !== currPage){
	// 		pages[i].style.display = "none";
	// 		pages[i].style.opacity = "0";
	// 	}
	// 	else{
	// 		pages[i].style.display = "inline-block";
	// 		pages[i].style.opacity = "100";
	// 	}
	// }

	// page1 = document.getElementById("page1");
	// page1.classList.toggle('fade');
	// page2 = document.getElementById("page2");
	// page2.style.display = "inline-block";
	// page2.classList.toggle('fade');

	currPage = document.getElementById("page"+pageIndex);
	pageIndex += direction;
	nextPage = document.getElementById("page"+pageIndex);
	if(direction > 0){
		currPage.style.transform = "translate(-200%,0px)";
		currPage.classList.toggle('hide');
		nextPage.classList.toggle('hide');
		nextPage.style.transform = "translate(0px,0px)";
	}
	else{
		currPage.style.transform = "translate(200%,0px)";
		currPage.classList.toggle('hide');
		nextPage.classList.toggle('hide');
		nextPage.style.transform = "translate(0px,0px)";
	}

	if(pageIndex === 0){
		leftArrow.classList.toggle('hide');
	}
	else if(pageIndex < 3){
		if(leftArrow.classList.contains("hide")){
			leftArrow.classList.toggle('hide');
		}
		if(rightArrow.classList.contains("hide")){
			rightArrow.classList.toggle('hide');
		}
	
	}
	else{
		rightArrow.classList.toggle('hide');
	}

	// page1 = document.getElementById("page1");
	// page1.style.transform = "translate(200%,0px)";
	// page1.classList.toggle('fade');
	// page2 = document.getElementById("page2");
	// page2.classList.toggle('fade');
	// page2.style.transform = "translate(0px,0px)";

	//document.body.style.backgroundColor = "#50b2a0";

	// page1.style.opacity = "0";
	// page1.style.visibility = "hidden";
	// //page1.style.display = "none";
	// document.body.style.backgroundColor = "#50b2a0";
	// page2 = document.getElementById("page2");
	// page2.style.visibility = "visible";
	// page1.style.display = "none";
	// //page2.style.opacity = "100";
	// //page2.style.zIndex = 0;
	// //page2.style.display = "inline-block";


}

function hideOtherPages(){
	//pages = document.getElementsByClassName("page");
	// for(let i = 0;i < pages.length;i++){
	// 	pages[i].classList.toggle('fade');
	// 	pages[i].style.display = "none";
	// 	//pages[i].style.opacity = "0";
	// }
	// pages[0].classList.toggle('fade');
	// pages[0].style.display = "inline-block";
	// //pages[0].style.opacity = "100";
	for(let i = 0;i < pages.length;i++){
		pages[i].style.transform = "translate(" + (i+1)*200 + "%,0px)";
		pages[i].classList.toggle("hide");
		// pages[i].style.position = "absolute";
		// pages[i].style.visibility = "hidden";
		//pages[i].style.opacity = "0";
	}

	//pages[0].style.display = "inline-block";
	pages[0].style.transform = "translate(0px,0px)";
	pages[0].classList.toggle("hide");


}


hideOtherPages();