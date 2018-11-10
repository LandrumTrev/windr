  // start jQuery wrapper function
  $(function () {

      // ========================================================

      // EVENT HANDLER FOR .change-status BUTTON
      $("#showquiz").on("click", function (event) {
          // use jQuery .toggle() to toggle display:none / display:block
          $("#quizbody").toggle();
          $("#bottom-bar").toggle();
      });

      // ========================================================

      // Capture the form inputs
      $("#submit").on("click", function (event) {
          
          // prevent the page from reloading on SUBMIT
          event.preventDefault();

          // Form validation
        //   function validateForm() {
          // var isValid = true;
          // $(".form-control").each(function () {
          //     if ($(this).val() === "") {
          //         isValid = false;
          //     }
          // });

          // $(".chosen-select").each(function () {

          //     if ($(this).val() === "") {
          //         isValid = false;
          //     }
          // });
          // return isValid;
          // }

          // If all required fields are filled
          // if (validateForm()) {
          // Create an object for the user"s data
          var userData = {
              name: $("#name").val(),
              photo: $("#photo").val(),
              scores: [
                  $('input[name=q1]:checked').val(),
                  $('input[name=q2]:checked').val(),
                  $('input[name=q3]:checked').val(),
                  $('input[name=q4]:checked').val(),
                  $('input[name=q5]:checked').val(),
                  $('input[name=q6]:checked').val(),
                  $('input[name=q7]:checked').val(),
                  $('input[name=q8]:checked').val(),
                  $('input[name=q9]:checked').val(),
                  $('input[name=q10]:checked').val()
              ]
          };

          // AJAX post the data to the friends API.
          // send the POST to domain/api/friends (handled by apiRoutes.js)
          // send the userData object as the body of the POST
          // (data) is the Response (res) data sent back by apiRoutes.js
          $.post("/api/friends", userData, function (data) {

              // (data) is data returned by apiRoutes.js function

              // put data.name into the Modal's #match-name element
              $("#match-name").text(data.name);
              // put data.photo into the Modal's #match-img <img> element
              $("#match-img").attr("src", data.photo);

              // toggle the modal to display it with match name and image
              $("#results-modal").modal("toggle");

          });
          // } else {
          // but if validateForm() above fails (if not all fields have a value)
          // alert("Please fill out all fields before submitting!");
          // }
      });

  }); // end jQuery wrapper