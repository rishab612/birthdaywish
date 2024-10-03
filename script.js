document.getElementById('birthdayForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const message = document.getElementById('message').value;

    // Encode the data to Base64
    const cardData = { name, age, message };
    const encodedData = btoa(JSON.stringify(cardData));  // Base64 encoding

    const cardLink = `${window.location.origin}/birthdaywish/card.html?data=${encodedData}`;

    document.getElementById('result').style.display = 'block';
    document.getElementById('cardLink').value = cardLink;

    const whatsappMessage = `Check out this awesome birthday card: ${cardLink}`;
    document.getElementById('whatsappShare').href = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
});

document.getElementById('copyLink').addEventListener('click', function () {
    const copyText = document.getElementById('cardLink');
    copyText.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});
