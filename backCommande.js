var choix = localStorage.getItem('commande');// ne pas oublier de vider le stockageLocal en fin de commande --> regarder code chatGTPT

// Afficher les valeurs dans la console (vous pouvez également les utiliser comme vous le souhaitez)
console.log("Valeur de commande : " + choix);

if(choix=="pizza"){
    console.log("Je suis une pizza");
}

if(choix=="burger"){
    console.log("Je suis un buger");
}


function recupererDonnees() {
    // Récupérer les données des textarea
    var appartement = document.getElementById("appartement").value;
    var nom = document.getElementById("nom").value;


    var webhook = "";
    if(choix=="pizza"){
    webhook = "https://discord.com/api/webhooks/1194079838403842118/ww_3HfPGrJBhPpZ58klRI6cvH1Qs9s3BgnVD8JQcuLXqfQGrv9snZX9KhspBbQNRQ3nu";
    console.log("Je suis une pizza");
    }if(choix=="burger"){
        webhook="https://discord.com/api/webhooks/1195032986786205766/wq6W1HQU99wQmyZqFQtdjXjnfn8zI5mICwgqFEQ2p2HA2uU1nLKYVkooVo4Mno8pqjgB";
        console.log("Je suis un burger");
    }if(choix=="pancake"){
        webhook="https://discord.com/api/webhooks/1195033083930480671/qWEy2qaWz_0Q7E3K1i9RZfzxnme6NLCTG_EGXoAVqVSxT7f5TuzDx_XPb8v_dp1fpREl";
        console.log("Je suis un pancake");
    }
    const message = `${appartement}\n ${nom}\n ${choix}\n ---------------------------------------`;

    const request = new XMLHttpRequest();
    request.open("POST",webhook);
    request.setRequestHeader('Content-type','application/json');

    const params ={
        content: message
    }
    request.send(JSON.stringify(params));
    //window.location.href = "commande_valide.html";
}

console.log("Je suis un test");

/**
var i=0;
while(i<15){
    console.log("Je suis un test");
    recupererDonnees("Quentin",i,"pizza");
    i=i+1
}
i=0;
while(i<15){
    console.log("Je suis un test");
    recupererDonnees("Quentin",i,"burger");
    i=i+1
}
i=0;
while(i<15){
    console.log("Je suis un test");
    recupererDonnees("Quentin",i,"pancake");
    i=i+1
}

*/
