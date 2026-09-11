// Environment Configuration for Gemini AI Integration
window.ENV = window.ENV || {};

// Reads key from localStorage if updated via UI, otherwise uses configured key
window.ENV.GEMINI_API_KEY = localStorage.getItem('GEMINI_API_KEY') || 'YOUR_GEMINI_API_KEY_HERE';

window.setGeminiApiKey = function(key) {
  if (key) {
    const cleanKey = key.trim();
    localStorage.setItem('GEMINI_API_KEY', cleanKey);
    window.ENV.GEMINI_API_KEY = cleanKey;
    return true;
  }
  return false;
};
