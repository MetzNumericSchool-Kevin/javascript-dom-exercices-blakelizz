// ---- Quel est le titre de la boutique ----

//--- stockage du H1 dans une constante
const h1_element = document.querySelector("h1");
// console.log(h1_element);

//--- Récupérer le texte contenu
h1_element.textContent = "Boutique d'Archibald le Sorcier de pacotille 🧙‍♂️";
// console.log(h1_element.textContent);


// ---- Des inforamtions manquent ! ----

//--- Récupérer le noeud HTML, stocke le p dans une constante
const description_element = document.querySelector("#description_boutique > p");

//--- Créer une nouvelle const
const new_description_element = document.createElement("p");
//--- Ajoute le paragraphe à la div
new_description_element.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";
//--- Push du nouveau paragraphe
description_element.appendChild(new_description_element);


// ---- Roger, enfoiré ! ----

//Récupération du noeud 
// const text_indesirable_element = document.querySelector(" #blague_de_roger_le_sorcier");

// text_indesirable_element.remove();


// ---- Archibald n'est pas là, appelons le ! ----

const call_archibald_element = document.querySelector("#call_archibald");

call_archibald_element.addEventListener("click", function (event){
    alert("🧙‍♂️ J'arrive, j'arrive Aventurier !");
});


// ---- Faisons un peu de magie 🪄 ----

const bouton_change_element = document.querySelectorAll("#boites_magique .boite");

//Changer le bg du premier carré -> ROUGE

const change_rouge_element = document.querySelector("#btn_change_red");

change_rouge_element.addEventListener("click", function (event){
    bouton_change_element[0].style.backgroundColor = "red"; 
});

//Changer le bg des 2 premiers carré -> BLEU

const change_bleu_element = document.querySelector("#btn_change_blue");

change_bleu_element.addEventListener("click", function (event){
    bouton_change_element[0].style.backgroundColor = "blue"; 
    bouton_change_element[1].style.backgroundColor = "blue"; 
});

//Changer le bg de tous les carrés -> VERT

const change_vert_element = document.querySelector("#btn_change_green");

change_vert_element.addEventListener("click", function (event){
    bouton_change_element.forEach(function(boite) {
        boite.style.backgroundColor = "green";
    });
});


// ---- Aventurier, voici ma boutique ! ----

