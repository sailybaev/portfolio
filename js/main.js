document.getElementById("add-task-btn").addEventListener("click", function() {
    const input = document.getElementById("task-input").value;
    if (!input) {
      alert("You must type something");
      return;
    }

    const li = document.createElement("li");
    li.textContent = input;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("task-list").appendChild(li);
    document.getElementById("task-input").value = ""; 
  });

  function sortNumbers(order) {
    const input = document.getElementById("number-input").value;
    const numbers = input.split(",").map(Number);

    if (numbers.some(isNaN)) {
      alert("Please enter valid numbers");
      return;
    }

    numbers.sort((a, b) => order === "asc" ? a - b : b - a);
    document.getElementById("sorted-numbers").textContent = numbers.join(", ");
  }

  document.getElementById("sort-asc").addEventListener("click", function() {
    sortNumbers("asc");
  });

  document.getElementById("sort-desc").addEventListener("click", function() {
    sortNumbers("desc");
  });



  document.getElementById('add-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc-input1').value);
    const num2 = parseFloat(document.getElementById('calc-input2').value);
    document.getElementById('calc-result').innerText = `Result: ${num1 + num2}`;
  });
  
  document.getElementById('subtract-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc-input1').value);
    const num2 = parseFloat(document.getElementById('calc-input2').value);
    document.getElementById('calc-result').innerText = `Result: ${num1 - num2}`;
  });
  
  document.getElementById('multiply-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc-input1').value);
    const num2 = parseFloat(document.getElementById('calc-input2').value);
    document.getElementById('calc-result').innerText = `Result: ${num1 * num2}`;
  });
  
  document.getElementById('divide-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc-input1').value);
    const num2 = parseFloat(document.getElementById('calc-input2').value);
    if (num2 !== 0) {
      document.getElementById('calc-result').innerText = `Result: ${num1 / num2}`;
    } else {
      document.getElementById('calc-result').innerText = 'Error: Division by zero';
    }
  });



var modal = document.getElementById("contact-modal");

var btn = document.getElementById("btn-contacts");

var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('tool-select').addEventListener('change', function() {
    var selectedTool = this.value;
    var toolSections = document.getElementsByClassName('tool-section');
    
    for (var i = 0; i < toolSections.length; i++) {
      toolSections[i].style.display = 'none';
    }
    
    document.getElementById(selectedTool).style.display = 'block';
  });
  
  document.getElementById('add-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc-input1').value);
    const num2 = parseFloat(document.getElementById('calc-input2').value);
    document.getElementById('calc-result').innerText = `Result: ${num1 + num2}`;
  });
  
  document.getElementById('subtract-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc-input1').value);
    const num2 = parseFloat(document.getElementById('calc-input2').value);
    document.getElementById('calc-result').innerText = `Result: ${num1 - num2}`;
  });
  
  document.getElementById('multiply-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc-input1').value);
    const num2 = parseFloat(document.getElementById('calc-input2').value);
    document.getElementById('calc-result').innerText = `Result: ${num1 * num2}`;
  });
  
  document.getElementById('divide-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('calc-input1').value);
    const num2 = parseFloat(document.getElementById('calc-input2').value);
    if (num2 !== 0) {
      document.getElementById('calc-result').innerText = `Result: ${num1 / num2}`;
    } else {
      document.getElementById('calc-result').innerText = 'Error: Division by zero';
    }
  });

  document.getElementById('profile-photo').addEventListener('click', function() {
    const currentSrc = this.src;
    const newSrc = currentSrc.includes('alikhan3.jpeg') ? 'assets/alikhan.jpeg' : 'assets/alikhan3.jpeg';
    this.src = newSrc;
  });
  
