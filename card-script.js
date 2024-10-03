// Get the encoded data from the URL 
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');

// Decode and parse the data
const cardData = JSON.parse(atob(encodedData));

// Update the card content with the data
document.getElementById('cardName').innerText = cardData.name;
document.getElementById('cardBirthdayPerson').innerText = cardData.birthdayPerson;
document.getElementById('cardAge').innerText = cardData.age;
document.getElementById('cardMessage').innerText = cardData.message;

// Apply the selected theme color and text color
const selectedColor = cardData.themeColor;
const selectedTextColor = cardData.textColor;

document.getElementById('birthdayCard').style.borderColor = selectedColor;
document.body.style.backgroundColor = lightenColor(selectedColor, 0.5); // Lighten the background for contrast

// Set text color
document.getElementById('cardName').style.color = selectedTextColor;
document.getElementById('cardBirthdayPerson').style.color = selectedTextColor;
document.getElementById('cardAge').style.color = selectedTextColor;
document.getElementById('cardMessage').style.color = selectedTextColor;

// Function to lighten the color for the background
function lightenColor(hex, percent) {
    const num = parseInt(hex.slice(1), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1);
}

// Handle the "Next" button click
document.getElementById('nextButton').addEventListener('click', function () {
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

// Handle final message display
document.getElementById('cakeSection').addEventListener('animationend', function () {
    document.getElementById('cakeSection').classList.add('hidden');
    document.getElementById('finalMessage').classList.remove('hidden');
});
