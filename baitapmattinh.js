var so;
var so1;
var chuoi = 0;
var toantu=1;
function hienso1() {
    so1=document.getElementById("so1").innerHTML;
    document.getElementById("hienthi").innerHTML += so1;
    console.log(so1)
}
function hienso2() {
    let so2=document.getElementById("so2").innerHTML;
    document.getElementById("hienthi").innerHTML += so2;
    console.log(so2)
}
function hienso3() {
    let so3=document.getElementById("so3").innerHTML;
    document.getElementById("hienthi").innerHTML += so3;
    console.log(so3)
}
function hienso4() {
    let so4=document.getElementById("so4").innerHTML;
    document.getElementById("hienthi").innerHTML += so4;
    console.log(so4)
}
function hienso5() {
    let so5=document.getElementById("so5").innerHTML;
    document.getElementById("hienthi").innerHTML += so5;
    console.log(so2)
}
function hienso6() {
    let so6=document.getElementById("so6").innerHTML;
    document.getElementById("hienthi").innerHTML += so6;
    console.log(so6)
}
function hienso7() {
    let so7=document.getElementById("so7").innerHTML;
    document.getElementById("hienthi").innerHTML +=so7;
    console.log(so7)
}
function hienso8() {
    let so8=document.getElementById("so8").innerHTML;
    document.getElementById("hienthi").innerHTML += so8;
    console.log(so8)
}
function hienso9() {
    let so9=document.getElementById("so9").innerHTML;
    document.getElementById("hienthi").innerHTML += so9;
    console.log(so9)
}

function hienso0() {
    let so0=document.getElementById("so0").innerHTML;
    document.getElementById("hienthi").innerHTML += so0;
}
function hiencong() {
    so1 = document.getElementById("hienthi").innerHTML;
    document.getElementById("hienthi").innerHTML = "";
    toantu = 1;
}
function hientru() {
    so1 = document.getElementById("hienthi").innerHTML;
    document.getElementById("hienthi").innerHTML = "";
    toantu = 2;
}

function hiennhan() {
    so1 = document.getElementById("hienthi").innerHTML;
    document.getElementById("hienthi").innerHTML = "";
    toantu = 3;
}

function hienchia() {
    so1 = document.getElementById("hienthi").innerHTML;
    document.getElementById("hienthi").innerHTML = "";
    toantu = 4;
}

function xoa() {
    document.getElementById("hienthi").innerHTML = "";
}

function ketqua() {
    if (toantu == 1) {
        so2 = document.getElementById("hienthi").innerHTML;
        console.log("so1:" + so1);
        console.log("so2:" + so2);
        var kq = parseInt(so1) + parseInt(so2);
        document.getElementById("hienthi").innerHTML = kq;
    }
    if (toantu == 2) {
        so2 = document.getElementById("hienthi").innerHTML;
        console.log("so1:" + so1);
        console.log("so2:" + so2);
        var kq = parseInt(so1) - parseInt(so2);
        document.getElementById("hienthi").innerHTML = kq;
    }
    if (toantu == 3) {
        so2 = document.getElementById("hienthi").innerHTML;
        console.log("so1:" + so1);
        console.log("so2:" + so2);
        var kq = parseInt(so1) * parseInt(so2);
        document.getElementById("hienthi").innerHTML = kq;
    }
    if (toantu == 4) {
        so2 = document.getElementById("hienthi").innerHTML;
        console.log("so1:" + so1);
        console.log("so2:" + so2);
        var kq = parseInt(so1) / parseInt(so2);
        document.getElementById("hienthi").innerHTML = kq;
    }
}