require(['zepto', 'fullpage', 'bscroll', 'Swiper'], function($, fullpage, BScroll, Swiper) {


    $(document).ready(function() {

        $('.wp-inner').fullpage({
            page: '.page',
            change: function(e) {

            },
            beforeChange: function(e) {
                $('.page').eq(e.cur).find('.animated').removeClass('active');
            },
            afterChange: function(e) {
                $('.page').eq(e.cur).find('.animated').addClass('active');
                if (Number(e.cur) === 3) {
                    $('.gonextpage').addClass('active');
                    $('.gonextpage').data('dir', 'movePrev');
                } else {
                    $('.gonextpage').removeClass('active');
                    $('.gonextpage').data('dir', 'moveNext');
                }
            },
            orientationchange: function() {}
        });

        var startX, startY, moveEndX, moveEndY, X, Y;
        $('#libao #libao1').on('touchstart', function(e) {
            e.preventDefault();
            startX = e.touches[0].pageX;

            startY = e.touches[0].pageY;
            console.log(startX, startY);
        });
        $('body').on('touchmove', function(e) {
            e.preventDefault();

            moveEndX = e.changedTouches[0].pageX;

            moveEndY = e.changedTouches[0].pageY;

            X = moveEndX - startX;

            Y = moveEndY - startY;

            if (X > 0) {
                // console.log('right');
            } else if (X < 0) {
                // console.log('left');

            } else if (Y > 0) {
                console.log($('#libao1').offset().top);
                $('#libao1').css('top', $('#libao1').css('top') + Y);
            } else if (Y < 0) {
                // console.log('up');
            } else {
                // console.log('no touch');
            }
        })
        $('.gonextpage').on('click', function(e) {
            e.preventDefault();
            $.fn.fullpage[$(this).data('dir')](true);
        });


        var swiper = new Swiper('.sz', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 0,
            freeMode: true,
            lazyLoading: true,
        });
        $('.tab li').on('click', function() {
            let i = $(this).index();
            $('.views').find('.item').hide();
            $('.views').find('.item').eq(i).show();
            if (i === 1) {
                $(this).parent().addClass('done');
                var wq = new Swiper('.wq');
            } else {
                $(this).parent().removeClass('done');
                var swiper = new Swiper('.sz', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 0,
                    freeMode: true,
                    lazyLoading: true,
                });
            }
        });


        let i = 0;

        function qiehuan() {
            $('.imgs').find('img').removeClass('active');
            $('.imgs').find('img').eq(i).addClass('active');
        }


        $('.prex').click(function() {
            if (i <= 0) {
                i = 4;
                qiehuan();
            } else {
                i--;
                qiehuan();
            }
        })
        $('.next').click(function() {
            if (i >= 4) {
                i = 0;
                qiehuan();
            } else {
                i++;
                qiehuan();
            }
        })

        $('.page1 .btn').click(function() {
            $('#yuyuebox').show();
            $('.mark').show();
        })

        $('.close').click(function() {
            $(this).parent().hide();
            $('.mark').hide();
        })

        $('#yuyue').click(function() {
            $(this).parent().hide();
            $('#surebox').show();
        })

        $('#sureyuyue').click(function() {
            $(this).parent().hide();
            $('.mark').hide();
        })

        $('.libao li').click(function() {
            $('#libao').show();
            $('.mark').show();
            $('.guanbi').show();
            var iSwiper = new Swiper('.libaoss', {
                direction: 'vertical',
                slidesPerView: 3,
                spaceBetween: 10
            });

        })
        $('.guanbi').click(function() {
            $('.libaobox').hide();
            $('.mark').hide();
            $(this).hide();
        })
        $('.baoxiang li').click(function() {
            $('#friend').show();
            $('.mark').show();
            $('.guanbi').show();

            var iSwiper2 = new Swiper('.libaoss2', {
                direction: 'vertical',
                slidesPerView: 3,
                spaceBetween: 10
            });
        })
        $('.page2 .btn').click(function() {
            $('.zhaohuanbox').show();
            $('.mark').show();
        });

    })
})