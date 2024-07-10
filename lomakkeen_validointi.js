
let form = document.getElementById("lomake");                                   
let error = document.getElementById("error");

document.getElementById("submit", function(event) {
    event.preventDefault();
});

function vahvistalomake(event) {

    let tunnus = document.getElementById("username").value;
    let salasana = document.getElementById("password").value;
    let nimi = document.getElementById("name").value;
    let osoite = document.getElementById("address").value;
    let postinro = document.getElementById("postnumber").value;
    let email = document.getElementById("email").value;
    let maa = document.getElementById("country").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let kieli = document.querySelector('input[name="language"]:checked');
    let pattern = /^(?=.*\d)(?=.*[!@£$€&%#])(?=.*[A-Z]).{6,}$/;

    // Tyhjennetään mahdolliset virheilmoitukset
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("postnumError").innerText = "";


    // Tarkistetaan, että kaikki kentät on täytetty
    if (tunnus === "" || salasana === "" || nimi === "" || osoite === "" || postinro === "" || email === "" || maa === "" || !gender || !kieli) {
        error.innerText = "* Täytä kaikki pakolliset kentät";
        console.log("Virheellinen lomake");
        error.style.color = "red";
        return false;
    }

    // Tunnus validointi
    if (tunnus.length < 6) {
        error.innerText = "* Tarkista lomake";
        console.log("Tunnuksen validointi epäonnistui");
        document.getElementById("usernameError").innerText = "* Tunnuksen pituus on oltava vähintään 6 merkkiä";
        error.style.color = "red";
        return false;
    }

    // Salasanan validointi
    if (!pattern.test(salasana)) {
        error.innerText = "* Tarkista lomake";
        console.log("Salasanan validointi epäonnistui");
        document.getElementById("passwordError").innerText = "* Salasanan pituus on oltava vähintään 6 merkkiä ja pitää sisällään vähintään yhden numeron, erikoismerkin ja ison kirjaimen";
        error.style.color = "red";
        return false;
    }

    // Postinumeron validointi

    if (postinro.length !== 5) {
        error.innerText = "* Tarkista lomake";
        console.log("Postinumeron validointi epäonnistui");
        error.style.color = "red";
        document.getElementById("postnumError").innerText = "* Tarkista postinumero";
        return false;
    }

    // Sähköpostin validointi
    if (!email.includes("@")) {
        error.innerText = "* Tarkista lomake";
        console.log("Sähköpostiosoitteen validointi epäonnistui");
        error.style.color = "red";
        document.getElementById("emailError").innerText = "* Sähköposti ei ole kelvollinen";
        return false;
    }
    // Jos kaikki kentät on täytetty oikein, lomake lähetetään
    error.innerText = "Lomake lähetetty onnistuneesti!";
    console.log("Lomake lähetetty onnistuneesti!");
    error.style.color = "green";
    return true;
}



