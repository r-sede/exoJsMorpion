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

function afficheLesPions(){
	$('.cell').html('&nbsp');

	for(var i = 0;i < pionArray.length; i++){
		var cOwn = pionArray[i].owner;
		var cX = pionArray[i].posX;
		var cY = pionArray[i].posY;

		var valString = cX+''+cY;

		$(".cell[value='"+valString+"']").html(joueurs[cOwn]);

	}
}

function checkVictoire(){

	var tables = 	[['','',''],
					 ['','',''],
					 ['','','']];

	for(var i = 0; i< pionArray.length;i++){
		var cOwn = pionArray[i].owner;
		var cX = pionArray[i].posX;
		var cY = pionArray[i].posY;

		tables[cY][cX] = joueurs[cOwn];
		console.log(tables);
	}
	

	var patternTocheck =joueurs[whichPlayer()]+""+joueurs[whichPlayer()]+""+joueurs[whichPlayer()];

	var ligne1 = tables[0].join('');
	var ligne2 = tables[1].join('');
	var ligne3 = tables[2].join('');
	
	var col1 = tables[0][0]+""+tables[1][0]+""+tables[2][0];
	var col2 = tables[0][1]+""+tables[1][1]+""+tables[2][1];
	var col3 = tables[0][2]+""+tables[1][2]+""+tables[2][2];

	var diag1 = tables[0][0]+""+tables[1][1]+""+tables[2][2];
	var diag2 = tables[2][0]+""+tables[1][1]+""+tables[0][2];

	var megafun = [ligne1,ligne2,ligne3,col1,col2,col3,diag1,diag2];

	for(var p = 0; p<megafun.length;p++){
		// console.log("megafun",megafun[p]);
		if(megafun[p].includes(patternTocheck)){
			return true;
		}
	}

	return false;



}

var Pion = function (x,y,owner,pioArr){
	this.posX=x;
	this.posY=y;
	this.owner= owner;
	pioArr.push(this);

};

function whichPlayer(){
	return turn %2;
}

 var cellListener= function(){
		// console.log('.cell click');
		var tt = $(this).attr('value');
		// console.log(tt);
		
		var npX = tt[0];
		var npY	= tt[1];

		var nPion = new Pion(npX,npY,whichPlayer(turn),pionArray);
		console.log(nPion);
		if(checkVictoire()){
			alert('joueur '+joueurs[whichPlayer()]+' a gagné');
			reset();
			//window.location.reload();
			// console.log(pionArray);
		}
		turn ++;
		//remove handler
		$(this).off();
		afficheLesPions();	
		console.log(turn);
};

function reset(){
	pionArray= [];
	turn = -1;
	afficheTableauVide(3,3,"#maVue");
	afficheLesPions();
	$('.cell').on('click',cellListener);
}

//carac representant les pions des joueurs
var joueurs = ["X","O"];

//liste de pions en jeu
var pionArray = [];

//compteur de tour 
var turn = 0;


$(document).ready(function(){


	afficheTableauVide(3,3,"#maVue");


	afficheLesPions();



	$('.cell').on('click',cellListener);


});//document.ready
