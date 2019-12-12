function Apple(khoiluong,) {
    this.KL=khoiluong;
    this.gettao=function () {
        return this.KL
    }

};
let tao=new Apple(10,);
document.write("Khối lượng táo :"+tao.KL+"<br>");

function Human(name,gt,klg,noi) {
this.Name=name;
this.Gt=gt;
this.Klg=klg;
this.Noi=noi;
this.getKLG=function () {
    return this.Klg;
};
    this.setKLG=function (klg) {
        this.Klg=klg;
    };





};
let Adam=new Human('adam','nam',60,'xin chào mọi người, tôi là Adam!');


function aDamEat(){
    if (tao.KL>0){
        tao.KL--;
        Adam.Klg++;
        alert("số táo còn:"+tao.gettao()+"cân nặng Adam:"+Adam.getKLG());
    }else if (tao.KL==0){
        alert("đã ăn hết táo");
    }


}
function eVaEat(){
    if (tao.KL>0){
        tao.KL--;
        Eva.Klg++;
        alert("số táo còn:"+tao.gettao()+"cân nặng Adam:"+Eva.getKLG());
    }else if (tao.KL==0){
        alert("đã ăn hết táo");
    }
}
let Eva=new Human('eva','nữ',50,'xin chào mọi người, tôi là Eva!');
