  // start jQuery wrapper function
  $(function () {


      // ========================================================
      // BUTTON CONTROL TO SHOW/HIDE THE SURVEY QUESTIONS
      // ========================================================

      // EVENT HANDLER FOR .change-status BUTTON
      $("#showquiz").on("click", function (event) {
          // use jQuery .toggle() to toggle display:none / display:block
          $("#quizbody").toggle();
          $("#bottom-bar").toggle();
      });


      // ========================================================
      // FORM INPUT VALIDATION (for NAME and PHOTO fields)
      // ========================================================

      // Capture the form inputs
      $("#submit").on("click", function (event) {

          // prevent the page from reloading on SUBMIT
          event.preventDefault();

          // Form validation
          // declare function to validate form fields
          function validateForm() {

              // set isValid's default value to be TRUE
              var isValid = true;

              // For Each element with the class of "form-control"
              $(".form-control").each(function () {

                  // if thats element input value is empty,
                  if ($(this).val() === "") {

                      // then change isValid's value to FALSE
                      // if the .each's callback is set to return FALSE,
                      // then if any item does return FALSE, 
                      // it stops the .each loop and returns FALSE.
                      isValid = false;
                  }
              });
              // if no item in the .each loop was empty, isValid remains TRUE.
              // otherwise if an item returned FALSE, then isValid is now FALSE
              return isValid;
          }; // end validateForm() function


          // ========================================================
          // SEND FORM DATA TO API-ROUTES FOR SURVEY MATCHING LOGIC
          // ========================================================

          // if the value of validateForm() is TRUE (isValid is TRUE, not FALSE)
          if (validateForm()) {

              // then create a variable of all the form's input values:
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

              // and then AJAX post the data to the friends API.
              // send the POST to domain/api/friends (handled by apiRoutes.js)
              // $.post sends the userData object as the body of the POST
              // (data) is the Response (res) data sent back by apiRoutes.js
              // to the callback function: function(data) {...}
              $.post("/api/friends", userData, function (data) {

                  // define the operation of $.post's callback function:
                  // (data) is the data returned by apiRoutes.js function

                  // put data.name into the Modal's #match-name element
                  $("#match-name").text(data.name);
                  // put data.photo into the Modal's #match-img <img> element
                  $("#match-img").attr("src", data.photo);

                  // toggle the modal to display it with match name and image
                  $("#results-modal").modal("toggle");

              });
          } else {
              // but if the value of validateForm() is FALSE, alert the user:
              alert("Please fill out all fields before submitting!");
          }
      });

  }); // end jQuery wrapper