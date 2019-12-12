function mobile(xempin,guitinnhan,trangthai,sacpin,xemtinnhan,batdt,tatdt) {
this.XEMPIN=xempin;
this.TINNHAN=guitinnhan;
this.TRANGTHAI=trangthai;
this.SACPIN=sacpin;
this.XEMTINNHAN=xemtinnhan;
this.BATDT=batdt;
this.TATDT=tatdt;

this.getPin=function () {
    return this.XEMPIN;
}
this.setPin=function (pin) {
     this.Pin=pin;
}
this.getStatus=function () {
    return this.TRANGTHAI
}
this.setStatus=function (trangthai) {
    this.trangthai=trangthai;
}
this.getViewSms=function () {
    return this.XEMTINNHAN
}
this.setViewSms=function (sms) {
    this.sms=sms;
}
this.setON=function (on) {
    this.on=on;
}
this.getOn=function () {
    return this.BATDT;
}
this.setOff=function (off) {
    this.off=off;
}
this.getOff=function () {
    return this.TATDT;
}
this.getCharging=function () {
    return this.SACPIN
}
this.setChaging=function (charging) {
    this.charging=charging;
}
this.setSendSMS=function (sendsms) {
    this.sendSMS=sendsms;
    function guitinnhan() {

    }
}
this.getSendSms=function () {
    return this.TINNHAN;
}


};
let nokia=new mobile();
nokia.setPin(100);
let iphone=new mobile();
iphone.setPin(100);
function f() {
    
}