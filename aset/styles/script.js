let user = document.getElementById("button");
let password = null;
let username = null;
user.addEventListener('click', function(){
    alert("Masukan Akun Anda !");
    while(true){
    username = prompt("Username");
    if(username == null) {
        return false;
    } else if(username == "zakaria") {
       validasiUsername();
       return false;
    } else {
        alert("Username anda tidak ditemukan !");
    }
}
});

function validasiUsername() {
     while(true){
            password = prompt("Password");
                if(password == null) {
                    return false;
                } else if(password == "123") {
                    alert("Pesan Anda Berhasil Dikirim ke Pahrurozi");
                    return false;
                } else {
                    alert("Password Salah!");
                }
        }
}