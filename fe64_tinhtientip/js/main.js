var tongTien=document.getElementById("txtTongTien");
var tip=document.getElementById("slPhanTramTip")
var soNguoi=document.getElementById("txtSoNguoi")
var thongBao=document.getElementById("txtThongBaoTienTip");

var tinhTien=document.getElementById("btnTinhTienTip");
tinhTien.addEventListener("click",function (event) {
    event.preventDefault();
    let tongTienNumber=parseInt(tongTien.value);
    let tipNumber=parseInt(tip.value)/100;
    let soNguoiNum=parseInt(soNguoi.value);
    let money=tongTienNumber*tipNumber/soNguoiNum;
    thongBao.style.display="inline";
    thongBao.innerHTML=`TIP AMOUNT $ ${money} mỗi người`;
});