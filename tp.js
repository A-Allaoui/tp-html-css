const saisie = document.getElementsByClassName('form-control')
 const submitBtn = document.getElementById('submit')
let donnee = {}
 let infos = []
 for(let i = 0; i<saisie.length;i++){
     saisie[i].addEventListener('keyup', ()=> {
         let value = saisie[i].value
        let id = saisie[i].id
        donnee[id] = value
     })

    }

   function login (e) {
    //regex pour le courrier électronique
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
        e.preventDefault();
        for(let i = 0; i<saisie.length;i++){
            let affichErreur = document.getElementById(saisie[i].id+'-erreur');
                if (saisie[i].value === "") {
                    affichErreur.innerHTML = "<p>Ce champ est requis</p>"
                }
                if (saisie[i].id==="email" && !regexEmail.test(saisie[i].value)) {
                    affichErreur.innerHTML = "<p>veuiller saisir un email correct</p>" 
                } 
                if ((saisie[i].id === "email" && regexEmail.test(saisie[i].value)) && saisie[i].value !== ""){
                    const result = document.getElementById("result");
                    result.innerHTML = 
                   `<p>Prenom: ${donnee.prenom}</p>
                   <p>Nom: ${donnee.nom}</p>
                   <p>Email: ${donnee.email}</p>
                   <p>Message: ${donnee.message}</p>`
                   ;
                  }
        }
        infos.push(donnee);
         //resetInputs();
         const result = document.getElementById("result");
         result.innerHTML = 
           `<p>Prenom: ${donnee.prenom}</p>;
           <p>Nom: ${donnee.nom}</p>;
           <p>Email: ${donnee.email}</p>;
           <p>Message: ${donnee.message}</p>`
           ;
         console.log(infos);
        }
    submitBtn.addEventListener("click", login ); 


    function cct(){
        console.log('clicked');
        var div = document.querySelectorAll(".bloc");
        for (let i = 0; i < div.length; i++) {
            div[i].classList.toggle('fond');
        }
    }