
 
const passwordInput = document.getElementById('newPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordMessage = document.getElementById('passwordMessage');
const confirmMessage = document.getElementById('confirmMessage');

// Check password strength
passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;

  // Example: Check if the password has at least 8 characters
  if (password.length < 8) {
    passwordMessage.style.color='red';
    passwordMessage.textContent = "Password must be at least 8 characters long.";
  } else {
    passwordMessage.style.color = 'green';
    passwordMessage.textContent = "strong ";
  }
});

// Check if passwords match
confirmPasswordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    confirmMessage.style.color='green';
    confirmMessage.textContent = "verified";
    
  } else {
    confirmMessage.style.color='red';
    confirmMessage.textContent = "Passwords do not match.";
    
  }
});
