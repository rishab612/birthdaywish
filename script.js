document.getElementById('birthdayForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const message = document.getElementById('message').value;

    // Create an object with the form data
    const cardData = {
        name: name,
        age: age,
        message: message
    };

    // Convert the object to a string and encode it in Base64
    const encodedData = btoa(JSON.stringify(cardData));  // Base64 encoding

    // Create the link with the encoded data
    const cardLink = `${window.location.origin}/birthdaywish/card.html?data=${encodedData}`;

    document.getElementById('result').style.display = 'block';
    document.getElementById('cardLink').value = cardLink;

    // Update the WhatsApp share link
    const whatsappMessage = `Check out this awesome birthday card: ${cardLink}`;
    document.getElementById('whatsappShare').href = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
});

document.getElementById('copyLink').addEventListener('click', function () {
    const copyText = document.getElementById('cardLink');
    copyText.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});
