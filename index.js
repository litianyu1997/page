var num = 0;
var select = [];
var cor = [];
var c1 = 0;
var c2 = 0;

$(document).ready(function () {

    $(".option").on("click",function(e){

        var target = $(event.target);

        var t = target.text();

        if($("#p1").html() == t || $("#p2").html() == t || $("#p3").html() == t){

            alert("已选择过相同字母");

        }else if($("#p1").html() != ""){

            if($("#p2").html() != ""){

                if($("#p3").html() != ""){

                    alert("已选满三个选项");

                }else if($("#p3").html() == ""){

                    document.getElementById("p3").innerHTML = t;

                }

            }else if($("#p2").html() == "")

             document.getElementById("p2").innerHTML = t;

        }else if($("#p1").html() == ""){

            document.getElementById("p1").innerHTML = t;

        }

    })

});


var add = function(){

    if($("#p3").html() == ""){
        alert("请填满三个字母");
        return;
    }

    num = num+1;

    var div = document.createElement("div");
    
    div.id = "div" + num;


    var text1 = document.createTextNode(num + ": ");

    var input1 = document.createElement("span");

    input1.className = "span" + num;

    input1.appendChild(text1);

    div.appendChild(input1);


    var text2 = document.createTextNode($("#p1").html() + " " + $("#p2").html() + " " + $("#p3").html());

    var input2 = document.createElement("span");

    input2.className = "span" + num;

    input2.appendChild(text2);

    div.appendChild(input2);


    select[0] = document.getElementById("p1").innerHTML;
    select[1] = document.getElementById("p2").innerHTML;
    select[2] = document.getElementById("p3").innerHTML;

    
    document.getElementById("divlist").appendChild(div);

    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("p3").innerHTML = "";

    correct();


    var text3 = document.createTextNode(c1)

    var input3 = document.createElement("span");

    input3.id = "input1";

    input3.appendChild(text3);

    div.appendChild(input3);

    var text4 = document.createTextNode(c2)

    var input4 = document.createElement("span");

    input4.id = "input2";

    input4.appendChild(text4);

    div.appendChild(input4);

    c1 = 0;
    c2 = 0;

}

var clean = function(){

    document.getElementById("p1").innerText = "";
    document.getElementById("p2").innerText = "";
    document.getElementById("p3").innerText = "";

}

var again = function(){

    var dchild = $("#divlist").children("div");

    for(i = 0; i < num ; i++){

        dchild[i].remove();

    }

    num = 0;

    random();
    clean();
}

var random = function(){

    cor = [];

    var r1 = Math.floor(Math.random() * 6 + 1);

    if(r1 == "1"){
        cor.push("A");
    }else if(r1 == "2"){
        cor.push("B");
    }else if(r1 == "3"){
        cor.push("C");
    }else if(r1 == "4"){
        cor.push("D");
    }else if(r1 == "5"){
        cor.push("E");
    }else if(r1 == "6"){
        cor.push("F");
    }

    var r2 = Math.floor(Math.random() * 6 + 1);

    while(r2 == r1){

        r2 = Math.floor(Math.random() * 6 + 1);

    }
    
    if(r2 == "1"){
        cor.push("A");
    }else if(r2 == "2"){
        cor.push("B");
    }else if(r2 == "3"){
        cor.push("C");
    }else if(r2 == "4"){
        cor.push("D");
    }else if(r2 == "5"){
        cor.push("E");
    }else if(r2 == "6"){
        cor.push("F");
    }

    var r3 = Math.floor(Math.random() * 6 + 1);

    while(r3 == r1 || r3 == r2){

        r3 = Math.floor(Math.random() * 6 + 1);

    }

    if(r3 == "1"){
        cor.push("A");
    }else if(r3 == "2"){
        cor.push("B");
    }else if(r3 == "3"){
        cor.push("C");
    }else if(r3 == "4"){
        cor.push("D");
    }else if(r3 == "5"){
        cor.push("E");
    }else if(r3 == "6"){
        cor.push("F");
    }

}

var correct = function(){

    if(select[0] == cor[0]){
        c1 = c1+1;
        c2 = c2+1;
    }else if(select[0] == cor[1]||select[0] == cor[2]){
        c1 = c1+1;
    }

    if(select[1] == cor[1]){
        c1 = c1+1;
        c2 = c2+1;
    }else if(select[1] == cor[0]||select[1] == cor[2]){
        c1 = c1+1;
    }

    if(select[2] == cor[2]){
        c1 = c1+1;
        c2 = c2+1;
    }else if(select[2] == cor[0]||select[2] == cor[1]){
        c1 = c1+1;
    }

    if(c2 == "3"){
        alert("恭喜找到正确答案");
    }

}

random();