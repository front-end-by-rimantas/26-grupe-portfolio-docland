// COMPONENTS AND DATA IMPORT

// /*HEADER START
import { header } from "./components/header.js";
import { headerData } from "./data/headerData.js";
import { sidemenu } from "./components/sidemenu.js";
header(".links", headerData);
sidemenu(".sideLinks", headerData);
// HEADER END

// HERO START
// HERO END

// SQUARES START
import { squares } from './components/squares.js'
import { squaresData } from './data/squaresData.js'
squares('.squares', squaresData);
// SQUARES END

// CUSTOMIZATION START
// CUSTOMIZATION END

// PAYMENT METHODS START
// PAYMENT METHODS END


// SOLUTIONS START
solutionBox('.box-container', solutionData);
import { solutionData } from './data/solutionData.js';
import { solutionBox} from './components/solutionBox.js'
// SOLUTIONS END

// START-USING START
import './components/start-using.js'
// START-USING END

// CUSTOMER REVIEWS START

import { customerReviewsData } from './data/customer-reviews.js';
import { CustomerReviews } from './components/customer-reviews/CustomerReviews.js';
import { Carousel } from './components/carousel/Carousel.js';

// CUSTOMER REVIEWS END

// // PREMIUM FEATURES START
import { featuresData } from './data/featuresData.js';
import { featuresBox } from './components/features.js';
featuresBox('.features-boxes', featuresData);
// PREMIUM FEATURES END

// LOGO GALLERY START
import {logosData} from './data/logo-gallery.js'
import {LogosCarousel} from './components/LogosCarousel.js'
const logoCarousel = new LogosCarousel ('.logo-section', logosData);
// LOGO GALLERY END
logoCarousel.init()
// FOOTER START
import { socialsLogoData } from './data/footerData.js';
import { socials } from './components/footer.js';
socials('.socials', socialsLogoData);

// COMPONENTS EXECUTION

import { footerFeaturesData } from './data/footerData.js';
import { footerFeatures } from './components/footer.js';
footerFeatures('.footer-box-2', footerFeaturesData);

import { footerCompanyData } from './data/footerData.js';
import { footerCompany } from './components/footer.js';
footerCompany('.footer-box-3', footerCompanyData);
// FOOTER END

// COMPONENTS EXECUTION
new Carousel ({
    data: customerReviewsData,
    renderEngine: CustomerReviews,
    breakpoints: [800, 1100] 
})
