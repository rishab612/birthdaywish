// Get the encoded data from the URL
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');

if (encodedData) {
    try {
        // Decode the Base64 string and parse it as JSON
        const cardData = JSON.parse(atob(encodedData));  // Base64 decoding

        if (cardData.name && cardData.age && cardData.message) {
            // Display the card data
            document.getElementById('cardName').textContent = cardData.name;
            document.getElementById('cardAge').textContent = cardData.age;
            document.getElementById('cardMessage').textContent = cardData.message;

            document.getElementById('nextButton').addEventListener('click', function() {
                document.getElementById('greeting').classList.add('hidden');
                document.getElementById('cakeSection').classList.remove('hidden');
                document.getElementById('birthdaySong').play();
            });

            // Add candles to the cake section
            const candlesContainer = document.getElementById('candlesContainer');
            for (let i = 0; i < 10; i++) {
                const candle = document.createElement('div');
                candle.classList.add('candle');
                candlesContainer.appendChild(candle);
            }

            // Handle candle blowing
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
        }
    } catch (error) {
        document.body.innerHTML = '<h2>Card not found!</h2>';
    }
} else {
    document.body.innerHTML = '<h2>Card not found!</h2>';
}
