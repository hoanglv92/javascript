function abc(){
    var a = prompt("nhập vào số độ c :");
    if(a != null){
        document.getElementById("demo").innerHTML = "số độ c bận nhập là : " + a;
    }else{
        document.getElementById("demo").innerHTML = "Bạn đã bấm nút hủy";
    }
    let b =(9*a)/5+32;
    alert("số độ F là: " +b);
    document.write("bạn nhập số độ c  là:" + a + "<br/>");
    document.write("nhiệt độ f là :" + b);
}