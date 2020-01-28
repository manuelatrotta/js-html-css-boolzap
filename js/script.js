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
//funzione mostra e nascondi i dropdown
$(document).on('click', '.message-options', function() {
    $(this).parent().siblings('.message-link').toggleClass('active');
    $(this).parents('.message').siblings('.message').find('.message-link').removeClass('active');
  });

  $(document).on('click', '.message-delete', function() {
      // $(this).parent().parent().parent().remove();
      $(this).parents('.message').remove();
    });

    $(document).on('click', '.contact-element', function() {
      var data = $(this).attr('data-contact');
      var selector = '.col-right-messages[data-contact="' + data + '"]';

      $('.col-right-messages').removeClass('active');
      $(selector).addClass('active');
      $('.contact-element').removeClass('active');
      $(this).addClass('active');

      var name = $(this).find('.contact-name').text();
      var time = $(this).find('.contact-time').text();
      var img = $(this).find('.avatar img').attr('src');
      $('.col-right .header .contact-active .contact-name').text(name);
      $('.col-right .header .contact-active .contact-time').text(time);
      $('.col-right .header .avatar img').attr('src', img);
    });
    // funzione scroll
  function scrollMessage() {
     // altezza della conversazione attiva
    var heightContainer = $('.col-right-messages.active').height();
    console.log(heightContainer);
    // sposto scroll del container chats
    $('.messages-wrapper').scrollTop(heightContainer);
  }
