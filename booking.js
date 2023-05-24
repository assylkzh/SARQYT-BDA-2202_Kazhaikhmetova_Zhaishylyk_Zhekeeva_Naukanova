/*document.addEventListener("DOMContentLoaded", function() {
  var bookingForm = document.getElementById("booking-form");
  
  bookingForm.addEventListener("submit", function(event) {
  const numberInput = document.getElementById("number");
  const peopleInput = document.getElementById("people");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  
  const booking = {
    phonenumber: numberInput,
    peoplenumber: peopleInput,
    date: dateInput,
    time: timeInput
  };

  if (numberInput.value === "" || peopleInput.value === "" || dateInput.value === "" || timeInput.value === "") {
    alert("Барлық ақпаратты толтырыңыз!");
    return;
  } else {
    localStorage.setItem("number", phonenumber);
    localStorage.setItem("people", peoplenumber);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    alert("Table booked");
    bookingForm.reset();
    return;
  }
  });
});*/
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Get the input values from the form
      var phoneNumber = document.getElementById('number').value;
      var numberOfPeople = document.getElementById('people').value;
      var selectedDate = document.getElementById('date').value;
      var selectedTime = document.getElementById('time').value;
  
      // Check if any field is empty
      if (!phoneNumber || !numberOfPeople || !selectedDate || !selectedTime) {
        alert('Барлық ақпаратты толтырыңыз!');
        return;
      }
  
      // Create a new object with the booking details
      var booking = {
        phoneNumber: phoneNumber,
        numberOfPeople: numberOfPeople,
        selectedDate: selectedDate,
        selectedTime: selectedTime
      };
  
      // Store the booking details in localStorage
      localStorage.setItem('booking', JSON.stringify(booking));
  
      // Display success message
      alert('Бронь қойылды');
  
      // Clear the input fields
      document.getElementById('number').value = '';
      document.getElementById('people').value = '';
      document.getElementById('date').value = '';
      document.getElementById('time').placeholder="10:00";
    });
  });
  
