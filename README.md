# praktikum_5_web-javascript



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="2.css">

</head>
<body background="alam.png">
    <div class="vertical-container">
        <h1>form validasi</h1>

        <form id="myForm" onsubmit="return validateForm()">
           <label for="nama">Nama :</label>
            <input type="text" id="nama" name="nama"><br><br>

            <label for="kelas">Kelas :</label>
            <input type="text" id="Kelas" name="Kelas">

            
            <input type="submit" value="submit">
</form>
    </div>
    <script>

       function validateForm(){
        var nama = document.getElementById("nama").value;
        var kelas = document.getElementById("kelas").value;
       }

       if(nama.trim() == ""){
        alert('nama harus diisi')
        return false;
       }

       if(email.trim() == ""){
        alert("email harus diisi");
        return false;
       }

       if(NIM.trim() ==""){
        alert("nim harus diisi")
        return false;
       }


    </script>
    
</body>
</html>
