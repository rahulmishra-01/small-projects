const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const themeToggle = document.getElementById('theme-toggle');
let currentInput = '';

function updateDisplay() {
  display.innerText = currentInput || '0';
}

function handleInput(value) {
  if (value === 'C') {
    currentInput = '';
  } else if (value === '←') {
    currentInput = currentInput.slice(0, -1);
  } else if (value === '=') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else {
    currentInput += value;
  }
  updateDisplay();
}

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.dataset.value);
  });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (/\d/.test(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    handleInput(key);
  } else if (key === 'Enter' || key === '=') {
    e.preventDefault(); // prevent form submission if any
    handleInput('=');
  } else if (key === 'Backspace') {
    handleInput('←');
  } else if (key.toLowerCase() === 'c') {
    handleInput('C');
  }
});

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});