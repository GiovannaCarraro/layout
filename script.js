const colorPicker = document.querySelector('#color-picker')
const fontSelect = document.querySelector('#font-select')
const themeToggle = document.querySelector('#theme-toggle')
const articleColorPicker = document.querySelector('#article-color-picker')
const body = document.querySelector('body')
const newsArticle= document.querySelector('.news')

const loadPreferences = () => {
    // cor
};

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    // Mudar o valor da variavel do css, com o valor capturado
    document.documentElement.style.setProperty('--primary-color', color)
    // Inserir a chave
    localStorage.setItem('primaryColor', color)
    
});

articleColorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    newsArticle.forEach(article => {
        article.style.backgroundColor = color;
    });
    localStorage.setItem('articleColor', color)
});

fontSelect.addEventListener('change', (e) => {

});

themeToggle.addEventListener('click', (e) => {

});
