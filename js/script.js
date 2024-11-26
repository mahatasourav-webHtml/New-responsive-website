// hamburger = document.querySelector('.ham-burger')
// nav = document.querySelector('.nav')
// navlist = document.querySelector('.nav-list')
// searchicon = document.querySelector('.search-icon')

// hamburger.addEventListener('click',()=>{
// nav.classList.toggle('h-nav');
// navlist.classList.toggle('v-class');
// searchicon.classList.toggle('v-class');
// })

// arrow = document.querySelector('.arrow')
// subheaderitem = document.querySelector('.sub-header-item')
// sociallink=document.querySelector('.social-link')
// contacticon= document.querySelector('.contact-icon')

// arrow.addEventListener('click',()=>{
//     subheaderitem.classList.toggle('h-nav');
//     sociallink.classList.toggle('v-class');
//     contacticon.classList.toggle('v-class');
// })


// // count number part

// function visible(partial) {
//     var $t = partial,
//         $w = jQuery(window),
//         viewTop = $w.scrollTop(),
//         viewBottom = viewTop + $w.height(),
//         _top = $t.offset().top,
//         _bottom = _top + $t.height(),
//         compareTop = partial === true ? _bottom : _top,
//         compareBottom = partial === true ? _top : _bottom;

//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

// }

// $(window).scroll(function(){

//   if(visible($('.count-digit')))
//     {
//       if($('.count-digit').hasClass('counter-loaded')) return;
//       $('.count-digit').addClass('counter-loaded');
      
// $('.count-digit').each(function () {
//   var $this = $(this);
//   jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//     duration: 5000,
//     easing: 'swing',
//     step: function () {
//       $this.text(Math.ceil(this.Counter));
//     }
//   });
// });
//     }
// })

// // end of count number part


const faqHeaders=document.querySelectorAll(".faq-header");
faqHeaders.forEach(faqHeader =>{
    faqHeader.addEventListener("click", ()=>{

        const currentlyActiveFaqHeader=document.querySelector(".faq-header.active");
        if(currentlyActiveFaqHeader && currentlyActiveFaqHeader !==faqHeader) {
            currentlyActiveFaqHeader.classList.toggle("active");
            currentlyActiveFaqHeader.nextElementSibling.style.maxHeight=0;
        }
            faqHeader.classList.toggle("active");

            const faqBody = faqHeader.nextElementSibling;
            if (faqHeader.classList.contains("active")) {
                faqBody.style.maxHeight = faqBody.scrollHeight+"px";
            }
            else {
                faqBody.style.maxHeight = 0;
            }
        });
});