function afficheTableauVide(w,h,id){

	$(id).html('');

	for(var yy = 0; yy < h ; yy++){
		var curLigne = "<tr>";
		for(var xx = 0 ;xx < w ; xx++){
			var valuString = xx+""+yy;
			curLigne+='<td class="cell" value="'+valuString+'"></td>';
		}
		curLigne +="</tr>";
		$(id).append(curLigne);
	}

}

function afficheLesPions(pionArr,players){
	$('.cell').html('&nbsp');

	for(var i = 0;i < pionArr.length; i++){
		var cOwn = pionArr[i].owner;
		var cX = pionArr[i].posX;
		var cY = pionArr[i].posY;

		var valString = cX+''+cY;

		$(".cell[value='"+valString+"']").html(players[cOwn]);

	}
}

var Pion = function (x,y,owner,pionArr){
	this.posX=x;
	this.posY=y;
	this.owner= owner;
	pionArr.push(this);

};

function whichPlayer(turnNumb){
	return turnNumb %2;
}


$(document).ready(function(){
//carac representant les pions des joueurs
var joueurs = ["X","O"];

//liste de pions en jeu
var pionArray = [];

//j1 =true j2 = false;
var turn = 0;


afficheTableauVide(3,3,"#maVue");


//test !!!
// console.log(pionArray);
// var test = new Pion(0,0,0,pionArray);
// var test2 = new Pion(0,2,1,pionArray);

// console.log("after New Pion", pionArray);
afficheLesPions(pionArray,joueurs);



$('.cell').on('click',function(){
	// console.log('.cell click');
	var tt = $(this).attr('value');
	console.log(tt);
	
	var npX = tt[0];
	var npY	= tt[1];

	var nPion = new Pion(npX,npY,whichPlayer(turn),pionArray);
	//checkVictory
	turn ++;
	//remove handler
	$(this).off();
	afficheLesPions(pionArray,joueurs);

});
/////test


});