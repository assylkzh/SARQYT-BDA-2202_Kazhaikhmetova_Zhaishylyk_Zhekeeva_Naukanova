document.addEventListener("DOMContentLoaded", function() {
    // Get the booking form element
    var bookingForm = document.getElementById("booking-form");
    
    // Add submit event listener to the form
    bookingForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get the input values from the form
      var numberInput = document.getElementById("number");
      var peopleInput = document.getElementById("people");
      var dateInput = document.getElementById("date");
      var timeInput = document.getElementById("time");
      
      // Check if all fields are filled
      if (numberInput.value === "" || peopleInput.value === "" || dateInput.value === "" || timeInput.value === "") {
        alert("Fill all fields");
        return;
      }
      
      // Create a new table row with the input values
      var newRow = document.createElement("tr");
      newRow.innerHTML = "<td>" + timeInput.value + "</td><td>" + numberInput.value + "</td><td>" + peopleInput.value + "</td>";
      
      // Get the table body element
      var tableBody = document.querySelector("#bookingTable tbody");
      
      // Add the new row to the table
      tableBody.appendChild(newRow);
      
      // Reset the form fields
      bookingForm.reset();
      
      // Show success message
      alert("Table booked");
    });
    
    // Get the date input element on the calendar page
    var calendarDateInput = document.getElementById("date");
    
    // Add change event listener to the date input
    calendarDateInput.addEventListener("change", function() {
      var selectedDate = calendarDateInput.value;
      // Perform any necessary operations based on the selected date, such as filtering the table rows or fetching data from a server.
      // You can modify the code here to suit your specific requirements.
    });
  });
  