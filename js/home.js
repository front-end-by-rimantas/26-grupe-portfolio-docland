// COMPONENTS AND DATA IMPORT

// /*HEADER START
import { header } from "./components/header.js";
import { headerData } from "./data/headerData.js";
import { sidemenu } from "./components/sidemenu.js";
// HEADER END
import "./components/headerOnScroll.js"
// HERO START
// HERO END

// SQUARES START
import { squares } from './components/squares.js'
import { squaresData } from './data/squaresData.js'
// SQUARES END

// CUSTOMIZATION START
// CUSTOMIZATION END

// PAYMENT METHODS START
// PAYMENT METHODS END

// PRODUCT RATING REVIEWS START
// PRODUCT RATING REVIEWS END

// SOLUTIONS START
import { solutionData } from './data/solutionData.js';
import { solutionBox} from './components/solutionBox.js'
// SOLUTIONS END

import './components/fixedIcon.js'

// START-USING START
import './components/start-using.js'
// START-USING END

// CUSTOMER REVIEWS START
// CUSTOMER REVIEWS END

// // PREMIUM FEATURES START
import { featuresData } from './data/featuresData.js';
import { featuresBox } from './components/features.js';
// PREMIUM FEATURES END

// LOGO GALLERY START
import {logosData} from './data/logo-gallery.js'
import {LogosCarousel} from './components/LogosCarousel.js'
// LOGO GALLERY END

// FOOTER START
import { socialsLogoData } from './data/footerData.js';
import { socials } from './components/footer.js';
import { footerFeaturesData } from './data/footerData.js';
import { footerFeatures } from './components/footer.js';
import { footerCompanyData } from './data/footerData.js';
import { footerCompany } from './components/footer.js';
// FOOTER END

// COMPONENTS EXECUTION
header(".links", headerData);
sidemenu(".sideLinks", headerData);
squares('.squares', squaresData);
solutionBox('.box-container', solutionData);
featuresBox('.features-boxes', featuresData);
const logoCarousel = new LogosCarousel ('.logo-section', logosData);
logoCarousel.init()
socials('.socials', socialsLogoData);
footerFeatures('.footer-box-2', footerFeaturesData);
footerCompany('.footer-box-3', footerCompanyData);
