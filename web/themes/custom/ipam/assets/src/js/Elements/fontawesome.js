FontAwesomeConfig = {
  keepOriginalSource: false,
  searchPseudoElements: true
}

import {library, dom} from '@fortawesome/fontawesome-svg-core'

import {
  faInstagram,
  faFacebookF,
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faTwitterSquare,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import {
  faSearch,
  faUndoAlt,
  faSlidersH,
  faChevronLeft,
  faChevronRight,
  faHomeAlt,
  faLongArrowRight,
  faPlayCircle,
  faRepeat,
  faFileWord,
  faFileExcel,
  faFileAlt,
  faExternalLink,
  faPhoneRotary,
  faAngleDown,
  faAngleUp,
  faLink
} from '@fortawesome/pro-regular-svg-icons'

import {
  faExclamationTriangle, 
  faDownload,
  faThList,
  faTh,
  faSquare,
  faCheckSquare,
  faMapMarker,
  faSortDown,
  faMailbox,
  faWalking,
  faPlay,
  faPause,
  faEnvelopeOpenText,
  faHeart as fasHeart,
  faSearch as fasSearch
} from '@fortawesome/pro-solid-svg-icons'

import {
  faSearch as falSearch,
  faHeart,
  faCheck,
  faTimes,
  faKeyboard,
  faSquare as falSquare,
  faLongArrowDown,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faCalendarEdit,
  faGlobeAsia,
  faArrowAltUp,
  faArrowCircleLeft,
  faArrowCircleRight,
  faClock,
  faFilePdf,
  faFileVideo,
  faArrowAltRight,
  faQuestionCircle
} from '@fortawesome/pro-light-svg-icons'

export default class FontAwesome {
  constructor() {

    library.add(

      // free-brands-svg-icons
      faInstagram,
      faFacebookF,
      faFacebookSquare,
      faLinkedin,
      faTwitter,
      faTwitterSquare,
      faYoutube,

      // pro-regular-svg-icons
      faSearch,
      faUndoAlt,
      faSlidersH,
      faChevronLeft,
      faChevronRight,
      faHomeAlt,
      faLongArrowRight,
      faPlayCircle,
      faRepeat,
      faFilePdf,
      faFileAlt,
      faFileWord,
      faFileExcel,
      faExternalLink,
      faPhoneRotary,
      faAngleDown,
      faAngleUp,
      faLink,

      // pro-solid-svg-icons
      faExclamationTriangle, 
      faDownload,
      faThList,
      faTh,
      faSquare,
      faCheckSquare,
      fasHeart,
      fasSearch,
      faMapMarker,
      faSortDown,
      faWalking,
      faMailbox,
      faPlay,
      faPause,
      faClock,

      // pro-light-svg-icons
      falSearch,
      faHeart,
      faCheck,
      faTimes,
      faKeyboard,
      falSquare,
      faLongArrowDown,
      faArrowDown,
      faArrowLeft,
      faArrowRight,
      faEnvelopeOpenText,
      faCalendarEdit,
      faGlobeAsia,
      faArrowAltUp,
      faArrowCircleLeft,
      faArrowCircleRight,
      faArrowAltRight,
      faQuestionCircle,
      faFileVideo
    );

    dom.watch();

    this.inserted()
  }

  inserted() {
    // Anything extra to bind or insert manually.
  }
}
