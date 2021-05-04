// COMPONENTS AND DATA IMPORT

// /*HEADER START
// HEADER END
import "./components/header.js"
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

// // PREMIUM FEATURES START
import { featuresData } from './data/featuresData.js'
import { featuresBox } from './components/features.js'
featuresBox('.features-boxes', featuresData)
 


// PREMIUM FEATURES END

// LOGO GALLERY START
// LOGO GALLERY END

// FOOTER START
// FOOTER END

// COMPONENTS EXECUTION