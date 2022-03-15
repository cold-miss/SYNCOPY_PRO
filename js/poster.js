let mov = 0;

    $('.movieposters').on('mousemove', (e)=> {
      //  slider 컨테이너 offsetLEft
      const offsetLeft = document.querySelector('.movieposters').offsetLeft;
      console.log('offsetLeft = ', offsetLeft)
      //slider 컨테이너 위치를 0으로 설정(마우스 위치)
      let mousePos = e.clientX - offsetLeft;

      let sliderWidth = $('.movieposters').width(); // slider 목록 너비
      let slidersWidth = $('.wrapper2').width(); // slider 목록 너비
      // 이동 가능 범위 = sliders목록 너비 - slider컨테이너 너비
      let available_move = (slidersWidth - $('.movieposters').width()) / 2;
      mov = available_move;
      console.log('available_move =' + available_move);
      // console.log('slidersWidth = ', slidersWidth);
      // console.log('mousePos = ' + mousePos);
      if(mousePos > sliderWidth / 2) {
        // mov = Math.abs(mov) > available_move ? mov : mov+= 4;
        $('.wrapper2').css({
          transform: `translateX(calc(-50% - ${mov}px))`
        })
        console.log('right');
      } else {
        // mov = Math.abs(mov) < available_move ? mov : mov-= 4;
        $('.wrapper2').css({
          transform: `translateX(calc(-50% + ${mov}px))`
        })
        console.log('left');
      }
    })
