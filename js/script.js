//al click su icona send si invia un messaggio
$(document).ready(function () {
  $('.icon-send').click(function () {
    sendMessage();
  });
});

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
