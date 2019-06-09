var html = '';

var rgbColor;
function makeColors(){
   var random = Math.floor(Math.random() * 256 ); 
    return random;
}

for (var i = 0; i <= 10; i ++){
   
   
    rgbColor = 'rgb(' + makeColors() + ',' + makeColors() + ',' + makeColors() + ')';
    html += '<div id="circle" style="background-color:' + rgbColor +  '">'+i+'</div>';


}

for (var p=0; p<=50; p++){
    console.log(p%2)

}





document.write(html);
