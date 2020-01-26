//al click su icona send si invia un messaggio
$(document).ready(function () {
  $('.icon-send').click(function () {
    sendMessage();
  });
});
//invio messaggio anche da tastiera enter= 13
$(document).keydown(function () {
  console.log(event.which);
  if(event.keyCode == 13) {
   sendMessage();
  }
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

    $('input.send-message').val('');
  }
}

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
//ricerca nomi in lista-chat
//creare una funzione in cui prima nascondo i profili in chat e poi ricerca
function search(){
  $('.contact-list' > contact-element).hide();
  $('.contact-list > avatar').each(function(index)){
    var searchAvatar;
    var inputVal = $ ('.search-input').val();
    console.log(inputVal);
  }
}
