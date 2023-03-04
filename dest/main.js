function projectall(){
    function projectAll(){
        let projectallicon = document.querySelectorAll('.project__all .icon')
        let projectall = document.querySelectorAll('.project__all')
        let projectbook = document.querySelectorAll('.project__book')
        let projectworkall = document.querySelectorAll('.project__workall')
        let projectmore = document.querySelectorAll('.project__more')
        let projectmoreicon = document.querySelectorAll('.project .project__book-more .icon')

        projectallicon.forEach(function (ai){
            ai.addEventListener('click',function(){
                projectall.forEach(function (pjall){
                     pjall.classList.add('active');
                })
                projectbook.forEach(function (pjb){
                    pjb.classList.add('active');
                })
                projectworkall.forEach(function (pjwa){
                    pjwa.classList.add('active')
                })
            })
        })

        projectmoreicon.forEach(function(mricon){
            mricon.addEventListener('click',function(){
                projectmore.forEach(function(pjmr){
                    pjmr.classList.add('active')
                })
                projectworkall.forEach(function(pjwa){
                    pjwa.classList.add('active')
                })
                mricon.classList.add('active')
            })
        })
    }
    const allwork = document.querySelector('.project__workall')
    if(allwork){
        projectAll()
    }
}projectall()

function projecttab(){
    function tabtab(){
        let tablist = document.querySelectorAll('.project__tab-item')
        let tablistitem = document.querySelectorAll('.project__tablist');

        tablist.forEach(function(tab){
            tab.addEventListener('click',function(){
                tablist.forEach(function (tab) {
                    tab.classList.remove('active')
                })
                tab.classList.add('active')

                tablistitem.forEach(function(list){
                list.classList.remove('active')
                })
                let id = this.dataset.page
                document.querySelector('.project__tablist-'+ id).classList.add('active')
                
                let projectall = document.querySelectorAll('.project__all')
                let projectbook = document.querySelectorAll('.project__book')
                let projectworkall = document.querySelectorAll('.project__workall')
                let projectmore = document.querySelectorAll('.project__more')
                
                projectall.forEach(function(pja){
                    pja.classList.remove('active')
                })
                projectbook.forEach(function(pjb){
                    pjb.classList.remove('active')
                })
                projectworkall.forEach(function(pjwa){
                    pjwa.classList.remove('active')
                })
                projectmore.forEach(function(pjm){
                    pjm.classList.remove('active')
                })
                
            })
        })
    }
    const tabPJ = document.querySelector('.project__tab')
    if(tabPJ){
        tabtab()
    }
}projecttab()

function backtotop() {
    function backToTop() {
        let toTop = document.querySelector('.footer__totop')
        toTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
    const totop = document.querySelector('.footer__totop');
    if (totop) {
        backToTop()
    }
} backtotop()

function fullscreen(){
    Fancybox.bind('[data-fancybox]', {
    infinite : true,
    keyboard:{
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
    },
    caption: function (fancybox, carousel, slide) {
        return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
        );
    },
    });
}fullscreen()

function booking(){
    function bookingbtn(){
        let btnbook = document.querySelectorAll('.rental__right-booking .select__list-item')
        let listbook = document.querySelectorAll('.rental__left-item')
        btnbook.forEach(function(e){
            e.addEventListener('click',function(){
                btnbook.forEach(function(e){
                    e.classList.remove('active')
                })
                e.classList.add('active')

                listbook.forEach(function(lists){
                    lists.classList.remove('active')
                })
                let id = this.dataset.tab
                document.querySelector('.rental__left-item-'+id).classList.add('active')
            })
        })
    }
    const btnbooking = document.querySelector('.rental__right-booking .select__list')
    if(btnbooking){
        bookingbtn()
    }
}booking()

function hanhledetailstudio(){
    function hanhledetailStudio(){
        var slider = document.querySelector('.studiodetailhero__img');
        var flktySlider = new Flickity( slider, {
            // options
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            draggable: '>1',
            prevNextButtons: true,
            wrapAround: true,
            fade: true,
            pageDots : false,
            prevNextButtons: false,
        });

        let btnPrev = document.querySelector('.studiodetailhero__bottom-right .btnnextpre .pre');
        let btnNext = document.querySelector('.studiodetailhero__bottom-right .btnnextpre .next');

        btnPrev.addEventListener('click',function(){
            flktySlider.previous(true)
        })
        btnNext.addEventListener('click',function(){
            flktySlider.next(true)
        })
    }
    const hanhledetailst = document.querySelector('.studiodetailhero__bottom')
    if(hanhledetailst){
        hanhledetailStudio()
    }
}hanhledetailstudio()

function hanhlecafe(){
    function hanhleCafe(){
        let btnPrev = document.querySelector('.gallery .btnnextpre .pre');
        let btnNext = document.querySelector('.gallery .btnnextpre .next');
        let listitem1 = document.querySelector('.gallery__list-item1')
        let listitem2 = document.querySelector('.gallery__list-item2')
        document.querySelector('.gallery__list-item2').style.transformOrigin = "right";
        document.querySelector('.gallery__list-item1').style.transformOrigin = "left";
        btnNext.addEventListener('click',function(){
            listitem1.classList.remove('active')
            listitem2.classList.add('active')
        })
        btnPrev.addEventListener('click',function(){
            listitem1.classList.add('active')
            listitem2.classList.remove('active')
        })
    }
    const hanhlecf = document.querySelector('.gallery__list')
    if(hanhlecf){
        hanhleCafe()
    }
}hanhlecafe()

function menumobile(){
    let btnmenumobile = document.querySelector('header .header__hero .navmenu')
    let headerhidden = document.querySelector('header .header__hidden')
    btnmenumobile.addEventListener('click',function(){
        btnmenumobile.classList.toggle('active')
        headerhidden.classList.toggle('active')
    })
}menumobile()