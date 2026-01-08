const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
//$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//Fecha a futuro mes dia año
const countdownDate = new Date('05 01, 2027 13:30:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    //$seconds.innerHTML = ('0' + seconds).slice(-2); //tira error en consola 

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $days.setAttribute('display','none');
        $hours.setAttribute('display','none');
        $minutes.setAttribute('display','none');
        //$finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);











/* simplyCountdown('#cuenta', {
    year: 2023, // required
    month: 3, // required
    day: 1, // required
    hours: 13, // Default is 0 [0-23] integer
    minutes: 30, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'día', plural: 'días' },
        hours: { singular: 'hora', plural: 'horas' },
        minutes: { singular: 'minuto', plural: 'minutos' },
        seconds: { singular: 'segundo', plural: 'segundos' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC or not - default : false
    // agregar función que llame para comprobar si se cumplió la fecha - backend
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false //cuenta hacia arriba, no es cuenta regresiva si esta en true
});

 */
