$(document).ready(function() {
  var js_user_id, js_user_email;

  $('#user-sign').hide();
  $('#addspace').hide();
  $('#bookspace').hide();

  $('#book_add_space_btn').on('click', function() {
    $(location).attr('href','/spaces/new');
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

  $('#listing_submit').on('click', function() {
    var property_name = $('#property_name').val();
    var property_description = $('#property_description').val();
    var price_per_night = $('#price_per_night').val();

    $.ajax({
	      type: "POST",
	      url: "/spaces/add",
	      data: {
	        property_name: property_name,
	        property_description: property_description,
          price_per_night: price_per_night
	       }
    });



  });

});