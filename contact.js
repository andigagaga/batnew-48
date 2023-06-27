function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if (name=="") {
        return alert("Nama Harus Di isii")
    } else if (email=="") {
        return alert("Email Harus Di isii")
    } else if(phone=="") {
        return alert("Phone Harus Di isii")
    } else if(subject=="") {
        return alert("Subject Harus Di Pilih")
    } else if(message=="") {
        return alert("Message Harus Di ISII")
    }
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let emailReceiver = "andigagaga1@gmail.com"


    let a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?, subject = ${subject},&body= Halo, perkenalkan nama saya ${name}, ${message}.silahkan hubungi saya di nomor ${phone},terima kasih`
    a.click()

    let objecter = {
        name,
        email,
        phone,
        subject,
        message,
    };
    console.log(objecter)

}