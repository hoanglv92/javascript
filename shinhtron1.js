function dientich() {
    var a = prompt("nhập vào chiều dài bán kính hình tròn "+a);
    if (a!=null){
        document.getElementById("demo").innerHTML="chiều dài bán kính bạn nhập là: "+a;
    } else {
        document.getElementById("demo").innerHTML="bạn đã bấm hủy";
    }
    let s=(a*a)*3.14;
    alert("diện tích hình tròn là :"+s);
    document.write("bạn chiều dài bán kính là:"+a+"<br/>");
    document.write("diện tích hình tròn là :"+s);


}