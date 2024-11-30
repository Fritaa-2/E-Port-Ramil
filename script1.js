// script.js

document.addEventListener('DOMContentLoaded', () => {
  const revealButton = document.getElementById('reveal-button');
  const reflectionText = document.getElementById('reflection-text');
  const feedbackInput = document.getElementById('feedback-input');
  const submitFeedback = document.getElementById('submit-feedback');
  const thankYouMessage = document.getElementById('thank-you-message');

  // Reveal reflection text
  revealButton.addEventListener('click', () => {
    reflectionText.textContent = "This quarter in ICT has been incredibly enriching. I’ve learned so much and grown in confidence with technology. Thank you, Ms. Uminga, for your guidance and support. I look forward to learning even more in the future!";
    revealButton.style.display = 'none';
  });

  // Show thank you message on feedback submission
  submitFeedback.addEventListener('click', () => {
    if (feedbackInput.value.trim()) {
      thankYouMessage.classList.remove('hidden');
      feedbackInput.value = ''; // Clear input
    } else {
      alert("Please enter your feedback before submitting.");
    }
  });
});
