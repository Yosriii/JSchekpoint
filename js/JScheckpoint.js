function fun1 () {
 document.getElementById("par").style.fontWeight="bold" ;
}
function fun2 () {
 document.getElementById("par").style.fontStyle="italic" ;
}
function fun3(){
    document.getElementById("par").style.textDecoration="underline" ;
}
function fun4(){
var x= document.getElementById("size").value ;

    document.getElementById("par").style.fontSize= x +"px" ;
}
function fun5(){
    var y= document.getElementById("familly").value ;
    document.getElementById("par").style.fontFamily= y ;
}
