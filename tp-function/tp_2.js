//Etape 1 :

// 1. Créez un objet MAP nommé utilisateurs pour stocker les utilisateurs et leurs soldes. La clé de la MAP sera le nom de l'utilisateur et la valeur sera la solde initial.

let utilisateur = new Map();
utilisateur.set("joe", 100);
utilisateur.set("bill", 300);
utilisateur.set("zoe", 540);

//2.Créez une fonction nommée creerUtilisateur qui prend le nom de l'utilisateur et le solde initial en tant que paramètres et ajoute cet utlisateur à l'objet Map.


// 2. Créez une fonction nommée creerUtilisateur qui prend le nom de l'utilisateur et le solde initial en tant que paramètres et ajoute cet utilisateur à l'objet Map.
function creerUtilisateur(nomUtilisateur, soldeInitial) {
    utilisateur.set(nomUtilisateur, soldeInitial);
}


//Appelez la fonction creerUtilisateur pour ajouter celui-ci
creerUtilisateur("Josh", 2200);


//Afficher les clées de l'objet MAP
let mesCles = Array.from(utilisateur.keys());
console.log(mesCles);


//Etape 2 : Opérations sur les comptes

//1.Créez une fonction nommée crediterCompte qui prend le nom de l'utilisateur et un montant à créditer en paramètres. Cette fonction devrait mettre à jour le solde de l'utilisateur dans l'objet MAP


// Créez une fonction nommée crediterCompte qui prend le nom de l'utilisateur et un montant à créditer en paramètres.
// Cette fonction devrait mettre à jour le solde de l'utilisateur dans l'objet Map.

function crediterCompte(nomUtilisateur, montantCrediter) {
    // Vérifiez si l'utilisateur existe déjà dans la Map
    if (utilisateur.has(nomUtilisateur)) {
        // Récupérez le solde actuel de l'utilisateur
        let soldeActuel = utilisateur.get(nomUtilisateur);

        // Ajoutez le montant à créditer au solde actuel
        utilisateur.set(nomUtilisateur, soldeActuel + montantCrediter);
    }
}

// Appelez la fonction crediterCompte pour créditer le compte de "Josh" de 350
crediterCompte("Josh", 350);

console.log(utilisateur);

//2.Créez une fonction nommée debiterCompte qui prend le nom utilisateur et un montant à débiter en paramètres, vérifier si le solde est suffisant pour le débit.

function debiterCompte(nomUtilisateur, montantDebiter) {
    // Vérifiez si l'utilisateur existe déjà dans la Map
    if (utilisateur.has(nomUtilisateur)) {
        // Récupérez le solde actuel de l'utilisateur
        let soldeActuel = utilisateur.get(nomUtilisateur);

        // Ajoutez le montant à créditer au solde actuel
        utilisateur.set(nomUtilisateur, soldeActuel - montantDebiter);
    }
}

debiterCompte("zoe", 65);

// Affichez les clés et les valeurs de la Map

console.log(utilisateur);

//3.Créer une fonction nommée transfererArgent qui prend les noms du débiteur, bénificiaire et un montant à transferer en paramètres. Cette fonction devrait transférer de l'argent du débiteur au bénéficiaire en mettant à jour les soldes correspondants dans l'objet Map.


function transfererArgent(nomCompteDebiter, nomCompteCrediter, montantTransferer) {
    //Verifier si l'utilisateur existe dans la Map
    if (utilisateur.has(nomCompteDebiter) && utilisateur.has(nomCompteCrediter)) {
        // Récupérez le solde actuel de l'utilisateur
        let soldeActuelDeb = utilisateur.get(nomCompteDebiter) - montantTransferer;
        let soldeActuelCre = utilisateur.get(nomCompteCrediter) + montantTransferer;

        //Afficher le montant transféré
        utilisateur.set(nomCompteDebiter, soldeActuelDeb);
        utilisateur.set(nomCompteCrediter, soldeActuelCre);
    }
    else {
        console.log("Un des comptes n'éxiste pas");
    }
}


transfererArgent("joe", "zoe", 65);

// Affichez les clés et les valeurs de la Map

console.log(utilisateur);


//Etape 3 : Affichage des informations 
//1. Créez une fonction nommée afficherInfoUtilisateur qui prend le nom de l'utilisateur en tant que paramètre. Cette fonction devrait afficher le nom de l'utilisateur et son solde à partir de l'objet Map utilisateurs.

function afficherInfoUtilisateur(nomUtilisateurPresent) {
    //Verifier si l'utilisateur existe dans la Map
    if (utilisateur.has(nomUtilisateurPresent)); {
        // Récupérez le solde actuel de l'utilisateur
        let soldeActuel = utilisateur.get(nomUtilisateurPresent);
        console.log("Nom d'utilisateur:", nomUtilisateurPresent, "Solde:", soldeActuel);
    }

}

afficherInfoUtilisateur("bill");

//Etape 4 : Fonction de rappel pour les transactions 

//2.Créez une fonction nommée effectuerTtransaction qui prend le nom de l'utilisateur, un montant et une fonction de rappel (callback) en tant que paramètres.

