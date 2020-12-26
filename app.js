
function rev(){
    var str = document.getElementById("txt").value;
    var strrev ='';
    for(var i=str.length-1;i>=0;i--){
        strrev = strrev + str.charAt(i);
    }
    document.getElementById("result").innerHTML = "The reversed string is: " + strrev;
}