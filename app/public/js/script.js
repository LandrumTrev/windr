  // start jQuery wrapper function
  $(function () {

      // ========================================================

      // EVENT HANDLER FOR .change-status BUTTON
      $("#showquiz").on("click", function (event) {
          // use jQuery .toggle() to toggle display:none / display:block
          $("#quizbody").toggle();
      });



  }); // end jQuery wrapper