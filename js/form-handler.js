// Form Handler for Apex Studios Contact Form
const API_URL = 'http://localhost:5000/api/submit-contact';

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const successText = document.getElementById('successText');
const errorText = document.getElementById('errorText');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Hide previous messages
  successMessage.classList.add('hidden');
  errorMessage.classList.add('hidden');

  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  // Get form data
  const formData = {
    name: contactForm.querySelector('input[name="name"]').value.trim(),
    email: contactForm.querySelector('input[name="email"]').value.trim(),
    phone: contactForm.querySelector('input[name="phone"]').value.trim(),
    company: contactForm.querySelector('input[name="company"]').value.trim(),
    service: contactForm.querySelector('select[name="service"]').value,
    budget: contactForm.querySelector('select[name="budget"]').value,
    timeline: contactForm.querySelector('select[name="timeline"]').value,
    vision: contactForm.querySelector('textarea[name="vision"]').value.trim()
  };

  // Validate required fields
  if (!formData.name || !formData.email || !formData.service || !formData.vision) {
    showError('Please fill in all required fields (marked with *)');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Proposal';
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    showError('Please enter a valid email address');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Proposal';
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      showSuccess(data.message);
      contactForm.reset();
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth' });
    } else {
      showError(data.error || 'An error occurred. Please try again.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    showError('Failed to submit. Make sure the backend server is running on http://localhost:5000');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Proposal';
  }
});

function showSuccess(message) {
  successText.textContent = message;
  successMessage.classList.remove('hidden');
  errorMessage.classList.add('hidden');
}

function showError(message) {
  errorText.textContent = message;
  errorMessage.classList.remove('hidden');
  successMessage.classList.add('hidden');
}

console.log('✅ Form handler loaded. Backend API: ' + API_URL);
