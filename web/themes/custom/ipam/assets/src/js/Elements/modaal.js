import modaal from 'modaal'

export default class Modaal {
  constructor() {
    this.init();
  }

  init() {
    // Video Modal
    $('.video').modaal({
      type: 'video',
    });

    $('a.image').modaal({
      type: 'image',
    });

  }
}