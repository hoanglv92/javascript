function chuvi() {
    var a = prompt("nhập vào chiều dài bán kính hình tròn "+a);
    if (a!=null){
        document.getElementById("demo").innerHTML="chiều dài bán kính bạn nhập là: "+a;
    } else {
        document.getElementById("demo").innerHTML="bạn đã bấm hủy";
    }
    let c=(a*2)*3.14;
    alert("chu vi hình tròn là :"+c);
    document.write(" chiều dài bán kính là:"+a+"<br/>");
    document.write("chu vi hình tròn là :"+c);


}