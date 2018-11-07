$(document).ready(function() {
  var js_user_id, js_user_email;

  $('#user-sign').hide();
  $('#addspace').hide();
  $('#bookspace').hide();

  $('#book_add_space_btn').on('click', function() {
    $('#bookspace').hide();
    $('#addspace').show();
  })

  $('#header-log-in').on('click', function() {
    $('#user-reg').hide();
    $('#user-sign').show();
  })

  $('#signUp_submit').on('click', function() {
    var email = $('#reg_email').val();
    var password = $('#reg_password').val();
    var password2 = $('#reg_password2').val();

    $.ajax({
	      type: "POST",
	      url: "http://localhost:9292/createuser",
	      data: {
	        email: email,
	        password: password
        },
         success:function(result,status,jqx) {
           //console.log(result);
           js_user_id = result;
           js_email_id = email;
           $('#user-reg').hide();
           $('#bookspace').show();
          // $(location).attr('href','/spaces');
         }
    });
  });

  // DB/ZH added signin_submit section below
  $('#signin_submit').on('click', function() {
    var email = $('#sign_email').val();
    var password = $('#sign_password').val();

    $.ajax({
        type: "POST",
        url: "http://localhost:9292/signin_user",
        data: {
          email: email,
          password: password
        },
         success:function(result,status,jqx) {
           //console.log(result);
           js_user_id = result;
           js_email_id = email;
           $('#user-sign').hide();
           $('#bookspace').show();
         }
    });
  });

  $('#listing_submit').on('click', function() {
    var property_name = $('#property_name').val();
    var property_description = $('#property_description').val();
    var price_per_night = $('#price_per_night').val();

    $.ajax({
	      type: "POST",
	      url: "http://localhost:9292/createspaces",
	      data: {
	        owner_id: 18,
          property_name: property_name,
	        property_description: property_description,
          price_per_night: price_per_night
        },
        success:function(result,status,jqx) {
          //console.log(result);
          //js_user_id = result;
          //js_email_id = email;
          $('#addspace').hide();
          $('#bookspace').show();
         // $(location).attr('href','/spaces');
        }
    });
  });

});
