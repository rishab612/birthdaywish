document.getElementById('birthdayForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const message = document.getElementById('message').value;

    const cardLink = `${window.location.origin}/birthdaywish/card.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&message=${encodeURIComponent(message)}`;

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
