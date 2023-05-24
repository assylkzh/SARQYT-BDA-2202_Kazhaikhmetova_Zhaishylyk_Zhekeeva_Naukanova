    var calendarDateInput = document.getElementById("date");

    calendarDateInput.addEventListener("change", function() {
      var selectedDate = calendarDateInput.value;
      if (selectedDate==date){
        const number = localStorage.setItem('number');
        const people = localStorage.setItem('people');
        const date = localStorage.setItem('date');
        const time = localStorage.setItem('time');
    
        // Get a reference to the table
        var table = document.getElementById("bookingTable");
    
        // Create a new row and cells
        var newRow = table.insertRow();
    
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
    
        // Add data to the cells
        cell1.innerHTML = time;
        cell2.innerHTML = number
        cell3.innerHTML = people;
      }
    });