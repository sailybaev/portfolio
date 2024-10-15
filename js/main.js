document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('todo-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('You must type something');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.innerText = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', function() {
    taskItem.remove();
  });
  taskItem.appendChild(deleteBtn);

  taskItem.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });

  document.getElementById('todo-list').appendChild(taskItem);
  taskInput.value = '';
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
  

  document.getElementById('calculate-tax-btn').addEventListener('click', function() {
    const carPrice = parseFloat(document.getElementById('car-price').value);
    let tax;

    if (carPrice > 10000) {
      tax = carPrice * 0.25;
    } else if (carPrice >= 5000) {
      tax = carPrice * 0.20;
    } else {
      tax = carPrice * 0.15;
    }

    document.getElementById('tax-result').innerText = `Tax: $${tax.toFixed(2)}`;
  });