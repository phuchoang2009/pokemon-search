var APIURL = "https://pokeapi.co/api/v2/pokemon";
function layThongTinPKM(PKMName) {
    var PKMAPI = APIURL + "/" + PKMName;
    var xhrThongTin = new XMLHttpRequest();
    xhrThongTin.open("GET", PKMAPI, true);// mở 1 url theo chế độ get
    xhrThongTin.send(); //gửi tín hiệu chạy url
    xhrThongTin.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var duLieuPKM = JSON.parse(this.responseText);
            return duLieuPKM;
        }
    };

}

function timKiemPKM() {
    var tenPKM = document.getElementById("input-pokemon-name").value;
    var duLieuPKM = new Promise(function (myResolve, myReject) {
        var thongTinPKM = layThongTinPKM(tenPKM);
        if (thongTinPKM) {
            myResolve(function(){
                return thongTinPKM;
            });
        }
    });
    duLieuPKM.then(
        console.log(duLieuPKM)
    );
}
