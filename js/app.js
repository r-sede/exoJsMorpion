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

function checkWin(){

	var table = [['S','S','S'], ['S','S','S'], ['S','S','S']];
	for (var i = 0; i < pionArray.length; i++) {
		var cx = pionArray[i].posX;
		var cy = pionArray[i].posY;
		var ownjoueur = pionArray[i].owner;
		console.log(cx,cy);

		table[cy][cx] = joueurs[ownjoueur];
	}
			
	
		// verifie les ligne du tableau
		if (table[0][0] == table[0][1] && table[0][0] == table[0][2]) {
			alert("vous aver gagner");
		}
		else if(table[1][0] == table[1][1] && table[1][0] == table[1][2] && table[1][0] == joueurs[whichPlayer(turn)]){
		alert("vous aver gagner");
		}

		else if(table[2][0] == table[2][1] && table[2][0] == table[2][2] && table[2][0] == joueurs[whichPlayer(turn)]){
		alert("vous aver gagner");
		}

		//Verifie les colonnes du tableau
		else if(table[0][0] == table[1][0] && table[0][0] == table[2][0] && table[0][0] == joueurs[whichPlayer(turn)]){
		alert("vous aver gagner");
		}
		else if(table[0][1] == table[1][1] && table[0][1] == table[2][1] && table[0][1] == joueurs[whichPlayer(turn)]){
		alert("vous aver gagner");
		}
		else if(table[0][2] == table[1][2] && table[0][2] == table[2][2] && table[0][2] == joueurs[whichPlayer(turn)]){
		alert("vous aver gagner");
		}

		//Verifie les diagonales du tableau
		else if(table[0][0] == table[1][1] && table[0][0] == table[2][2] && table[0][0] == joueurs[whichPlayer(turn)]){
		alert("vous aver gagner");
		}
		else if(table[0][2] == table[1][1] && table[0][2] == table[2][0] && table[1][0] == joueurs[whichPlayer(turn)]){
			alert("vous aver gagner");
		}	
	
		

}
//liste de pions en jeu
var pionArray = [];
//carac representant les pions des joueurs
var joueurs = ["X","O"];

//j1 =true j2 = false;
var turn = 0;

$(document).ready(function(){




afficheTableauVide(3,3,"#maVue");


afficheLesPions(pionArray,joueurs);



$('.cell').on('click',function(){
	// console.log('.cell click');
	var tt = $(this).attr('value');
	console.log(tt);
	
	var npX = tt[0];
	var npY	= tt[1];

	var nPion = new Pion(npX,npY,whichPlayer(turn),pionArray);
	//checkVictory !!! manque plus que ca !!!!
	checkWin();
	turn ++;
	
	//remove listener pour eviter de placer un pion sur une case occupé
	$(this).off();
	afficheLesPions(pionArray,joueurs);

});
/////test


});