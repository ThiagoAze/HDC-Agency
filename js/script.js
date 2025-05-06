// Função acionada quando o documento HTML estiver totalemte carregado
$(document).ready(function() {
    // Progress bar
    let containerA = document.getElementById('circleA')
    
    let circleA = new ProgressBar.Circle(containerA, { // Objeto de circulo
        color: '#64DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 1400, //1400 milisegundos de duração (1s.4)
        from: {color:'#aaa'}, to: {color:'#64DAF9'}, //Começa com uma cor e termina com outra 
        step: function(state, circle){  //Animação do circulo
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 60) //número final
            circle.setText(value)
        }
    })

    let containerB = document.getElementById('circleB')
    
    let circleB = new ProgressBar.Circle(containerB, { // Objeto de circulo
        color: '#64DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 1600, //1400 milisegundos de duração (1s.4)
        from: {color:'#aaa'}, to: {color:'#64DAF9'}, //Começa com uma cor e termina com outra 
        step: function(state, circle){  //Animação do circulo
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 254) //número final
            circle.setText(value)
        }
    })

    let containerC = document.getElementById('circleC')
    
    let circleC = new ProgressBar.Circle(containerC, { // Objeto de circulo
        color: '#64DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 2600, //1400 milisegundos de duração (1s.4)
        from: {color:'#aaa'}, to: {color:'#64DAF9'}, //Começa com uma cor e termina com outra 
        step: function(state, circle){  //Animação do circulo
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 32) //número final
            circle.setText(value)
        }
    })

    let containerD = document.getElementById('circleD')
    
    let circleD = new ProgressBar.Circle(containerD, { // Objeto de circulo
        color: '#64DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 2200, //1400 milisegundos de duração (1s.4)
        from: {color:'#aaa'}, to: {color:'#64DAF9'}, //Começa com uma cor e termina com outra 
        step: function(state, circle){  //Animação do circulo
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 5243) //número final
            circle.setText(value)
        }
    })

    // Iniciando o loader quando o usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset() //Pegado posição do elemento
    let stop = 0 //Para parar animação quando já chegado no elemento

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop()
        if(scroll > (dataAreaOffset.top - 500) && stop == 0){ //Se o scroll passar perto da area delimitada e não tiver stop 0
            circleA.animate(1.0)
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)

            stop = 1; //Animação terminada
        }
    })


    // Parallax
    setTimeout(function() { //Carregar todas as imagens primeiro
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'})
    }, 250)
    

    // Filtro do portfólio
    $('.filter-btn').on('click', function(){
        let type = $(this).attr('id') //Pegando o id do botão clicado
        let boxes = $('.project-box') //Pegando todos os boxes

        $('.main-btn').removeClass('active') //Removendo o active do botão anterior
        $(this).addClass('active') //Adicionando o active ao botão clicado

        if(type == 'dsg-btn'){ //Verificando qual botão foi clicado
            boxes.fadeOut('slow') //Escondendo todos os boxes lentamente
            $('.dsg').fadeIn() //Mostrando apenas os boxes com a class dsg
        }
        else if(type == 'dev-btn'){
            boxes.fadeOut('slow') 
            $('.dev').fadeIn()
        }
         else if(type == 'seo-btn'){
            boxes.fadeOut('slow')
            $('.seo').fadeIn()
        }
        else{
            $(boxes).fadeIn(); //Mostrando todos os boxes
        }

        /*
        // Formato utilizado no curso
        if(type == 'dsg-btn'){
            eachBox('dsg', boxes)
        } else if(type == 'dev-btn'){
            eachBox('dev', boxes)
        } else if(type == 'seo-btn'){
            eachBox('seo', boxes)
        } else {
            eachBox('all-btn', boxes)
        } 
        */   
    })

    /*
    // Formato utilizado no curso
    function eachBox(type, boxes){
        if(type == 'all-btn'){ //Se o tipo do botão for todos mostrará todas as boxes
            $(boxes).fadeIn();
        } else{ //Se nao, para cada box
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){ //Se a box nao tiver a class do botão clicado
                    $(this).fadeOut('slow') //Esconda a box
                }
                else{ //Se nao, mostre a box
                    $(this).fadeIn()
                }
            })
        }
    }
    */

    // Scroll para seções
    let navBtn = $('.nav-item') //Pegando os botões da barra de navegação
    
    // Pegando as seções
    let bannerSection = $('#mainSlider')
    let aboutSection = $('#about-area')
    let serviceSection = $('#services-area')
    let teamSection = $('#team-area')
    let portfolioSection = $('#portfolio-area')
    let contactSection = $('#contact-area')
    
    let scrollTo = ''; 

    $(navBtn).click(function(){
        let btnId = $(this).attr('id') //Pegando o id do botão clicado

        console.log(btnId);
        if(btnId == 'contact-menu'){
            scrollTo = contactSection
        } else if(btnId == 'portfolio-menu'){
            scrollTo = portfolioSection
        } else if(btnId == 'team-menu'){
            scrollTo = teamSection
        } else if(btnId == 'service-menu'){
            scrollTo = serviceSection
        } else if(btnId == 'about-menu'){
            scrollTo = aboutSection
        } else{
            scrollTo = bannerSection
        }
        
        //Animando o scroll
        $([document.documentElement, document.body]).animate({ 
            scrollTop: $(scrollTo).offset().top - 70 //Scroll para a seção com 70px de distancia do topo
        }, 500)
    })
})