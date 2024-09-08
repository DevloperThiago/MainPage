const langSelect = document.querySelector('.language')


function changeLanguage() {
    const langSelect = document.querySelector('.language')

    const mainLink = document.querySelector('#main-link')
    const projectsLink = document.querySelector('#projects-link')
    const contactLink = document.querySelector('#contacts-link')
    
    const mobileMainLink = document.querySelector('#mobile-main-link')
    const mobileProjectsLink = document.querySelector('#mobile-projects-link')
    const mobileContactLink = document.querySelector('#mobile-contacts-link')

    const firstP = document.querySelector('.first-p')
    const subParagraph = document.querySelector('.sub-paragraph')
    const mainP = document.querySelector('.main-p')
    const mainButton = document.querySelector('.main-button')
    const enOption = document.querySelector('.english')
    const ptOption = document.querySelector('.portuguese')

    if(langSelect.value === 'english') {
        mainLink.innerHTML = `<span>#1.</span> Main`
        projectsLink.innerHTML = `<span>#2.</span> Projects`
        contactLink.innerHTML = `<span>#3.</span> Contact`

        mobileMainLink.innerHTML = `<span>#1.</span> Main`
        mobileProjectsLink.innerHTML = `<span>#2.</span> Projects`
        mobileContactLink.innerHTML = `<span>#3.</span> Contact`

        firstP.innerHTML = 'Hi, my name is'
        subParagraph.innerHTML = 'and i create sites'
        mainP.innerHTML = "I'm a Web Developer, 18 years old and i am specializing in Website and Software development."
        mainButton.innerHTML = 'Check out my Projects!'
        enOption.innerHTML = 'English'
        ptOption.innerHTML = 'Portuguese'
    }

    if(langSelect.value === 'portuguese') {
        mainLink.innerHTML = `<span>#1.</span> Menu`
        projectsLink.innerHTML = `<span>#2.</span> Projetos`
        contactLink.innerHTML = `<span>#3.</span> Contato`

        mobileMainLink.innerHTML = `<span>#1.</span> Menu`
        mobileProjectsLink.innerHTML = `<span>#2.</span> Projetos`
        mobileContactLink.innerHTML = `<span>#3.</span> Contato`

        firstP.innerHTML = 'Olá, meu nome é'
        subParagraph.innerHTML = 'e eu crio websites.'
        mainP.innerHTML = 'Sou um Desenvolvedor Web, tenho 18 anos e estou me especializando em desenvolvimento de Websites e Softwares.'
        mainButton.innerHTML = 'Veja meus projetos!'
        enOption.innerHTML = 'Inglês'
        ptOption.innerHTML = 'Português'
    } 
    
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = 'assets/menu_white_36dp.png'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'assets/close_white_36dp.png'
    }
}

language.addEventListener('change', changeLanguage)