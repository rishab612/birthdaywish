const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const age = urlParams.get('age');
const message = urlParams.get('message');

if (name && age && message) {
    document.getElementById('cardName').textContent = decodeURIComponent(name);
    document.getElementById('cardAge').textContent = decodeURIComponent(age);
    document.getElementById('cardMessage').textContent = decodeURIComponent(message);

    document.getElementById('nextButton').addEventListener('click', function() {
        document.getElementById('greeting').classList.add('hidden');
        document.getElementById('cakeSection').classList.remove('hidden');
        document.getElementById('birthdaySong').play();
    });

    const candlesContainer = document.getElementById('candlesContainer');
    for (let i = 0; i < 10; i++) {
        const candle = document.createElement('div');
        candle.classList.add('candle');
        candlesContainer.appendChild(candle);
    }

    const candles = document.querySelectorAll('.candles .candle');
    let candlesBlown = 0;

    candles.forEach(candle => {
        candle.addEventListener('mouseover', function() {
            if (!candle.classList.contains('blown')) {
                candle.classList.add('blown');
                candlesBlown++;
                if (candlesBlown === candles.length) {
                    setTimeout(() => {
                        document.getElementById('cakeSection').classList.add('hidden');
                        document.getElementById('finalMessage').classList.remove('hidden');
                    }, 500);
                }
            }
        });
    });
} else {
    document.body.innerHTML = '<h2>Card not found!</h2>';
}
