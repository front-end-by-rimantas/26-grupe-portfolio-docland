// COMPONENTS AND DATA IMPORT

// /*HEADER START
// HEADER END

// HERO START
// HERO END

import { squares } from './components/squares.js'
import { solutionData } from './data/solutionData.js';
import { squaresData } from './data/squaresData.js'
squares('.squares', squaresData);
import { solutionBox} from './components/solutionBox.js'
// CUSTOMIZATION START
// CUSTOMIZATION END

// PAYMENT METHODS START
// PAYMENT METHODS END

// PRODUCT RATING REVIEWS START
// PRODUCT RATING REVIEWS END

// SOLUTIONS START

solutionBox('.box-container', solutionData);
// SOLUTIONS END



import './components/start-using.js'



// CUSTOMER REVIEWS START
// CUSTOMER REVIEWS END

// PREMIUM FEATURES START
// PREMIUM FEATURES END

// LOGO GALLERY START
import {logosData} from './data/logo-gallery.js'
import {LogosCarousel} from './components/LogosCarousel.js'
const logoCarousel = new LogosCarousel ('.logo-section', logosData);
// LOGO GALLERY END
logoCarousel.init()
// FOOTER START
// FOOTER END

// COMPONENTS EXECUTION