function Rectangle(rong,dai) {
    this.rong=rong;
    this.dai=dai;
    this.getRong=function () {
        return this.rong;
    };
    this.getDai=function () {
        return this.dai;
    };
    this.dienTich=function () {
        return this.dai*this.rong;

    };
    this.chuVi=function () {
        return (this.dai+this.rong)*2;
    }
    this.ve=function (x,y) {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillRect(x, y, this.rong, this.dai);
        ctx.fillStyle = "#FF0000";
    };
};

let Rec= new Rectangle(80,160);
document.write("chiều rộng hình chữ nhật là:"+Rec.getRong());
document.write("<br>chiều dài hình chữ nhật là:"+Rec.getDai());
document.write("<br>diện tích hình chữ nhật là:"+Rec.dienTich());
document.write("<br> chu vi hình chũ nhật là: "+Rec.chuVi());
Rec.ve(0,0);
