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

var Pion = function (x,y,owner,pionArr){
	this.posX=x;
	this.posY=y;
	this.owner= owner;
	pionArr.push(this);

};



$(document).ready(function(){

afficheTableauVide(3,3,"#maVue");

var pionArray = [];

//j1 =true j2 = false;
var turn = true;

console.log(pionArray);
var test = new Pion(0,0,'j1',pionArray);
console.log("after New Pion", pionArray);


});