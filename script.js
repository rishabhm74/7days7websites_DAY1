function showmenu(){
    document.getElementById('side_menu_container').style.transform = "translateX(50vw)";
}
function  closemenu(){
    document.getElementById('side_menu_container').style.transform = "translateX(-50vw)";
}

function mover(){
    document.getElementById('other_options_container').style.transform = "translateX(-20vw)";
}

function moverback(){
    document.getElementById('other_options_container').style.transform = "translateX(0vw)";
}

var images = new Array("peru", "dubai", "rome", "spain");
var i=0;
var arrlen = images.length;
function nextimg(){
    var currentpace = document.getElementById('name_container_p').innerHTML;
    for(var j = 0; j<arrlen; j++){
        if(images[j] === currentpace){
            i = j;
        }
    }
    i = i +1;
    var nextplaceindex = images[i];
    var nextbackimg = "url('" + nextplaceindex + ".png" +"')";
    var nextplacename = nextplaceindex;
    console.log(nextbackimg);

    document.getElementById('background_container').style.backgroundImage = nextbackimg;
    document.getElementById('name_container_p').innerHTML = nextplacename;
}

function lastimg(){
    var currentpace = document.getElementById('name_container_p').innerHTML;
    for(var j = 0; j<arrlen; j++){
        if(images[j] === currentpace){
            i = j;
        }
    }
    i = i - 1;
    var nextplaceindex = images[i];
    var nextbackimg = "url('" + nextplaceindex + ".png" +"')";
    var nextplacename = nextplaceindex;
    console.log(nextbackimg);

    document.getElementById('background_container').style.backgroundImage = nextbackimg;
    document.getElementById('name_container_p').innerHTML = nextplacename;
}