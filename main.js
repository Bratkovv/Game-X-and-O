var pvsp = document.getElementById('pvsp'),
    pvsc = document.getElementById('pvsc'),
    cvsc = document.getElementById('cvsc'),
    editNameComp = document.getElementById('editNameComp'),
    play = document.getElementById('play'),
    gameMod = 0;

pvsp.onclick = function () {
    var a = document.getElementById('nameComp'),
        b = document.getElementById('editNameComp'),
        c = document.getElementById('playerName'),
        d = document.getElementById('gameMod');
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    gameMod = 1;
}

pvsc.onclick = function () {
    var a = document.getElementById('nameComp'),
        b = document.getElementById('editNameComp'),
        c = document.getElementById('playerName'),
        d = document.getElementById('gameMod'),
        e = document.getElementById('nameP2');
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
    gameMod = 2;
}

cvsc.onclick = function () {
    var a = document.getElementById('nameComp'),
        b = document.getElementById('editNameComp'),
        c = document.getElementById('playerName'),
        d = document.getElementById('gameMod');
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "none";
    gameMod = 3;
}

editNameComp.onclick = function () {
    var a = document.getElementById('nameComp');
    editNameComp.style.display = "none";
    a.style.display = "block";
}

play.onclick = function () {
    var a = document.getElementById('playerName'),
        b = document.getElementById('gameXO');
    a.style.display = "none";
    b.style.display = "block";
 
       switch (gameMod){
        case 1:{
            var c = document.getElementById('nameP12').value,
                d = document.getElementById('nameP13').value,
                name1 = document.getElementById('name1'),
                name2 = document.getElementById('name2'),
                continueGame;
            
            if(c == ""){
                 name1.innerHTML = "Player1";
            } else{
                name1.innerHTML = "" + c;
            }
            
            if(d == ""){
                 name2.innerHTML = "Player2";
            } else{
                name2.innerHTML = "" + d;
            }
            
            var gameZone = document.getElementsByClassName('gameZone')[0],
                ocher = 1; 
            
            gameZone.onclick = function(event) {
                var target = event.target; 
                addCellxo(target);
            };
            
            function addCellxo(TAR) {
                
                switch (ocher){
                    case 1:;  
                    case 3:;  
                    case 5:;  
                    case 7:;  
                    case 9: TAR.innerHTML = "X"; ocher++; break;  
                    case 2:;  
                    case 4:;  
                    case 6:;  
                    case 8: TAR.innerHTML = "O"; ocher++; break; 
                }
            }
    
        }break;
        case 2:{
            
        }break;
        case 3:{
            
        }break;
    }
    
   
}



