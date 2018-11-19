import './src/less/global.less'

const script = document.createElement('script')

script.innerHTML = `
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', 
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 
    'google_translate_element');
  }
`
document.body.appendChild(script)