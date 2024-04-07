var arrList = []

function themSo(){
var soN = document.querySelector("#soN").value*1
arrList.push(soN)
// console.log('soN: ', soN);

document.querySelector("#soNhap").innerHTML = arrList
}

function tinhTong(){
    var tong=0
    for(var i=0; i< arrList.length; i++){
        if(arrList[i]>0){
            tong += arrList[i]

        }
    }
    document.querySelector("#tinhTong").innerHTML = tong
}

function demSo(){
    var tong=0
    for(var i=0; i <arrList.length;i++){
        if(arrList[i]>0){
            tong++
        }
    }
    document.querySelector("#demSo").innerHTML= tong
}

function timSoNhoNhat(){
    var gtnn = arrList[0]
    for(var i=0; i< arrList.length; i++){
        if(arrList[i]<gtnn){
            gtnn=arrList[i]
        }
     
    }
document.querySelector("#timSo").innerHTML = gtnn
    
}

function timSoDuongNhoNhat(){
var SDNN = Infinity
    for(var i=0; i<arrList.length; i++){
        if(arrList[i]>0 && arrList[i] < SDNN){
SDNN = arrList[i]
        }
    }
    document.querySelector("#timSoDuongNhoNhat").innerHTML = SDNN
}

function timSoChanCuoiCung(){
var SCCC = 0
    for(var i=arrList.length-1; i>=0; i--){
        if(arrList[i] % 2 == 0){
 SCCC = arrList[i]
 break
        }

    }
    document.querySelector("#timSCCC").innerHTML = SCCC
}

function doiCho(){
  var viTri1 = document.querySelector("#VT1").value*1
  var viTri2 = document.querySelector("#VT2").value*1
 var temp = arrList[viTri1]
 arrList[viTri1] = arrList[viTri2]
  arrList[viTri2] = temp 
 document.querySelector("#doiCho").innerHTML = arrList 
}

function sapXepTangDan(){

    
        arrList.sort(function(a,b){return a-b})
       
    
    document.querySelector("#sapXep").innerHTML= arrList
}

function timSoNguyenToDauTienLogic(num){
    
    if(num <2){
        return false
    }
    for(var i=2; i <(num-1);i++){
        if(num % i == 0){
            return false
        }
    }
return true
}

function timSoNguyenToDauTien(){
    var snt=0
for(var i=0; i <arrList.length;i++){
    if(    timSoNguyenToDauTienLogic(arrList[i])){
 snt = arrList[i]
        break
    }
}
document.querySelector("#timSNT").innerHTML = snt
}
var arr1List = []
function themSoNguyen(){
    var soM = document.querySelector("#nhapSN").value*1
arr1List.push(soM)
// console.log('soN: ', soN);

var mergeList =arrList.concat(arr1List)

document.querySelector("#soNguyenNhap").innerHTML = mergeList
}

function demSoNguyen(){
    var mergeList =arrList.concat(arr1List)
    var tong=0
    for(var i=0; i<mergeList.length;i++){
        if(Number.isInteger(mergeList[i])){
            tong++
        }
    }
    document.querySelector("#demSoNguyen").innerHTML=tong
}