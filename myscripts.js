var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function changeColor(){
    if(box.style.background == 'red'){
    box.style.background = 'blue';
    }else if(box.style.background == 'blue'){
        box.style.background = 'green'
    }else{
        box.style.background = 'red'
    }

}