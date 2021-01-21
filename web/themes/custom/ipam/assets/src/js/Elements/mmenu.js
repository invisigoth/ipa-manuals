import '../../scss/dynamic/menu-mobile-theme.scss'
import $ from 'jquery'

/**
 * Site globals.
 */
export default class Mmenu {

    /**
     * Init the mobile menu
     */
    constructor() {

      this.icon = $('#mobile-menu-button')
      this.nav = $('.nested-nav')
      this.nav[0].removeAttribute('style')
      this.nav[0].removeAttribute('hidden')

      import(
        /* webpackChunkName: "mmenu" */
        'jquery.mmenu/dist/jquery.mmenu.all.js'
      ).then(() => {
        this.bind()
      })
    }

    bind() {
      let url = window.location.pathname;
      url = url.split("/")[1];

      let config = {
        extensions  : {
          "all": ["position-right", "pagedim-black"],
          "(min-width: 600px)": ["listview-large"]
        },
        setSelected: true,
        lazySubmenus: true,
        offCanvas: {
          position: "bottom",
          zposition: "front"
        },
        keyboardNavigation: {
          enable: true,
          enhance: true
        },
        navbars: [
           {
              position: "top",
              content: [
                 "searchfield"
              ]
           }
        ],
        searchfield: {
          showSubPanels: false,
          search: false
        }
      };

      let options = {
        offCanvas: {
          page: {
            noSelector: ['#toolbar-administration']
          }
        },
        searchfield: {
          form: {
            method: 'get',
            action: '/' + url + '/search'
          },
          input: {
            name: 'keywords'
          },
          submit: true
        }
      };

      this.nav.mmenu(config, options);
      this.api = this.nav.data('mmenu')

      this.icon.on('click', () => {
         this.api.open()
      })

      this.api.bind('open:finish', () => {
         setTimeout(() => {
            this.icon.addClass('is-active')
         }, 100)
      })

      this.api.bind('close:finish', () => {
         setTimeout(() => {
            this.icon.removeClass('is-active')
         }, 100)
      })
    }
}
