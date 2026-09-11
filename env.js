// Environment Configuration for Live GitHub Pages Deployment
window.ENV = window.ENV || {};

// Runtime key initialization for live browser execution
try {
  const _k = 'QVEuQWI4Uk42TFdfZFZHZ2JHYnQzanIxOURUQ0ZaZExwTGdwZmpPVFZnRWMzaEtFMlpfZXc=';
  window.ENV.GEMINI_API_KEY = typeof atob === 'function' ? atob(_k) : '';
} catch (e) {
  window.ENV.GEMINI_API_KEY = '';
}
