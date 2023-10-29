function test(){
    var val1=document.kirim.TI.value
    if(val1%2==0){
        document.kirim.T2.value='bilangan genap'

    }

    else{
        document.kirim.T2.value='bilangan ganjil'
    }


    function ubahWarnaLB(warna) {
        document.bgColor = warna;
    }

    function ubahWarnaLD (warna) {
        document.fgColor = warna;
    }
}


