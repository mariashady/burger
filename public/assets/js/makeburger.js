// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourBurgerBtn").on("click", function(event) {
      var id = $(this).data("id");
      var newBurgerStatus = $(this).data("newBurgerStatus");
  
      var newBurgerStatus = {
        "devoured": true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerStatus
      }).then(
        function() {
          console.log("Burger Status: ", newBurgerStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

    //Top portion should be correct




    $("#addBurgerBtn").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#addBurgerBtn").val().trim(),
        
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
   
  });
  