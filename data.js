var question = [
    {
        "texte": "Que signifie l’ONF?",
        "reponse": "L’office nationale des forêts",
    },
    {
        "texte": "Complétez la légende",
        "img": "decomposeur-question.png",
        "reponse": "décomposeur",
        "reponseImg": "decomposeur.png"
    },
    {
        "texte": "Quel type de peuplement peut on trouver en forêt ?",
        "reponse": "190 essences de bois,de nombreuses espèces d’oiseaux, d’invertébrés et de mammifères, des champignons etc"
    },
    {
        "texte":  "indiquer quels sont les services rendus à l'humanité par les écosystèmes forestiers de.. <br> approvisionnement <br> régulation <br> culture",
        "reponse": "approvisionnement :bois, biens forestiers (substances naturelles et herbes aromatiques) <br> régulation: protection contre aléas naturel et stockage du carbone (atténuation réchauffement clim), formation et stabilisation des sols <br> culture : activités de recherche scientifique ou chasse"
        
    },
    {
        "texte": "Qu'est ce qu’une forêt? Combien y a t il d'espèce d'arbre en france?",
        "reponse": "Un écosystème dont la biotope est constitué d’arbre et il y a 138 espèce recensée 70% de feuillus 30% de résineux"
    },
    {
        "texte": "Completez le texte à trous.",
        "img": "texte_a_trous.png",
        "reponse": "terres cultivables, bateaux, charbon de bois, 10 millions, 1966, déprise agricole"
    },
    {
        "texte": "Pourquoi la répartition de la végétation est différente en fonction du versant de la montagne sur lequel ils se trouvent?",
        "reponse": "La répartition de la végétation est différente car plus un versant est orienté sud plus la végétation est exposée au soleil ce qui lui permet de créer plus d'oxygène et donc de pousser plus haut car l'oxygène manque à une altitude plus élevée. De plus l'atmosphère est plus sèche ce qui permet au arbre ayant besoin de moins d’humide de pousser."
    },
    {
        "texte": "Quel est le pourcentage de forêts sur le sol français actuellement?",
        "reponse": "~33%"
    },
    {
        "texte": "citer des exemples de… <br> compétition <br> prédation <br> parasitisme <br> symbiose",
        "reponse": "prédation:La pyrale du buis <br> parasitisme chancre du châtaignier (champignon) <br> symbiose: lichen (entre une algue et un champignon)Le parasitisme entre les être vivant est le fait qu’une espèce vit au dépend d’une autre espèce : l'hôte. le lierre grimpant est un parasite car il a besoin de l’arbre sur lequel il est pour survivre"
    },
    {
        "texte": "De quoi sont constitués les écosystèmes?",
        "reponse": "Ils sont constitués par des communautés d'être vivant interagissant au sein de leur milieu de vie."
    },
    {
        "texte": "Quel est le rôle de l’ONF?",
        "reponse": "L’ONF assure la surveillance et la protection des forêts publiques et œuvre pour la protection des différentes espèces forestières mais ils permettent aussi de fournir du bois à la société en choisissant quel arbre est néfaste au développement de la forêt et en les faisant abattre"
    },
]

for (i in question) {
    question[i].asked = false
    question[i].correct = false
}