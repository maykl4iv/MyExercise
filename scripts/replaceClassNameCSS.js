let text = `

#site {
	background: #fff;
	min-height: 100vh;
	font: normal 25px/normal Mulish, sans-serif;
	color: #3D3D3D;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
	overflow: hidden;
}

#site h1,
#site h2,
#site h3,
#site h4,
#site h5,
#site h6 {
	line-height: normal;
}

/* intro
=====================*/

.intro {
	padding: 127px 0 281px;
	text-align: center;
	position: relative;
}

.intro-circle--1 {
	position: absolute;
	top: 20px;
	left: -10px;
}

.intro-circle--2 {
	position: absolute;
	top: 50%;
	right: 10px;
}

.intro-circle--3 {
	position: absolute;
	bottom: -20px;
	right: -4px;
	z-index: -1;
}
main.with_sidebar .main_content .container {
	padding: 30px 70px 0px 70px;
	position: relative
}
.container {
	width: 100%;
	max-width: 1350px;
	margin: 0 auto;
	padding: 0 15px;
}
.intro__title {
	width: 0;
	height: 0;
	position: absolute;
	overflow: hidden;
}

.intro__img-title {
	max-width: 100%;
	height: auto;
	margin: 0 0 40px;
	display: inline-block;
	vertical-align: top;
}

.founder__description.content>p:not(:last-child) {
	margin-bottom: 42px;
}

.content {
	line-height: 1.7;
}

.content strong {
	font-weight: 800;
}

.content> :first-child {
	margin-top: 0;
}

.content> :last-child {
	margin-bottom: 0;
}

.content>p {
	margin: 0 0 51px;
}

.intro__description {
	max-width: 860px;
	margin: 0 auto;
	font-weight: 600;
	font-size: 25px;
}

.our-mission {
	background: #F8F8FF;
	padding: 82px 0 81px;
}
.our-mission__container {
	position: relative;
	z-index: 1;
}
.our-mission__picture {
	margin: -303px 0 93px;
	text-align: center;
}
.our-mission__img {
	max-width: 100%;
	height: auto;
	display: inline-block;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	vertical-align: top;
}
.section-title {
	margin: 0 0 20px;
	font-weight: 800;
	font-size: 36px;
	color: #602C83;
	text-align: center;
	text-transform: uppercase;
}
.our-mission__title {
	margin-bottom: 40px;
}
.our-mission__title-section {
	margin: -105px 0 -74px;
	font-weight: 900;
	font-size: 180px;
	line-height: 1;
	letter-spacing: 3px;
	color: #F3ECFA;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	z-index: -1;
}

.our-mission__description {
	max-width: 1216px;
	margin: 0 auto;
	font-weight: 600;
	font-size: 26px;
	line-height: 2;
	text-align: center;
}

.our-values {
	padding: 35px 0;
}
.our-values__title {
	margin: 0 0 93px;
}

.our-values__nav {
	margin: 0 0 179px;
}

.our-values__body {}

.our-values-item {
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	-moz-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-align: start;
	-webkit-align-items: flex-start;
	-moz-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
}

.our-values-item--theme_orange {}

.our-values-item--theme_blue {}

.our-values-item--theme_red {}

.our-values-item__picture {
	max-width: 564px;
	margin: 0 134px 0 -12%;
	font-size: 0;
	-webkit-box-flex: 0;
	-webkit-flex: 0 0 43%;
	-moz-box-flex: 0;
	-ms-flex: 0 0 43%;
	flex: 0 0 43%;
	position: relative;
}

.tabs-content__item:nth-child(even) .our-values-item {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: reverse;
	-webkit-flex-direction: row-reverse;
	-moz-box-orient: horizontal;
	-moz-box-direction: reverse;
	-ms-flex-direction: row-reverse;
	flex-direction: row-reverse;
}

.tabs-content__item:nth-child(even) .our-values-item__picture {
	margin: 0 -12% 0 134px;
}

.our-values-item__avatar {
	width: 100%;
	height: auto;
	display: block;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none;
}

.our-values-item__actions {
	border: 1px solid #3D3D3D;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	position: absolute;
	top: -54px;
	right: -54px;
	bottom: -54px;
	left: -54px;
}

.our-values-item--theme_orange .our-values-item__actions {
	border-color: #FFA400;
}

.our-values-item--theme_blue .our-values-item__actions {
	border-color: #00BADD;
}

.our-values-item--theme_red .our-values-item__actions {
	border-color: #F87552;
}

.our-values-item__action {
	position: absolute;
}

.our-values-item__action--1 {
	top: -5.6%;
	left: 38.6%;
}

.our-values-item__action--2 {
	bottom: -5.6%;
	left: 39%;
}

.our-values-item__content {
	padding: 34px 40px 0 0;
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	-moz-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	font-weight: 600;
	font-size: 29px;
	line-height: 1.75;
}

.tabs-content__item:nth-child(even) .our-values-item__content {
	padding-right: 0;
	padding-left: 40px;
}

.our-values-item--theme_orange .our-values-item__content strong {
	color: #FFA400;
}

.our-values-item--theme_blue .our-values-item__content strong {
	color: #00BADD;
}

.our-values-item--theme_red .our-values-item__content strong {
	color: #F87552;
}


.our-values-item--theme_orange .link-action-circle svg {
	fill: #FFA400;
}

.our-values-item--theme_blue .link-action-circle svg {
	fill: #00BADD;
}

.our-values-item--theme_red .link-action-circle svg {
	fill: #F87552;
}
.nav-tabs {
	margin: 0;
	padding: 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content: space-around;
	-ms-flex-pack: distribute;
	justify-content: space-around;
	counter-reset: nav-counter;
	list-style-type: none;
	position: relative;
}

.nav-tabs:after {
	background: #F2F1F1;
	width: 8000px;
	height: 1px;
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%);
	pointer-events: none;
}
.nav-tabs__item {
	margin: 0;
	padding: 0;
}
.nav-tabs__item--theme_orange .nav-tabs__link.is-active {
	color: #FFA400;
}

.nav-tabs__item--theme_blue .nav-tabs__link.is-active {
	color: #00BADD;
}

.nav-tabs__item--theme_red .nav-tabs__link.is-active {
	color: #F87552;
}
.nav-tabs__link {
	padding: 0 0 38px 38px;
	display: block;
	font-weight: 900;
	font-size: 44px;
	color: #B8B8B8;
	text-transform: uppercase;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s;
	position: relative;
	z-index: 1;
}

.nav-tabs__link:hover {
	color: #3D3D3D;
	text-decoration: none;
}

.nav-tabs__link.is-active {
	color: #FFA400;
	pointer-events: none;
	cursor: default;
}



.nav-tabs__link:before {
	counter-increment: nav-counter;
	content: counter(nav-counter);
	font-weight: 800;
	font-size: 210%;
	line-height: 1;
	color: inherit;
	position: absolute;
	top: -.5em;
	left: .1em;
	opacity: .15;
	z-index: -1;
}

.nav-tabs__link.is-active:before {
	opacity: .3;
}

.nav-tabs__link:after {
	background: currentColor;
	height: 3px;
	content: '';
	position: absolute;
	right: 30px;
	bottom: 0;
	left: 0;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s;
}

.nav-tabs__link:not(.is-active):after {
	opacity: 0;
	visibility: visible;
}

.tabs-content {
	display: block;
}
.tabs-content__item {
	display: none;
}

.tabs-content__item.is-show {
	display: block;
}
.link-action-circle {
	background: #fff;
	width: 74px;
	height: 74px;
	padding: 12px;
	display: block;
	font-size: 0;
	text-align: center;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	-webkit-box-shadow: 0 4px 20px 5px rgba(157, 113, 199, .06);
	-moz-box-shadow: 0 4px 20px 5px rgba(157, 113, 199, .06);
	box-shadow: 0 4px 20px 5px rgba(157, 113, 199, .06);
	cursor: pointer;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s;
}

.link-action-circle:hover {
	background: #9D71C7;
	-webkit-box-shadow: 0 4px 20px 5px rgba(157, 113, 199, .2);
	-moz-box-shadow: 0 4px 20px 5px rgba(157, 113, 199, .2);
	box-shadow: 0 4px 20px 5px rgba(157, 113, 199, .2);
	text-decoration: none;
}

.link-action-circle:after {
	width: 0;
	height: 100%;
	content: '';
	display: inline-block;
	vertical-align: middle;
}

.link-action-circle svg,
.link-action-circle img,
.link-action-circle__icon {
	max-width: 100%;
	max-height: 100%;
	display: inline-block;
	vertical-align: middle;
}

.link-action-circle svg {
	fill: #FFA400;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s;
}

.link-action-circle:hover svg {
	fill: #fff !important;
}
.founder {
	padding: 106px 0 144px;
}
.founder__title {
	margin: 0 0 60px;
}

.founder__body {
	margin: 0 0 130px;
	padding-left: 16px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	-moz-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	position: relative;
	z-index: 0;
}

.founder__body:before {
	background: #F8F8FF;
	width: 8000px;
	content: '';
	position: absolute;
	top: 40px;
	bottom: 0;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%);
	z-index: -1;
}

.founder__content {
	max-width: 49.4%;
	padding: 123px 90px 37px 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-flex: 0;
	-webkit-flex: 0 0 60%;
	-moz-box-flex: 0;
	-ms-flex: 0 0 60%;
	flex: 0 0 60%;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-moz-box-orient: vertical;
	-moz-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	-moz-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
}

.founder__name {
	margin: 0 0 80px;
	font-weight: 800;
	font-size: 50px;
	color: #9D71C7;
	letter-spacing: 1px;
}

.founder__text {
	padding: 50px 0 0;
	font-weight: 600;
	font-size: 26px;
	line-height: 1.65;
	text-align: right;
	position: relative;
}

.founder__text:before,
.founder__text:after {
	background: url(../images/quote.svg) 50% no-repeat;
	-webkit-background-size: contain;
	-moz-background-size: contain;
	-o-background-size: contain;
	background-size: contain;
	width: 74px;
	height: 66px;
	content: '';
	position: absolute;
	opacity: .8;
	z-index: -1;
}

.founder__text:before {
	margin-bottom: -50px;
	bottom: 100%;
	left: -30px;
}

.founder__text:after {
	margin-top: -48px;
	top: 100%;
	right: -20px;
	-webkit-transform: scale(-1);
	-moz-transform: scale(-1);
	-ms-transform: scale(-1);
	-o-transform: scale(-1);
	transform: scale(-1);
}

.founder__picture {
	max-width: 682px;
	margin: 0 -22px 40px 0;
	font-size: 0;
	-webkit-align-self: flex-end;
	-ms-flex-item-align: end;
	align-self: flex-end;
	-webkit-box-flex: 0;
	-webkit-flex: 0 0 52.35%;
	-moz-box-flex: 0;
	-ms-flex: 0 0 52.35%;
	flex: 0 0 52.35%;
}

.founder__img {
	width: 100%;
	height: auto;
	display: block;
}

.founder__description {
	max-width: 904px;
	margin: 0 auto;
	font-size: 26px;
	line-height: 1.55;
	text-align: center;
}
/* journey
=====================*/

.journey {
	background: #FFF5F2;
	padding: 50px 20px 20px 20px;
}

.journey__title {
	margin: 0 0 80px;
	color: #585858;
}

.journey-slider {
	margin: 0 -20px;
	padding: 0 0 0 -webkit-calc(50% - 640px);
	padding: 0 0 0 -moz-calc(50% - 640px);
	padding: 0 0 0 calc(50% - 640px);
}

.journey-slider .slick-list {
	overflow: visible;
}

.slick-arrow {
	background: #FA4616;
	width: 38px;
	height: 38px;
	font-size: 0;
	position: absolute;
	top: 30px;
	border: none;
	cursor: pointer;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	-webkit-box-shadow: 0 2px 16px 2px rgb(250, 70, 22, .4);
	-moz-box-shadow: 0 2px 16px 2px rgb(250, 70, 22, .4);
	box-shadow: 0 2px 16px 2px rgb(250, 70, 22, .4);
	outline: none;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s;
	cursor: pointer;
	z-index: 10;
}

.slick-disabled {
	opacity: 0;
	visibility: hidden;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	pointer-events: none;
	cursor: default;
}

.slick-arrow:hover {
	-webkit-box-shadow: 0 2px 12px 2px rgb(250, 70, 22, .6), 0 0 0 4px rgb(250, 70, 22, .5);
	-moz-box-shadow: 0 2px 12px 2px rgb(250, 70, 22, .6), 0 0 0 4px rgb(250, 70, 22, .5);
	box-shadow: 0 2px 12px 2px rgb(250, 70, 22, .6), 0 0 0 4px rgb(250, 70, 22, .5);
}

.slick-arrow:after {
	background: url(../images/arrow.svg) 50% no-repeat;
	width: 11px;
	height: 18px;
	margin: -9px 0 0 -7px;
	content: '';
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
}

.slick-next:after {
	margin-left: -4px;
	-webkit-transform: rotate(-180deg);
	-moz-transform: rotate(-180deg);
	-ms-transform: rotate(-180deg);
	-o-transform: rotate(-180deg);
	transform: rotate(-180deg);
}

.slick-prev {
	left: 20px;
}

.slick-next {
	right: 20px;
}

.journey-item {
	width: 600px;
	margin-right: 40px;
	color: #FA4616;
	cursor: pointer;
	-webkit-transition: color .4s;
	-o-transition: color .4s;
	-moz-transition: color .4s;
	transition: color .4s;
	position: relative;
}

.slick-current~.slick-slide .journey-item {
	color: #B8B8B8;
}

.slick-current .journey-item {
	cursor: auto;
}

.journey-slider:before {
	background: #FA4616;
	width: 100vw;
	height: 1px;
	content: '';
	position: absolute;
	top: 50px;
	left: 0;
}

.journey-item__inner {
	margin-right: -50px;
	padding-right: 50px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	position: relative;
}

.journey-item__inner:before {
	background-image: url('../img/n.png');
	background-size: cover;
	width: 21px;
	height: 21px;
	content: '';
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	position: absolute;
	top: 40px;
	left: 0;
	-webkit-transform: scale(1.6);
	-moz-transform: scale(1.6);
	-ms-transform: scale(1.6);
	-o-transform: scale(1.6);
	transform: scale(1.6);
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s;
	z-index: 1;
}

.slick-current~.slick-slide .journey-item__inner:before {
	background: #B8B8B8;
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	-o-transform: scale(1);
	transform: scale(1);
}

.journey-item:hover .journey-item__inner:before {
	background: #FA4616;
}

.journey-item__inner:after {
	background: #FA4616;
	height: 1px;
	content: '';
	position: absolute;
	top: 50px;
	right: 0;
	left: 12px;
	-webkit-transform: scaleX(1);
	-moz-transform: scaleX(1);
	-ms-transform: scaleX(1);
	-o-transform: scaleX(1);
	transform: scaleX(1);
	-webkit-transform-origin: left center;
	-moz-transform-origin: left center;
	-ms-transform-origin: left center;
	-o-transform-origin: left center;
	transform-origin: left center;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s
}

.slick-current~.slick-slide .journey-item__inner:after {
	background: #B8B8B8;
}

.slick-slide:last-child .journey-item__inner:after {
	width: 8000px;
}

.slick-current .journey-item__inner:after {
	background: #fa4616;
	background: -moz-linear-gradient(left, #fa4616 60%, #b8b8b8 100%);
	background: -webkit-linear-gradient(left, #fa4616 60%, #b8b8b8 100%);
	background: -webkit-gradient(linear, left top, right top, color-stop(60%, #fa4616), to(#b8b8b8));
	background: -moz-linear-gradient(left, #fa4616 60%, #b8b8b8 100%);
	background: -o-linear-gradient(left, #fa4616 60%, #b8b8b8 100%);
	background: linear-gradient(to right, #fa4616 60%, #b8b8b8 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fa4616', endColorstr='#b8b8b8', GradientType=1);
	-webkit-transform: scaleX(1);
	-moz-transform: scaleX(1);
	-ms-transform: scaleX(1);
	-o-transform: scaleX(1);
	transform: scaleX(1);
}

.journey-item__date {
	margin: 24px 30px 0 0;
	padding-left: 28px;
	font-weight: bold;
	font-size: 18px;
	color: currentColor;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	-webkit-transition: color .4s;
	-o-transition: color .4s;
	-moz-transition: color .4s;
	transition: color .4s;
}

.journey-item:hover .journey-item__date {
	color: #FA4616;
}

.journey-item__month {
	margin: 0 0 7px;
}

.journey-item__year {
	display: block;
}

.journey-item__content {
	margin-top: 50px;
	padding: 120px 0 20px 50px;
	color: #3D3D3D;
	border-left: 1px dashed #FA4616;
	position: relative;
	-webkit-transform-origin: center top;
	-moz-transform-origin: center top;
	-ms-transform-origin: center top;
	-o-transform-origin: center top;
	transform-origin: center top;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s;
}

.slick-current~.slick-slide .journey-item__content {
	-webkit-transform: scaleY(.4);
	-moz-transform: scaleY(.4);
	-ms-transform: scaleY(.4);
	-o-transform: scaleY(.4);
	transform: scaleY(.4);
	opacity: 0;
	visibility: hidden;
}

.journey-item__content,
.slick-current .journey-item__content {
	-webkit-transform: none;
	-moz-transform: none;
	-ms-transform: none;
	-o-transform: none;
	transform: none;
}

.journey-item__content:before {
	background: #FA4616;
	width: 15px;
	height: 15px;
	content: '';
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	left: -8px;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	-moz-transition: all .4s;
	transition: all .4s;
}

.journey-item__text {
	font-weight: bold;
	font-size: 14px;
	line-height: 1.5;
}

.journey-item__picture {
	font-size: 0;
}

.journey-item__logo {
	max-width: 60px;
	height: auto;
	margin: 15px 0 5px;
	display: block;
}

.swiper-container {
	width: 73.8%;
}

.swiper-slide img {
	display: block;
	width: 100%;
}

.swiper-button-next {
	right: 0 !important;
}

.swiper-button-prev {
	left: 0 !important;
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
	opacity: .7 !important;
}


.swiper-button-next,
.swiper-button-prev {
	width: 34px !important;
	height: 34px !important;
	background: #FA4616;
	border-radius: 50px;
	top: 39.5% !important;
}

.swiper-button-prev {
	transform: rotate(180deg);
}

.swiper-button-prev img {
	width: 10px;
	height: 18px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: rotate(180deg);
	transform: translate(-50%, -50%);
}

.swiper-button-next img {
	width: 10px;
	height: 18px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.community__slider .swiper-pagination {
	position: static;
	margin-top: 30px
}

.community__slider .swiper-pagination-bullet {
	width: 12px;
	height: 12px;
	background: #E5E5E5;
	opacity: 1
}

.community__slider .swiper-pagination-bullet-active {
	background: #602C83
}

.brands__slider .swiper-button-next,
.brands__slider .swiper-button-prev {
	top: 50px;
	width: 32px;
	height: 20px;
	font-size: 0
}

.brands__slider .swiper-button-next {
	right: 0;
	transform: rotate(-90deg)
}

.brands__slider .swiper-button-prev {
	left: 0;
	transform: rotate(90deg)
}

.swiper-button-next:after,
.swiper-button-prev:after {
	display: none
}

.swiper-button-next img,
.swiper-button-prev img {
	width: 100%;
	height: 100%
}


@media (max-width: 465px) {
	.swiper-button-next,
	.swiper-button-prev {
		width: 15px !important;
		height: 15px !important;
		top: 46.5% !important;
	}
	.swiper-button-next img,
	.swiper-button-prev img {
		width: 8px;
		height: 8px;
	}
}

@media screen and (max-width:560px) {
    main.with_sidebar .container.fix {
		padding: 0
    }
    main.with_sidebar .main_content .container:first-child {
		padding-top: 30px;
		padding-bottom: 35px
    }
    .brands__slider .swiper-button-next,
	.brands__slider .swiper-button-prev {
		top: 35px
    }
    .community__slider .swiper-pagination {
		margin-top: 30px
	}
}

@media (max-width: 767px) {
    .swiper-slide img {
		width: 94%;
		margin: 0 auto !important;
	}
	.swiper-button-next,
	.swiper-button-prev {
		width: 20px !important;
		height: 20px !important;
		top: 42.5% !important;
	}
	.swiper-button-next img,
	.swiper-button-prev img {
		width: 10px;
		height: 10px;
	}
    .section-title {
		font-size: 20px;
    }
    .our-values-item__picture {
		display: none;
    }
    .our-values__nav {
		margin-bottom: 60px;
    }
    .nav-tabs__link {
		font-size: 16px;
    }
    .founder__name {
		margin-bottom: 50px;
		font-size: 24px;
	}
	.founder__text {
		padding: 0;
		font-size: 14px;
	}
	.journey-item {
		width: calc(100vw - 90px);
		margin-right: 0;
	}
	.journey-item__date {
		margin-right: 5px;
	}
	.journey-item__content {
		padding: 70px 0 20px 20px;
	}
	.journey-slider .slick-arrow {
		visibility: hidden !important;
		z-index: -999 !important;
	}
	.journey-item__inner {
		padding-left: 34px;
	}
	.journey-item__inner:before {
		top: 19px;
		left: 34px;
	}
	.journey-item__inner {
		display: block;
	}
	.journey-item__content {
		margin: -28px 0 0 6px;
		padding-top: 80px;
	}
	.journey-item__inner:after {
		top: 26px;
		left: 34px;
	}
	.journey-item__inner {
		padding-right: 15px;
    }
    .swiper-container {
		width: 100% !important;
	}
}

@media screen and (max-width:768px) {
    .tablet .container {
		max-width: none
	}
}

@media screen and (max-width:860px) {
    .community__slider .swiper-pagination {
		margin-top: 70px
    }
    .brands__slider .swiper-button-next {
		right: 20px
	}
	.brands__slider .swiper-button-prev {
		left: 20px
	}
}

@media (max-width: 991px) {
    .content>p {
		margin-bottom: 30px;
    }
    .nav-tabs__link {
		padding: 0 0 10px 10px;
		font-size: 34px;
	}
}

@media screen and (max-width:1024px) {
    main.with_sidebar .main_content .container {
		padding: 0;
		max-width: none
	}
	main.with_sidebar .main_content .container:first-child {
		padding: 25px
	}
}

@media (min-width: 1199px) {
	.hidden-desktop {
		display: none;
	}
}

@media (max-width: 1199px) {
    .intro {
		padding: 50px 0 17vw;
    }
    .hidden-mobile {
		display: none;
    }
    .content {
		font-size: 18px;
		line-height: 1.6;
    }
    .our-mission {
		padding: 60px 0;
    }
    .our-mission__picture {
		margin: -20vw -15px 60px;
    }
    .section-title {
		margin: 0 0 30px;
		font-size: 28px;
    }
    .our-mission__title-section {
		margin: -7vw -15px -6vw;
		font-size: 13vw;
    }
    .our-values {
		padding: 60px 0;
	}
	.our-values__title {
		margin: 0 0 60px;
	}
	.our-values__nav {
		margin-bottom: 140px;
	}
	.our-values-item {
		display: block;
		text-align: center;
	}
	.our-values-item__picture,
	.our-values-item__content {
		max-width: 100%;
	}
	.our-values-item__picture {
		max-width: 500px;
	}
	.our-values-item__picture,
	.tabs-content__item:nth-child(even) .our-values-item__picture {
		margin: 0 auto 100px;
	}
	.our-values-item__content {
		padding: 0;
	}
	.founder {
		padding: 60px 0;
	}
	.tabs-content__item:nth-child(even) .our-values-item__content {
		padding: 0;
	}
	.swiper-container {
		width: 83.8% !important;
    }
    .swiper-slide img {
		width: 96%;
	}
}


`

const replaceClassName = (txt) => {
    let patrn = /[.][a-zA-Z]\w{0,}[a-zA-Z0-9-_]{0,}/gm;

    let res = txt.replace(patrn, callbackMatch);

    return res;
}

const callbackMatch = (match) => {
    if (
        match === '.first' ||
        match === '.png' ||
        match === '.jpg' ||
		match === '.svg' ||
		match === '.swiper-container' ||
		match === '.swiper-wrapper' ||
		match === '.swiper-slide' ||
		match === '.swiper-button-next' ||
		match === '.swiper-button-prev' ||
		match === '.journey' ||
        match === '.active'
    ) {
        return match;
    }
    else {
        return match + '_mrk1';
    }
}


console.log(replaceClassName(text))
