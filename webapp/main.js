document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    let count = 0;

    function updateCounter() {
        counterElement.textContent = count;
    }

    updateCounter();

    incrementBtn.addEventListener('click', function () {
        let x = 1; // x est le pas d'increase du compteur
        count += x;
        updateCounter();
    });

    decrementBtn.addEventListener('click', function () {
        if (count > 0) {
            let x = 1; // x est le pas de decrease du compteur
            count -= x;
            updateCounter();
        }
    });

    resetBtn.addEventListener('click', function () {
        count = 0;
        updateCounter();
    });
});
