function Temperature(c) {
    this.doC=c;

    this.getDoC=function () {
        return this.doC;
    }
    this.changeF=function () {
        return this.doC*1.8+32;
    }
    this.changeK=function () {
        return this.doC+273.15;
    }


}
let tem=new Temperature(25);
document.write("số độ C là: "+tem.getDoC());
document.write("<br> Chuyển đổi sang độ F: "+tem.changeF());
document.write("<br> chuyển đổi sang độ K: "+tem.changeK());
