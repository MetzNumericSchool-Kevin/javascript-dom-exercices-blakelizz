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


// Liste de potions
const potions = [
    {
      nom: "Potion de soin",
      description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
      prix: 10,
    },
    {
      nom: "Potion de sommeil",
      description: "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
      prix: 50,
    },
  ];

const liste_potions_element = document.querySelector("#liste_potions");

const template_potion_element = document.querySelector("#template_potion");


potions.forEach(function(potions) {

    // Cloner le contenue
    const clone_template = template_potion_element.content.cloneNode(true);

    //Ajouter le titre 
    const h5_potion = clone_template.querySelector("h5");
    h5_potion.textContent = potions.nom;

    //Ajouter le prix 
    const prix_potion =  clone_template.querySelector(".prix_potion");
    prix_potion.textContent = potions.prix;

    //Ajouter la description
    const description_potion = clone_template.querySelector(".description_potion");
    description_potion.textContent = potions.description;

    //Afficher les résultats
    liste_potions_element.appendChild(clone_template);
});


// ---- Plus de potions, nous avons besoin de plus de potions ! ----