//al click su icona send si invia un messaggio
$(document).ready(function () {
  $('.icon-send').click(function () {
    sendMessage();
  });

  $('.send-message').keypress(function(event) {
    if(event.which == 13) {
      sendMessage();
    }
  });
//funzione che cerca i nomi nella chatlist mediante pressione dei pulsanti(keyup)
  $('.contact-search input').keyup(function () {

    var text = $('.contact-search input').val().toLowerCase();
//variabile in cui salvo il testo immesso e con toLowerCase trasformo tutti in minuscolo
    $('.contact-element').each(function () {
      var contactName = $(this).find('.contact-name').text().toLowerCase();
  //condizione in cui verifichiamo se il testo inserito è presente nei nomi della chat
      if(contactName.includes(text) == true) {
        // console.log('incluso');
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});

//funzione in cui se il messaggio ha una lunghezza !=0 si clona
function sendMessage() {
  var textMessage = $('input.send-message').val();

  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);

    newMessage.find('.message-text').text(textMessage);
//variabili per inserimento ora esatta
    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    newMessage.find('.message-time').text(time);
    newMessage.addClass('sent');
    $('.col-right-messages').append(newMessage);
    $('.col-right-message.active').append(newMessage);
    //con setTimeout richiamo la funzione e dopo 2 s parte messaggio automatico
    setTimeout(sendResponse, 2000);
    $('input.send-message').val('');

  }
}

//funzione che invia un messaggio automatico come risposta
function sendResponse() {
  var messageResponse = $('.template .message').clone();
  messageResponse.find('.message-text').text('ok');
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;
  messageResponse.find('.message-time').text(time);
  messageResponse.addClass('received');
  $('.col-right-messages.active').append(messageResponse);
}

//funzione che aggiunge 0
function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
