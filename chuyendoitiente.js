function chuyendoi() {
    let a=  document.getElementById("nhaptien1").value;
     let b= document.getElementById("chuyentien1").value;
     let c= document.getElementById("chuyentien2").value;
     let ketqua;
        if(b==1 && c==1){
            ketqua=a/23000;
        }
        if(b==1 && c==2){
            ketqua=a;
        }
        if(b==2 && c==1){
            ketqua=a;
        }
        if (b==2 && c==2){
            ketqua=a*23000;
        }

    document.getElementById("hienthi").innerHTML=ketqua;
}
