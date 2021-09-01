let text = `
<div id="site">
  <!-- intro BEGIN -->
  <section class="intro">
    <div class="particles-js" id="particles-js"></div>
    <div class="container">
      <h1 class="intro__title">We believe in the power of PR</h1>
      <img src="images/intro-title--desktop.svg" alt="We believe in the power of PR" class="hidden-mobile intro__img-title">
      <img src="images/intro-title--mobile.svg" alt="We believe in the power of PR" class="hidden-desktop intro__img-title">
      <div class="content intro__description">“When the right people, work with the right clients, on the right plan, brilliant things will happen”</div>
    </div>
  </section>
  <!-- intro END -->
  <!-- our-mission BEGIN -->
  <section class="our-mission">
    <div class="container our-mission__container">
      <div class="our-mission__picture">
        <img src="images/our-mission-img.jpg" alt="We’re building a world where enterprising talent can freeflow online" class="our-mission__img">
      </div>
      <h2 class="section-title our-mission__title">We’re building a world where enterprising talent can freeflow online</h2>
      <div class="our-mission__title-section">Our mission</div>
      <div class="content our-mission__description">We create an easier and more reliable way for founders, CEOs and their teams to find great quality PRs that will help them reach their business goals, and we help talented PR people find the most exciting clients to work with as they develop their independent freelance career.</div>
    </div>
  </section>
  <!-- our-mission END -->
  <!-- our-values BEGIN -->
  <section class="our-values">
    <div class="container">
      <h2 class="section-title our-values__title">Our values</h2>
      <ul class="nav-tabs our-values__nav">
        <li class="nav-tabs__item nav-tabs__item--theme_orange">
          <a href="#tabs-enterprise" class="js-nav-tabs nav-tabs__link is-active">Enterprise</a>
        </li>
        <li class="nav-tabs__item nav-tabs__item--theme_blue">
          <a href="#tabs-freedom" class="js-nav-tabs nav-tabs__link">Freedom</a>
        </li>
        <li class="nav-tabs__item nav-tabs__item--theme_red">
          <a href="#tabs-quality" class="js-nav-tabs nav-tabs__link">Quality</a>
        </li>
      </ul>
      <div class="our-values__body">
        <div class="tabs-content">
          <div id="tabs-enterprise" class="tabs-content__item">
            <div class="our-values-item our-values-item--theme_orange">
              <div class="our-values-item__picture">
                <img src="images/our-values-1.jpg" alt="Enterprise" class="our-values-item__avatar">
                <div class="our-values-item__actions">
                  <a href="#" class="link-action-circle our-values-item__action our-values-item__action--1">
                    <svg width="32" height="27" viewBox="0 0 32 27" xmlns="http://www.w3.org/2000/svg" class="link-action-circle__icon"><path d="M31.0684 3.57166C31.0664 3.57166 31.0645 3.57143 31.0625 3.57143H22.5625V2.67857C22.5625 1.20164 21.3008 0 19.75 0H12.25C10.6992 0 9.4375 1.20164 9.4375 2.67857V3.57143H0.9375C0.415527 3.57143 0 3.97879 0 4.46429V24.1071C0 25.5841 1.26172 26.7857 2.8125 26.7857H29.1875C30.7383 26.7857 32 25.5841 32 24.1071V4.48312C32 4.48196 32 4.48079 32 4.47963C31.9641 3.89323 31.5854 3.57492 31.0684 3.57166V3.57166ZM11.3125 2.67857C11.3125 2.18634 11.7332 1.78571 12.25 1.78571H19.75C20.2668 1.78571 20.6875 2.18634 20.6875 2.67857V3.57143H11.3125V2.67857ZM29.7617 5.35714L26.8503 13.6751C26.7227 14.0404 26.3652 14.2857 25.9612 14.2857H20.6875V13.3929C20.6875 12.8997 20.2678 12.5 19.75 12.5H12.25C11.7322 12.5 11.3125 12.8997 11.3125 13.3929V14.2857H6.03882C5.63477 14.2857 5.27734 14.0404 5.14966 13.6751L2.23828 5.35714H29.7617ZM18.8125 14.2857V16.0714H13.1875V14.2857H18.8125ZM30.125 24.1071C30.125 24.5994 29.7043 25 29.1875 25H2.8125C2.29565 25 1.875 24.5994 1.875 24.1071V9.96629L3.37085 14.2399C3.75415 15.3355 4.82642 16.0714 6.03882 16.0714H11.3125V16.9643C11.3125 17.4574 11.7322 17.8571 12.25 17.8571H19.75C20.2678 17.8571 20.6875 17.4574 20.6875 16.9643V16.0714H25.9612C27.1736 16.0714 28.2458 15.3355 28.6292 14.2399L30.125 9.96629V24.1071Z"/></svg>
                  </a>
                  <a href="#" class="link-action-circle our-values-item__action our-values-item__action--2">
                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="link-action-circle__icon"><path d="M16 0C7.17762 0 0 7.17762 0 16C0 24.8224 7.17762 32 16 32C24.8224 32 32 24.8224 32 16C32 7.17762 24.8224 0 16 0ZM16 29.467C8.57412 29.467 2.533 23.4254 2.533 16C2.533 8.57456 8.57412 2.533 16 2.533C23.4254 2.533 29.467 8.575 29.467 16.0004C29.467 23.4259 23.4254 29.467 16 29.467Z"/><path d="M16.0001 18.4177C11.5003 18.4177 7.29006 20.6236 4.14575 24.6287L6.15525 26.136C8.80938 22.7558 12.3058 20.894 16.0001 20.894C19.6945 20.894 23.1908 22.7558 25.8446 26.136L27.8541 24.6287C24.7098 20.6236 20.4999 18.4177 16.0001 18.4177Z"/><path d="M15.9998 5.6131C12.3684 5.6131 9.41406 8.51992 9.41406 12.0928C9.41406 15.6657 12.3684 18.5726 15.9998 18.5726C19.6312 18.5726 22.5855 15.6658 22.5855 12.0929C22.5855 8.51998 19.6312 5.6131 15.9998 5.6131ZM15.9998 16.0962C13.7653 16.0962 11.9471 14.3005 11.9471 12.0928C11.9471 9.88512 13.7653 8.08939 15.9998 8.08939C18.2343 8.08939 20.0525 9.88555 20.0525 12.0928C20.0525 14.3001 18.2343 16.0962 15.9998 16.0962Z"/></svg>
                  </a>
                </div>
              </div>
              <div class="content our-values-item__content">
                <p>We understand entrepreneurs and the pressures they face. Everything we do is centred on <strong>supporting, and celebrating the entrepreneurial community</strong>.</p>
                <p>Both the brands, run by movers and shakers in the business world who want to get their name or business out there, and the PRs who’ve <strong>taken the bold move to go out alone</strong> and forge an independent career.</p>
              </div>
            </div>
          </div>
          <div id="tabs-freedom" class="tabs-content__item">
            <div class="our-values-item our-values-item--theme_blue">
              <div class="our-values-item__picture">
                <img src="images/our-values-1.jpg" alt="Freedom" class="our-values-item__avatar">
                <div class="our-values-item__actions">
                  <a href="#" class="link-action-circle our-values-item__action our-values-item__action--1">
                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="link-action-circle__icon"><path d="M15.9815 4.65861e-10C15.4079 4.65861e-10 14.8347 0.0308355 14.2644 0.0923063C13.7416 0.145701 13.2253 0.233269 12.7159 0.339524C12.6173 0.360148 12.5187 0.381906 12.4201 0.404666C9.41887 1.08799 6.67838 2.62249 4.5273 4.82415C4.32727 5.02919 4.13145 5.2403 3.93996 5.45742C-1.87073 12.1283 -1.17339 22.2466 5.49755 28.0573C11.8841 33.6203 21.4975 33.2501 27.4374 27.2126C27.6378 27.0076 27.8336 26.7964 28.0248 26.5793C30.5891 23.659 32.0023 19.9048 32 16.0184C32 7.17159 24.8283 -6.6743e-05 15.9815 4.65861e-10ZM5.23906 5.62508C5.32342 5.53751 5.41099 5.45368 5.49695 5.36878C5.59627 5.27107 5.69505 5.17282 5.7965 5.07831C5.88567 4.99502 5.97751 4.91493 6.06881 4.83377C6.17186 4.74246 6.27438 4.65115 6.3801 4.56305C6.47301 4.48456 6.56859 4.40928 6.66363 4.33346C6.77042 4.24802 6.87721 4.16259 6.9872 4.08036C7.08438 4.00721 7.18316 3.9362 7.28247 3.86679C7.393 3.78776 7.50406 3.7066 7.61673 3.63292C7.71764 3.56457 7.81963 3.49836 7.92214 3.43269C8.03641 3.35953 8.15121 3.28745 8.26707 3.21911C8.37139 3.15683 8.47638 3.09556 8.5821 3.03543C8.70031 2.96815 8.81898 2.90247 8.93825 2.8384C9.04504 2.78147 9.15183 2.72574 9.25862 2.67128C9.38036 2.60987 9.50316 2.5506 9.62651 2.4924C9.7333 2.44168 9.84436 2.39095 9.95435 2.3429C10.0798 2.2895 10.2069 2.23611 10.334 2.18271C10.4445 2.13733 10.5545 2.09301 10.6661 2.05029C10.7953 2.00117 10.9261 1.95525 11.057 1.90933C11.1685 1.87035 11.2801 1.83138 11.3933 1.79453C11.5263 1.75182 11.6603 1.7123 11.7949 1.67333C11.9075 1.64076 12.0191 1.60712 12.1323 1.57668C12.1756 1.56547 12.2188 1.55639 12.2621 1.54518C10.6816 3.07981 9.5087 4.98441 8.84961 7.08649C7.58229 6.75224 6.35541 6.2801 5.191 5.67847C5.20862 5.65978 5.22357 5.64109 5.23906 5.62508ZM4.47124 6.48473C5.75385 7.17967 7.11395 7.72096 8.52337 8.09726C7.83244 10.4998 7.46976 12.9847 7.44533 15.4844H1.04329C1.15963 12.188 2.36508 9.02319 4.47124 6.48473ZM4.47124 25.552C2.36521 23.0135 1.15976 19.8487 1.04329 16.5523H7.44533C7.46976 19.0521 7.83237 21.537 8.52337 23.9395C7.11401 24.3159 5.75391 24.8572 4.47124 25.552ZM12.1291 30.4622C12.0213 30.435 11.9097 30.3997 11.7986 30.3672C11.6635 30.3277 11.5279 30.2881 11.3944 30.2449C11.2817 30.2086 11.1707 30.1696 11.0596 30.1306C10.9283 30.0852 10.7969 30.0388 10.6672 29.9891C10.5561 29.9469 10.4467 29.9026 10.3367 29.8578C10.209 29.8044 10.0814 29.751 9.95488 29.6976C9.84596 29.6495 9.73757 29.6001 9.62971 29.5492C9.5053 29.4904 9.38142 29.4306 9.25595 29.3687C9.14916 29.3153 9.04237 29.2619 8.93558 29.2037C8.81491 29.1391 8.6953 29.0729 8.5757 29.0045C8.46891 28.9453 8.36746 28.8844 8.2644 28.8224C8.14694 28.752 8.0316 28.6794 7.91627 28.6051C7.81482 28.5405 7.71337 28.4748 7.61352 28.4076C7.49979 28.3307 7.38713 28.2506 7.27553 28.1705C7.17782 28.1006 7.08011 28.0306 6.984 27.9569C6.87347 27.8736 6.76508 27.7877 6.65722 27.7012C6.56271 27.6259 6.46874 27.5511 6.37636 27.4737C6.26958 27.3851 6.16652 27.2927 6.06294 27.2008C5.97217 27.1202 5.88086 27.0407 5.79222 26.9584C5.69024 26.8634 5.59146 26.7646 5.49215 26.6669C5.40618 26.582 5.31861 26.4982 5.23425 26.4111C5.21876 26.3946 5.20381 26.3775 5.18833 26.3615C6.35267 25.7596 7.57955 25.2872 8.84694 24.9529C9.50617 27.0549 10.679 28.9595 12.2594 30.4942C12.2162 30.483 12.1724 30.4739 12.1291 30.4622ZM15.4476 30.9267C13.1628 30.6021 11.16 28.2175 9.89989 24.6961C11.7217 24.2882 13.5809 24.0693 15.4476 24.0431V30.9267ZM15.4476 22.9752C13.4673 23.0012 11.4954 23.2364 9.56457 23.6768C8.89413 21.3603 8.54046 18.9637 8.51322 16.5523H15.4476V22.9752ZM15.4476 15.4844H8.51322C8.54039 13.0731 8.89406 10.6764 9.56457 8.35996C11.4954 8.80027 13.4674 9.03547 15.4476 9.06157V15.4844ZM15.4476 7.99367C13.5808 7.96764 11.7217 7.74879 9.89989 7.34065C11.16 3.81926 13.1628 1.43465 15.4476 1.11001V7.99367ZM27.4919 6.48473C29.5979 9.02326 30.8034 12.1881 30.9198 15.4844H24.5178C24.4934 12.9847 24.1307 10.4998 23.4397 8.09726C24.8491 7.72076 26.2092 7.17953 27.4919 6.48473ZM19.8297 1.57401C19.9419 1.60178 20.0534 1.63702 20.1645 1.66959C20.2996 1.7091 20.4352 1.74861 20.5687 1.79186C20.6814 1.82817 20.7924 1.86715 20.9035 1.90613C21.0348 1.95151 21.1662 1.99797 21.2959 2.04762C21.407 2.08981 21.5165 2.13412 21.6265 2.17898C21.7541 2.23237 21.8817 2.28576 22.0082 2.33916C22.1172 2.38722 22.2255 2.43667 22.3334 2.4876C22.4578 2.54633 22.5817 2.60613 22.7072 2.66807C22.814 2.72147 22.9207 2.77486 23.0275 2.83306C23.1482 2.89767 23.2678 2.96388 23.3874 3.03222C23.4942 3.09149 23.5957 3.15236 23.6987 3.2143C23.8162 3.28478 23.9315 3.3574 24.0468 3.43162C24.1483 3.49623 24.2497 3.5619 24.3496 3.62918C24.4633 3.70607 24.5755 3.78563 24.687 3.86572C24.7853 3.93566 24.883 4.00615 24.9797 4.0793C25.0896 4.16206 25.1975 4.24802 25.3059 4.33452C25.3999 4.40928 25.4944 4.48403 25.5868 4.56199C25.6935 4.65062 25.7966 4.74299 25.9002 4.83483C25.9909 4.91546 26.0823 4.99502 26.1709 5.07725C26.2729 5.17229 26.3717 5.27107 26.471 5.36878C26.5569 5.45368 26.6445 5.53751 26.7289 5.62454C26.7443 5.64109 26.7593 5.65818 26.7748 5.6742C25.6104 6.27609 24.3836 6.74844 23.1162 7.08275C22.4557 4.98047 21.2813 3.07607 19.6994 1.54198C19.7427 1.55319 19.7865 1.56227 19.8297 1.57401ZM16.5155 1.11001C18.8003 1.43465 20.8031 3.81926 22.0632 7.34065C20.2414 7.74859 18.3823 7.96744 16.5155 7.99367V1.11001ZM16.5155 9.06157C18.4958 9.03554 20.4677 8.80033 22.3985 8.35996C23.069 10.6764 23.4227 13.0731 23.4499 15.4844H16.5155V9.06157ZM16.5155 16.5523H23.4499C23.4227 18.9637 23.069 21.3603 22.3985 23.6768C20.4677 23.2365 18.4958 23.0013 16.5155 22.9752V16.5523ZM16.5155 30.9267V24.0431C18.3823 24.0691 20.2414 24.288 22.0632 24.6961C20.8031 28.2175 18.8003 30.6021 16.5155 30.9267ZM26.7241 26.4117C26.6397 26.4987 26.5527 26.5825 26.4667 26.6674C26.3674 26.7651 26.2681 26.8639 26.1661 26.959C26.0774 27.0417 25.9861 27.1192 25.8954 27.2019C25.7918 27.2938 25.6887 27.3856 25.583 27.4742C25.4896 27.5522 25.3945 27.6275 25.2995 27.7033C25.1927 27.7887 25.0859 27.8742 24.9759 27.9564C24.8787 28.0295 24.78 28.1006 24.6806 28.17C24.5701 28.249 24.4591 28.3301 24.3464 28.4038C24.2455 28.4722 24.1435 28.5384 24.041 28.6035C23.9267 28.6772 23.8116 28.7484 23.6955 28.8171C23.5887 28.8796 23.4867 28.9405 23.3815 29.0008C23.2633 29.0681 23.1445 29.1337 23.0249 29.1978C22.9181 29.2547 22.8113 29.3105 22.7045 29.3649C22.5828 29.4263 22.4599 29.4856 22.3366 29.5438C22.2298 29.5945 22.1188 29.6453 22.0088 29.6933C21.8833 29.7467 21.7562 29.8001 21.6291 29.8535C21.5186 29.8984 21.4086 29.9432 21.2975 29.9854C21.1673 30.035 21.0364 30.0815 20.9051 30.1269C20.794 30.1659 20.683 30.2048 20.5703 30.2411C20.4368 30.2844 20.3033 30.3239 20.1672 30.3629C20.0556 30.396 19.9435 30.4291 19.8308 30.4595C19.7875 30.4707 19.7443 30.4798 19.701 30.491C21.2815 28.9564 22.4544 27.0518 23.1135 24.9497C24.3808 25.284 25.6077 25.7561 26.7721 26.3577C26.7545 26.377 26.7395 26.3957 26.7241 26.4117ZM27.4919 25.552C26.2093 24.8571 24.8492 24.3158 23.4397 23.9395C24.1307 21.537 24.4934 19.0521 24.5178 16.5523H30.9198C30.8036 19.8487 29.598 23.0136 27.4919 25.552Z"/></svg>
                  </a>
                  <a href="#" class="link-action-circle our-values-item__action our-values-item__action--2">
                    <svg width="18" height="24" viewBox="0 0 18 24" xmlns="http://www.w3.org/2000/svg" class="link-action-circle__icon"><path d="M7.01142 16.5809C7.01142 17.7947 6.86234 18.7637 6.56419 19.4878C6.26605 20.2119 5.75493 20.7975 5.03086 21.2447H17.4892V23.96H0.782249V21.7239C1.86836 21.1915 2.63503 20.5952 3.08225 19.935C3.52947 19.2535 3.75308 18.3591 3.75308 17.2517V13.6739H0.782249V11.4697H3.75308V7.22113C3.75308 5.30447 4.33873 3.78178 5.51003 2.65308C6.70262 1.52437 8.31049 0.960022 10.3336 0.960022C11.7392 0.960022 13.0702 1.20493 14.3267 1.69474C15.6045 2.16326 16.7225 2.84474 17.6809 3.73919L16.467 6.19891C15.5299 5.36835 14.5503 4.74011 13.5281 4.31419C12.5272 3.86697 11.5369 3.64335 10.5572 3.64335C9.42854 3.64335 8.5554 3.97345 7.9378 4.63363C7.32021 5.27252 7.01142 6.20956 7.01142 7.44474V11.4697H12.6656V13.6739H7.01142V16.5809Z"/></svg>
                  </a>
                </div>
              </div>
              <div class="content our-values-item__content">
                <p>We understand entrepreneurs and the pressures they face. Everything we do is centred on <strong>supporting, and celebrating the entrepreneurial community</strong>.</p>
                <p>Both the brands, run by movers and shakers in the business world who want to get their name or business out there, and the PRs who’ve <strong>taken the bold move to go out alone</strong> and forge an independent career.</p>
              </div>
            </div>
          </div>
          <div id="tabs-quality" class="tabs-content__item">
            <div class="our-values-item our-values-item--theme_red">
              <div class="our-values-item__picture">
                <img src="images/our-values-1.jpg" alt="Quality" class="our-values-item__avatar">
                <div class="our-values-item__actions">
                  <a href="#" class="link-action-circle our-values-item__action our-values-item__action--1">
                    <svg width="32" height="27" viewBox="0 0 32 27" xmlns="http://www.w3.org/2000/svg" class="link-action-circle__icon"><path d="M31.0684 3.57166C31.0664 3.57166 31.0645 3.57143 31.0625 3.57143H22.5625V2.67857C22.5625 1.20164 21.3008 0 19.75 0H12.25C10.6992 0 9.4375 1.20164 9.4375 2.67857V3.57143H0.9375C0.415527 3.57143 0 3.97879 0 4.46429V24.1071C0 25.5841 1.26172 26.7857 2.8125 26.7857H29.1875C30.7383 26.7857 32 25.5841 32 24.1071V4.48312C32 4.48196 32 4.48079 32 4.47963C31.9641 3.89323 31.5854 3.57492 31.0684 3.57166V3.57166ZM11.3125 2.67857C11.3125 2.18634 11.7332 1.78571 12.25 1.78571H19.75C20.2668 1.78571 20.6875 2.18634 20.6875 2.67857V3.57143H11.3125V2.67857ZM29.7617 5.35714L26.8503 13.6751C26.7227 14.0404 26.3652 14.2857 25.9612 14.2857H20.6875V13.3929C20.6875 12.8997 20.2678 12.5 19.75 12.5H12.25C11.7322 12.5 11.3125 12.8997 11.3125 13.3929V14.2857H6.03882C5.63477 14.2857 5.27734 14.0404 5.14966 13.6751L2.23828 5.35714H29.7617ZM18.8125 14.2857V16.0714H13.1875V14.2857H18.8125ZM30.125 24.1071C30.125 24.5994 29.7043 25 29.1875 25H2.8125C2.29565 25 1.875 24.5994 1.875 24.1071V9.96629L3.37085 14.2399C3.75415 15.3355 4.82642 16.0714 6.03882 16.0714H11.3125V16.9643C11.3125 17.4574 11.7322 17.8571 12.25 17.8571H19.75C20.2678 17.8571 20.6875 17.4574 20.6875 16.9643V16.0714H25.9612C27.1736 16.0714 28.2458 15.3355 28.6292 14.2399L30.125 9.96629V24.1071Z"/></svg>
                  </a>
                  <a href="#" class="link-action-circle our-values-item__action our-values-item__action--2">
                    <svg width="31" height="28" viewBox="0 0 31 28" xmlns="http://www.w3.org/2000/svg" class="link-action-circle__icon"><path d="M18.9786 10.695L15.5036 0L12.0285 10.695H0.783081L9.88083 17.305L6.4058 28L15.5036 21.3901L24.6013 28L21.1263 17.305L30.224 10.695H18.9786ZM27.2467 11.6624H18.2757L15.5036 3.1305L12.7314 11.6624H3.76036L11.0181 16.9354L8.24586 25.4674L15.5036 20.1944L22.7612 25.4674L19.9891 16.9354L27.2467 11.6624Z"/></svg>
                  </a>
                </div>
              </div>
              <div class="content our-values-item__content">
                <p>We want matches to deliver results and demonstrate the power of PR, so <strong>we vet every PR on the platform and will support our freelancers to enhance their skills</strong>, providing training on how to continue striving to be the best.</p>
                <p>Our focus on SMEs and founders mean <strong>we get the most exciting briefs and we educate new-to-PR businesses on how to get the best from their new working relationship</strong>, whilst our platform is also trusted by big brands who want to supplement the work their existing agency is doing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- our-values END -->
  <!-- founder BEGIN -->
  <section class="founder">
    <div class="container">
      <h2 class="section-title founder__title">Meet our founder</h2>
      <div class="founder__body">
        <div class="founder__content">
          <div class="founder__name">Lizzie Earl</div>
          <div class="founder__text">“I love PR. I believe in the power of it and now I get to help even more businesses and individuals across the UK have access to the best solution for them, and benefit from the results excellent PR can bring.”</div>
        </div>
        <div class="founder__picture">
          <img src="images/founder-img.jpg" alt="Lizzie Earl" class="founder__img">
        </div>
      </div>
      <div class="content founder__description">
        <p>“My PR agency Munch was started from a laptop in Bali, as I did the nomadic freelancer thing in my twenties. I was delivering agency quality campaigns for individuals and brands as a one person team, and giving my clients excellent value for a fraction of the cost they would have paid for my same plan and same results at the big agencies I’d been working at before</p>
        <p>“On my return to the UK, I took this philosophy to launch my PR firm Munch. Big agency thinking with a boutique approach to give everyone - big budgets or small - the chance to access top quality strategy, creativity and delivery and have an excellent, often first, PR experience.</p>
        <p>“At the end of 2019, I decided I needed to flex my entrepreneurial spirit further and put Munch on a sabbatical to give me time to focus on new ideas and ventures. I put my out of office on and immediately started writing a business plan for what would soon become Nibble.</p>
        <p>“I knew that there were thousands of brands and businesses who could achieve their PR and business goals by working with a freelancer - someone with all the expertise, hungry to deliver and with no overheads. The challenge: they often thought the easily Googleable PR agency was their first port of call, and so freelancers were rarely even considered.</p>
        <p>“Fast forward to today and we’ve built a tool that will give businesses wanting top quality PR an alternative option, one single marketplace with the best of the best from the UK PR world and a process that makes finding, matching and working with them quick, effortless and cultivating an environment for success.”</p>
      </div>
    </div>
  </section>
  <!-- founder END -->
  <!-- journey BEGIN -->
  <section class="journey">
    <div class="container">
      <div class="journey__inner">
        <h2 class="section-title journey__title">My business journey</h2>
      </div>
    </div>

  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="img/ab-2.png" alt=""></div>
      <div class="swiper-slide"><img src="img/ab-3.png" alt=""></div>
      <div class="swiper-slide"><img src="img/ab-4.png" alt=""></div>
      <div class="swiper-slide"><img src="img/ab-5.png" alt=""></div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"><img src="img/arrow.svg" alt=""></div>
    <div class="swiper-button-prev"><img src="img/arrow.svg" alt=""></div>
  </div>

  </section>
</div>
`;
const replaceClassNameHtml = (txt) => {
    let patrn =/class="[a-zA-Z0-9-_ ]{0,}"/mg;

    let res = txt.replace(patrn, callbackMatch);

    return res;
}

const callbackMatch = (match) => {
    let matchPatrn = /[a-zA-Z0-9-_]{0,}\w/mg;

    let result = match.replace(matchPatrn, (match, offset) => {
        if (
                offset === 0 || 
                match === 'fa-linkedin' || 
                match === 'fab' || 
                match === 'swiper-container' ||
                match === 'swiper-wrapper' ||
                match === 'swiper-slide' ||
                match === 'swiper-button-next' ||
                match === 'swiper-button-prev' ||
                match === 'active'
            ){
            return match;
        }
        else{
            return match + '_mrk1';
        }
    })

    return result;
}

console.log(replaceClassNameHtml(text));