// COMPONENTS AND DATA IMPORT

// /*HEADER START
import { header } from "./components/header.js";
import { headerData } from "./data/headerData.js";
import { sidemenu } from "./components/sidemenu.js";
header(".links", headerData);
sidemenu(".sideLinks", headerData);
// HEADER END
import "./components/header.js"
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

// PRODUCT RATING REVIEWS START
// PRODUCT RATING REVIEWS END

// SOLUTIONS START
solutionBox('.box-container', solutionData);
import { solutionData } from './data/solutionData.js';
import { solutionBox} from './components/solutionBox.js'
// SOLUTIONS END

// START-USING START
import './components/start-using.js'
// START-USING END

// CUSTOMER REVIEWS START
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

import { footerFeaturesData } from './data/footerData.js';
import { footerFeatures } from './components/footer.js';
footerFeatures('.footer-box-2', footerFeaturesData);

import { footerCompanyData } from './data/footerData.js';
import { footerCompany } from './components/footer.js';
footerCompany('.footer-box-3', footerCompanyData);
// FOOTER END

// COMPONENTS EXECUTION
