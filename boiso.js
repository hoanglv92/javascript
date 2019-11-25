function abc(){
    let a = prompt("nhập vào số a:");
    if(a != null){
        document.getElementById("demo").innerHTML = "bạn đã nhập số a: " + a;
    }else{
        document.getElementById("demo").innerHTML = "Bạn đã bấm nút hủy";
    }
    let b= prompt("nhập vào số b:");
    if(b!=null){
        document.getElementById("demo").innerHTML ="bạn đã nhập số b: "+b;
    }else {
        document.getElementById("demo").innerHTML= "bạn đã bấm hủy";
    }
    let c=a%b;
    if(c==0){
        alert("b là bội số của a");

    }else {
        alert("b không là bội số của a");
    }

}