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
                jj = 1;
                
            
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
            
            var arr = [[],[],[]],
                arr2 = [[],[],[]],
                swt = 1,
                gam = 0,
                a = document.getElementById('gameZone');




            a.onclick = function(event){
                var id = event.target.id,
                    xoro;

                    if(arr2[+id[4]-1] != 1){

                        arr2[+id[4]-1] = 1;

                        if (swt == 1){
                            xoro = "X";
                            swt = 2;
                        } else {
                            xoro = "O";
                            swt = 1;
                        }

                        switch (+id[4]){
                            case 1:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[0][0] = xoro;
                            }break;
                            case 2:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[0][1] = xoro;
                            }break;
                            case 3:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[0][2] = xoro;
                            }break;
                            case 4:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[1][0] = xoro;
                            }break;
                            case 5:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[1][1] = xoro;
                            }break;
                            case 6:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[1][2] = xoro;
                            }break;
                            case 7:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[2][0] = xoro;
                            }break;
                            case 8:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[2][1] = xoro;
                            }break;
                            case 9:{
                                document.getElementById(id).innerHTML = xoro;
                                arr[2][2] = xoro;
                            }break;
                                     }

                        var arr3 = [
                                arr[0][0]+arr[0][1]+arr[0][2],
                                arr[1][0]+arr[1][1]+arr[1][2],
                                arr[2][0]+arr[2][1]+arr[2][2],
                                arr[0][0]+arr[1][0]+arr[2][0],
                                arr[0][1]+arr[1][1]+arr[2][1],
                                arr[0][2]+arr[1][2]+arr[2][2],
                                arr[0][0]+arr[1][1]+arr[2][2],
                                arr[0][2]+arr[1][1]+arr[2][0]];

                        gam++;

                        for (var i = 0; i < 7; i++){
                            if (arr3[i] == "XXX" || arr3[i] == "OOO"){
                               alert("WIN! Player: '" + arr3[i][0]+"'" );
                                break;
                            } else if(gam == 9){
                                alert("Draw!!!");
                                break;
                            }
                        }
                    } 


            }

            
            
            
          
            
//            document.getElementById('gameZone').onclick = function(){
//                    document.addEventListener('click', function(e) {
//                    var cord = document.elementFromPoint(e.clientX, e.clientY).id;
//                    add(cord);
//                }, false);
//                
//                function add(cord){
//                    switch(jj){
//                        case 1:{
//                            document.getElementById(cord).innerHTML = "X";
//                            jj++;
//                        }break;
//                        case 2:{
//                            document.getElementById(cord).innerHTML = "O";
//                            jj = 1;
//                        }break;
//                             }
//                }
//              
//            }
           

            
            
            
            
            
            
            
            
            
            
            
            
    
        }break;
        case 2:{
            
        }break;
        case 3:{
            
        }break;
    }
    
   
}



