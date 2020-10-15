import slick from 'slick-carousel'
import $ from "jquery";

export default class Slick {
  constructor() {
    this.init();
  }

  init() {

    $('.view-electrical-safety-resources .view-content').slick({
      dots: true,
      infinite: true,
      cssEase: 'linear',
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });

    $('.path-frontpage .field--name-field-components').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      cssEase: 'linear',
      autoplay: true,
      speed: 1000
    });

    $('.view-video-slider .view-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      cssEase: 'linear',
      autoplay: false,
      arrows: true,
      speed: 1000
    });


    $('.slick-prev').append('<i class="fal fa-arrow-circle-left"></i>');
    $('.slick-next').append('<i class="fal fa-arrow-circle-right"></i>');
  }
}