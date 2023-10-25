import translations from "./translations.js";

const languageSelector = document.querySelector('#lang');
languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    localStorage.setItem('lang', event.target.value);
});

window.addEventListener('DOMContentLoaded',() => { 
    const language = localStorage.getItem('lang') || 'en';
    setLanguage(language);
    const options = languageSelector.querySelectorAll('option');
    options.forEach(option => {
      option.value === language ? option.setAttribute('selected','') : option.removeAttribute('selected');
    });
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationKey];
        if (element.placeholder !== undefined) {
            element.placeholder = translations[language][translationKey];
        } else {
            element.textContent = translations[language][translationKey];
        }
    });
    document.dir = language === 'ar' ? 'rtl' : 'ltr';

    const logo = document.querySelector('.logo');
    const menu = document.querySelector('.header-area .main-nav .menu-trigger')
    const aboutH5 = document.querySelector('#about h5');
    const aboutP = document.querySelector('#about .right-text p');
    const about2H5 = document.querySelector('#about2 h5');
    const coverP = document.querySelector('#welcome .header-text .container .row');
    const aboutLiImg = document.querySelectorAll('#about2 ul li img');
    const aboutText = document.querySelectorAll('#about2 ul li .text');
    const services = document.querySelector('#services');
    const faqRow = document.querySelectorAll('#frequently-question .container .row:last-of-type div');
    const faqIcon = document.querySelectorAll('#frequently-question .container .row:last-of-type div:last-of-type .accordions article.accordion div .icon');
    const footerTxt = document.querySelector('footer .container .row div.col-lg-7.col-md-12.col-sm-12 p');

    if (language === 'ar') {
        logo.style.float = 'right';
        menu.style.left = '10px';
        aboutH5.style.textAlign = 'start';
        aboutP.style.textAlign = 'start';
        about2H5.style.textAlign = 'start';
        coverP.style.direction = 'ltr';
        aboutLiImg.forEach((img) => {
            img.style.float = 'right';
        });
        aboutText.forEach((txt) => {
            txt.style.textAlign = 'start';
            txt.style.marginRight = '80px';
        });
        services.style.direction = 'ltr';
        faqRow.forEach((div) => {
            div.style.textAlign = 'start'
        });
        faqIcon.forEach((icon) => {
            icon.style.marginLeft = '10px';
        });
        footerTxt.style.textAlign = 'start'
    } else {
        // Reset to default if not Arabic
        logo.style.float = '';
        menu.style.left = '';
        aboutH5.style.textAlign = '';
        aboutP.style.textAlign = '';
        about2H5.style.textAlign = '';
        aboutLiImg.forEach((img) => {
            img.style.float = '';
        });
        aboutText.forEach((txt) => {
            txt.style.textAlign = '';
            txt.style.marginRight = '';
        });
        services.style.direction = '';
        faqRow.forEach((div) => {
            div.style.textAlign = ''
        });
        faqRow.forEach((div) => {
            div.style.textAlign = ''
        });
        faqIcon.forEach((icon) => {
            icon.style.marginLeft = '';
        });
        footerTxt.style.textAlign = ''
    };
};

