$(".center").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay:true
});

function doSubscribe(){
  var email = $("#email-subscribe").val();
  var message = "Hei <b>"+email+"</b>. Kamu telah berhasil berlangganan. <br/>Kamu akan mendapatkan informasi menarik dari mahasaku";
  if(email.length > 0 && email.includes("@")){
    $("#exampleModal").modal({show:true});
    $("#content-subscribe").html(message);
  }else{
    $("#email-subscribe").css("border","1px solid red");
  }
}

$(document).on("input", ".numeric", function() {
  this.value = this.value.replace(/\D/g,'');
});


function doNeedHelp(){
 
    var nama = $("#helpNama").val();
    var noTelp = $("#helpPhone").val();

    if(nama.length > 0 && noTelp.length > 0){
      $("#modalHelp").modal({show:true});
    }else{
      $("#needHelpForm.needs-validation").attr('class','was-validated');
    }
}

function doCloseHelp(){
  $("#needHelpForm").trigger('reset');
  window.location.reload();
}


function doRegisterSuccess(){
 
  var nama = $("#name").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var confPassword = $("#confPassword").val();
  
  console.log(nama.length);
  if( confPassword.length > 0){
    console.log("masuk");
    $("#modalHelp").modal({show:true});
  }else{
    $("#register-form.needs-validation").attr('class','was-validated');
  }
}