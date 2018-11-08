$(document).ready(function() {
  var js_user_id, js_user_email;

  murphy = new Bnb

  $('#user-sign').hide();
  $('#addspace').hide();
  $('#bookspace').hide();
  document.title = 'Sign up | Murphy BnB';

  $('#book_add_space_btn').on('click', function() {
    $('#bookspace').hide();
    $('#addspace').show();
    document.title = 'List a space | Murphy BnB';
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
           document.title = 'Book a space | Murphy BnB';
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
	      url: "http://localhost:9292/createspaces",
	      data: {
	        owner_id: 3,
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
          document.title = 'Book a space | Murphy BnB';
          getData()
         // $(location).attr('href','/spaces');
        }
    });
  });

  function getData () {
    $.getJSON({
	      type: "get",
	      url: "http://localhost:9292/spaces/get",
        success:function(result) {
          // console.log(result);
          $.each(result,function(key,val){
            // console.log(val)
            murphy.saveSpaces(val)
            // console.log(murphy.getSpaces())
// new Space(val['space_name'], val['space_desc'], val['price_per_night']  )
      // console.log(val['space_name'],val['space_desc'], val['price_per_night']);
		});

        }
    });
  }

});
