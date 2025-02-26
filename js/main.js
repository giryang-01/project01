// gnb
$(function () {
    $(window).resize(function () {
        console.log($(this).width());
        let window_width = $(this).width();
        if (window_width > 1260) {
            $('.gnb-wrap').show();
            $('.sol-list').hide();  
        } else {
            $('.gnb-wrap').hide();
        }
    }).trigger('resize');

    $('.btn-category').click(function () {
        $('.gnb-wrap').toggle('show');
        $('.gnb-wrap').removeClass('show');
    })
    $('.menu-list').click(function () {
        $('.sol-list').toggle('show');
        $('.sol-list').removeClass('show');
    })


    // slide

    $(document).ready(function () {
        let slideIndex = 0;
        let slides = $('.logo_slide ul');
        let totalSlides = slides.length;
        let slideWidth = slides.width();

        // $slides.prepend($slides.last().clone());
        // $slides.append($slides.first().clone());

        function showNextSlide() {
            slideIndex = (slideIndex + 1);
            if (slideIndex >= totalSlides) {
                // 슬라이드가 마지막에 도달했을 때, 마지막 슬라이드를 표시
                slideIndex = totalSlides - 1;
            } 
            slides.css('transform', `translateX(${-slideIndex * slideWidth}px)`);

        }

        function showPrveSlide() {
            slideIndex = (slideIndex - 1);
            if (slideIndex < 0) {
                slides.css('transform', 'none');
                // slides.css('transform', `translateX(${-slideIndex * slideWidth}px)`);
                slideIndex = 0;
            } else {
                slides.css('transform', `translateX(${-slideIndex * slideWidth}px)`);
                // $firstSlide = slides.find().first().appendTo(slides);    
            }

        }


        // setInterval(showNextSlide, 3000);

        $('.btn-prev').click(function () {
            // slideIndex = (slideIndex - 1);
            // slides.css('transform', `translateX(${-slideIndex * slideWidth}px)`);
            showPrveSlide();
        });

        $('.btn-next').click(function () {
            showNextSlide();
        });

        $('.btn-top').click(function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    });

});
