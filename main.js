function time(){
    var date = new Date();

    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    var dataAtual = date.toLocaleDateString('pt-BR', options);
    document.getElementById('time').innerHTML = dataAtual;

    return(dataAtual);
}

function initTime(){
    setInterval(time, 1000);
}