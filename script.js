document.getElementById('cadastro').addEventListener('Keypress', function(event) {

    if (!isNaN(event.key)&& event.key !== ' ') {

        event.preventDefault();

        alert('❌ Este campo aceita apenas letras!');
    }
});
