function twoSum(array, target) {
    const map = {};
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i]; 

        // Si le complément est présent dans le hash map, cela signifie que nous avons trouvé les deux nombres
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]; // Retourne les indices des deux nombres
        }

        // Sinon, enregistre l'élément actuel et son index dans le hash map
        map[array[i]] = i;
    }

    
    return "Erreur, aucune solution trouvée : ", []; //Retourne une liste vide si pas de solution
}



