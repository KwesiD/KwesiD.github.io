

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
const backgroundColors = ["#69C9E0","#6ffc81","#F0BD54","#F05F54"];

function slide(direction){
	let currPage = document.getElementById("page"+pageIndex);
	pageIndex += direction;
	let nextPage = document.getElementById("page"+pageIndex);
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
	document.body.style.backgroundColor = backgroundColors[pageIndex];
	console.log(pageIndex);
}


function slideMenu(newPageIndex){
	let direction = newPageIndex - pageIndex;
	let currPage = document.getElementById("page"+pageIndex);
	pageIndex += direction;
	let nextPage = document.getElementById("page"+pageIndex);
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
		if(rightArrow.classList.contains("hide")){
			rightArrow.classList.toggle('hide');
		}
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
		if(leftArrow.classList.contains("hide")){
			leftArrow.classList.toggle('hide');
		}
	}
	document.body.style.backgroundColor = backgroundColors[pageIndex];
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
if(pageIndex === 0){
	leftArrow.classList.toggle('hide');
}