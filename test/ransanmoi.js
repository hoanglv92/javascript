var snack1;
var move=16;
var apple1;
function startgame() {
        myGameArea.start();
        snack1= new snack(15,15,'blue',160,160,move,0,[],1);
        apple1=new apple(320,320,'red',15,15);

}
function snack(width, height, color, x, y,dx,dy,cells,maxcells) {
    this.width = width;
    this.height = height;
    this.x = x;//toa do ran khi xuat hien theo huong x,y
    this.y = y;
    this.dx=dx;//huong di chuyen theo chieu x,y
    this.dy=dy;
    this.cells = cells;
    this.maxcells=maxcells;
    // tạo hàm update() trong hàm tạo snack() để update số liệu khi vẽ snack
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height,);

    }
    this.newPos = function() {
        // toạ độ mới của khối hình bằng toạ độ cũ cộng với chỉ số tốc độ tương ứng
        // toạ độ x mới bằng toạ độ x cũ cộng với dX
        this.x += this.dx;
        //toạ độ y mới bằng toạ độ y cũ cộng với dY
        this.y += this.dy;

    }
    this.eat=function () {
            if (this.x===apple1.x&&this.y===apple1.y){
                snack1.maxcells++;
                apple1.x = getRandomInt(0, 25) * move;

                apple1.y = getRandomInt(0, 25) * move;
            }
    }

}
//tạo con mồi
function apple(x,y,color,width,height) {
    this.x=x;
    this.y=y;
    this.color=color;
    this.width=width;
    this.height=height;
    this.update=function () {
        ctx=myGameArea.context;
        ctx.fillStyle=color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

}
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}

function updateGameArea() {
    myGameArea.clear();
    snack1.newPos();
    apple1.update();
    snack1.eat();







    // nếu phím mũi tên trái (mã ASCII = 37) được nhấn, thì speedX = -1 (dịch trái 1 điểm ảnh)
    if (myGameArea.key && myGameArea.key === 37&&snack1.dx===0) {snack1.dx = -move; snack1.dy=0}

    // nếu phím mũi tên phải (mã ASCII = 39) được nhấn, thì speedX = 1 (dịch phải 1 điểm ảnh)
    if (myGameArea.key && myGameArea.key === 39&&snack1.dx===0) {snack1.dx = move; snack1.dy=0 }

    // nếu phím mũi tên lên (mã ASCII = 38) được nhấn, thì speedY = -1 (dịch lên 1 điểm ảnh)
    if (myGameArea.key && myGameArea.key === 38&&snack1.dy===0) {snack1.dy = -move; snack1.dx=0 }

    // nếu phím mũi tên xuống (mã ASCII = 40) được nhấn, thì speedY = 1 (dịch xuống 1 điểm ảnh)
    if (myGameArea.key && myGameArea.key === 40&&snack1.dy===0) {snack1.dy = move;snack1.dx=0 }
    snack1.update();
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        // xác định độ rộng của vùng game
        this.canvas.width = 400;

        // xác định độ cao của vùng game
        this.canvas.height = 400;

        // nội dung bên trong của vùng không gian này là các thứ được vẽ từ đối tượng getContext("2d")
        this.context = this.canvas.getContext("2d");

        //Method start() tạo ra 1 <canvas> và chèn nó như childnode đầu tiên của <body>
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        // hẹn giờ để chạy hàm updateGameArea() sau mỗi 130 ms/lần
        this.interval = setInterval(updateGameArea, 130);
        // bắt sự kiện keydown (nhấn xuống) của phím key
        window.addEventListener('keydown', function (e) {
            // khi key nào đó được nhấn thì key của myGameArea = mã ASCII của phím key được nhấn
            myGameArea.key = e.keyCode;
        })
        // bắt sự kiện keyup (nhả ra) của phím key
        window.addEventListener('keyup', function (e) {
            // khi key nào đó được nhả ra sau khi nhấn thì key của myGameArea = false
            myGameArea.key = false;
        })
    },
    // hàm clear() để làm sạch canvas
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
startgame();