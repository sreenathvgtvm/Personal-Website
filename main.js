$(document).ready(function(){

    $("#myForm").validate({
        rules: {
          name: {
            required: true,
            minlength: 4
          },
          email: {
            required: true,
            email: true
          },
          message: {
            required: true,
            minlength: 4
          },
        
          subject: {
            required: true
          }
        }
        //  submitHandler: function () {
        //   SubForm();
        
      })
})

  