$(document).ready(function() {
  var js_user_id, js_user_email;
  // Line below included by SVR
  var validations ={
  email: [/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email address']
  };

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
    // email forced toString by SVR
    var email = ($('#reg_email').val()).toString();
    var password = $('#reg_password').val();
    var password2 = $('#reg_password2').val();

    // Line below included by Sundar to ensure passwords match and
    // a valid email id is provided
    validation = new RegExp(validations['email'][0]);
    // validate the email value against the regular expression
    if (!validation.test(email)){
        // If the validation fails then we show the custom error message
        $('#reg_messages').text(validations['email'][1]);
    } else {
        $('#reg_messages').text('');
        if(validatePass(password,password2)){
          $.ajax({
              type: "POST",
              url: "http://localhost:9292/createuser",
              data: {
                email: email,
                password: password
              },
               success:function(result,status,jqx) {
                 js_user_id = result;
                 js_email_id = email;
                 $('#user-reg').hide();
                 $('#bookspace').show();
               }
           });
        }
    }
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

  //Function created by Sundar to validate password begins
  function validatePass(password1,password2){
    if (password1===password2){
      $('#reg_messages').text("");
      return true;
    }else{
      $('#reg_messages').text("Password Mismatch!");
      return false;
    }
  };
 // validate password ends ---------------------------------
});
