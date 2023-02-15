const headerModule = () => {
    const header = document.querySelector('.header')

function onWindowScroll ()  {
        if(window.scrollY > 20) {
            header.style.backgroundColor = '#0c0d14'
        } else {
            header.style.backgroundColor = 'transparent'
        }
    }


function setListeners() {
    window.addEventListener('scroll', onWindowScroll) 
}

function init() {
    setListeners()
}

return  {
    init
}   
}
export default headerModule
