import React, { useEffect } from 'react'
import '../css/user/faq.min.css'
import './faq.min.js'

export default function Faq() {

    /**
 * Herbalist
 * Herbalist – is a website template created for selling the cannabis, medical marijuana and CBD products, cannabis blogging and others
 * Exclusively on https://1.envato.market/herbalist-html
 *
 * @encoding        UTF-8
 * @version         1.0.4
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilit (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/

  useEffect(() => {
    const handleAccordion = () => {
      const headers = document.querySelectorAll('.accordion_component-item_header');
      const icons = document.querySelectorAll('.accordion_component-item_header .icon');
      const collapses = document.querySelectorAll('[data-scroll="true"] .collapse');

      headers.forEach((header, index) => {
        header.addEventListener('click', (event) => {
          event.preventDefault();
          for (let i = 0; i < icons.length; i++) {
            icons[i].classList.remove('transform');
          }
          if (event.target.classList.contains('collapsed')) {
            icons[index].classList.remove('transform');
          } else {
            icons[index].classList.add('transform');
          }
        });

        if (collapses.length !== 0) {
          collapses[index].addEventListener('shown.bs.collapse', (event) => {
            const collapseHeight = parseFloat(window.getComputedStyle(collapses[index]).height);
            if (window.pageYOffset > 500) {
              window.scrollTo(0, window.pageYOffset - (collapseHeight - 200));
            }
          });
        }
      });
    };

    handleAccordion();
  }, []);

  

  return (
    <>
        {/* FAQ content start */}
        <main>
            {/* Features section start */}
            <div className="accordion section">
                <div className="container">
                    <div className="accordion_component" id="accordionComponent">
                        {/* item 1 */}
                        <div className="accordion_component-item">
                            <h4
                                className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#item-1"
                            >
                                How Long Does It Take to Ship Orders?
                                <span className="wrapper">
                                    <i className="icon-caret_down icon"></i>
                                </span>
                            </h4>
                            <div id="item-1" className="accordion-collapse collapse" data-bs-parent="#accordionComponent">
                                <div className="accordion_component-item_body">
                                    Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel pretium
                                    lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Elementum
                                    pulvinar etiam.
                                </div>
                            </div>
                        </div>
                        {/* item 2 */}
                        <div className="accordion_component-item">
                            <h4
                                className="accordion_component-item_header d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse"
                                data-bs-target="#item-2"
                            >
                                What Are The Different Types Of Marijuana Strains?
                                <span className="wrapper">
                                    <i className="icon-caret_down icon transform"></i>
                                </span>
                            </h4>
                            <div id="item-2" className="accordion-collapse collapse show" data-bs-parent="#accordionComponent">
                                <div className="accordion_component-item_body">
                                    Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel pretium
                                    lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Elementum
                                    pulvinar etiam non quam lacus. Eget nunc scelerisque viverra mauris in. Nam at lectus urna duis
                                    convallis convallis tellus id. Nunc eget lorem dolor sed. In dictum non consectetur a erat nam
                                </div>
                            </div>
                        </div>
                        {/* item 3 */}
                        <div className="accordion_component-item">
                            <h4
                                className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#item-3"
                            >
                                What's The Difference Between Grown Cannabis?
                                <span className="wrapper">
                                    <i className="icon-caret_down icon"></i>
                                </span>
                            </h4>
                            <div id="item-3" className="accordion-collapse collapse" data-bs-parent="#accordionComponent">
                                <div className="accordion_component-item_body">
                                    Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel pretium
                                    lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Elementum
                                    pulvinar etiam non quam lacus. Eget nunc scelerisque viverra mauris in.
                                </div>
                            </div>
                        </div>
                        {/* item 4 */}
                        <div className="accordion_component-item">
                            <h4
                                className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#item-4"
                            >
                                Are Indoor CBD Seeds Worth Buying?
                                <span className="wrapper">
                                    <i className="icon-caret_down icon"></i>
                                </span>
                            </h4>
                            <div id="item-4" className="accordion-collapse collapse" data-bs-parent="#accordionComponent">
                                <div className="accordion_component-item_body">
                                    Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel pretium
                                    lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Elementum
                                    pulvinar etiam non quam lacus. Eget nunc scelerisque viverra mauris in. Elementum pulvinar etiam non
                                    quam lacus. Eget nunc scelerisque viverra mauris in.
                                </div>
                            </div>
                        </div>
                        {/* item 5 */}
                        <div className="accordion_component-item">
                            <h4
                                className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#item-5"
                            >
                                Is There A Difference Between Medical Cannabis?
                                <span className="wrapper">
                                    <i className="icon-caret_down icon"></i>
                                </span>
                            </h4>
                            <div id="item-5" className="accordion-collapse collapse" data-bs-parent="#accordionComponent">
                                <div className="accordion_component-item_body">
                                    Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel pretium
                                    lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Elementum
                                    pulvinar etiam non quam lacus.
                                </div>
                            </div>
                        </div>
                        {/* item 6 */}
                        <div className="accordion_component-item">
                            <h4
                                className="accordion_component-item_header d-flex justify-content-between align-items-center collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#item-6"
                            >
                                Best Selling Cannabis Strain?
                                <i className="icon-caret_down icon"></i>
                            </h4>
                            <div id="item-6" className="accordion-collapse collapse" data-bs-parent="#accordionComponent">
                                <div className="accordion_component-item_body">
                                    Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel pretium
                                    lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Elementum
                                    pulvinar etiam non quam lacus. Sit amet tellus cras adipiscing enim.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features section start */}
            {/* <section className="features section">
                <div className="container">
                    <div className="features_header">
                        <h2 className="features_header-title">We Provide High Quality <span className="linebreak">Cannabis Products</span></h2>
                        <p className="features_header-text">
                            Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem
                        </p>
                    </div>
                    <ul className="features_list features-list d-md-flex flex-wrap justify-content-xl-between">
                        <li
                            className="features-list_item col-md-6 col-xl-3 d-flex flex-column align-items-center"
                            data-order="1"
                            data-aos="fade-up"
                        >
                            <span className="icon d-flex align-items-center justify-content-center">
                                <svg className="" width="50" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M31.6328 28.5714C31.6328 25.1954 34.3793 22.449 37.7553 22.449C41.1313 22.449 43.8777 25.1954 43.8777 28.5714C43.8777 31.9474 41.1318 34.6939 37.7553 34.6939C34.3793 34.6939 31.6328 31.9474 31.6328 28.5714ZM34.694 28.5714C34.694 30.2597 36.067 31.6326 37.7553 31.6326C39.4435 31.6326 40.8165 30.2598 40.8165 28.5714C40.8165 26.8832 39.4435 25.5102 37.7553 25.5102C36.067 25.5102 34.694 26.8832 34.694 28.5714Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.2246 28.5714C11.2246 25.1954 13.9711 22.449 17.3471 22.449C20.723 22.449 23.4695 25.1954 23.4695 28.5714C23.4695 31.9474 20.723 34.6939 17.3471 34.6939C13.9711 34.6939 11.2246 31.9474 11.2246 28.5714ZM14.2858 28.5714C14.2858 30.2597 15.6588 31.6326 17.3471 31.6326C19.0353 31.6326 20.4083 30.2598 20.4083 28.5714C20.4083 26.8832 19.0348 25.5102 17.3471 25.5102C15.6588 25.5102 14.2858 26.8832 14.2858 28.5714Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M40.9047 5.85977C40.6207 5.39516 40.0431 5.10205 39.4115 5.10205H31.6113V7.85397H38.3811L42.9309 15.3061L45.9175 14.0696L40.9047 5.85977Z"
                                        fill="currentColor"
                                    />
                                    <rect x="21.4277" y="25.5103" width="11.2245" height="4.08163" fill="currentColor" />
                                    <path
                                        d="M10.5642 25.5103H4.74045C3.81252 25.5103 3.06055 26.4239 3.06055 27.5511C3.06055 28.6784 3.81262 29.5919 4.74045 29.5919H10.5643C11.4923 29.5919 12.2442 28.6782 12.2442 27.5511C12.2442 26.4238 11.4921 25.5103 10.5642 25.5103Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M49.6733 17.5633L46.6175 13.4888C46.3239 13.0963 45.8708 12.8668 45.3907 12.8668H34.1014V1.60832C34.1014 0.719925 33.4059 0 32.5479 0H6.65508C5.79696 0 5.10156 0.720024 5.10156 1.60832C5.10156 2.49661 5.79706 3.21663 6.65508 3.21663H30.9943V14.4751C30.9943 15.3635 31.6898 16.0835 32.5478 16.0835H44.6299L46.8924 19.1007V27.3956H42.5942C41.736 27.3956 41.0406 28.1156 41.0406 29.0039C41.0406 29.8923 41.7361 30.6122 42.5942 30.6122H48.4459C49.304 30.6122 49.9994 29.8922 49.9995 29.0039V18.5498C49.9995 18.1927 49.8846 17.8453 49.6733 17.5633Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M10.6991 18.3673H3.58707C2.73307 18.3673 2.04102 19.281 2.04102 20.4081C2.04102 21.5354 2.73316 22.4489 3.58707 22.4489H10.699C11.553 22.4489 12.2451 21.5353 12.2451 20.4081C12.2452 19.281 11.553 18.3673 10.6991 18.3673Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M15.7001 12.2449H1.64682C0.737262 12.2449 0 13.1585 0 14.2858C0 15.413 0.737262 16.3265 1.64682 16.3265H15.7001C16.6098 16.3265 17.3469 15.4129 17.3469 14.2858C17.3469 13.1586 16.6098 12.2449 15.7001 12.2449Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M17.7411 6.12244H3.68784C2.77818 6.12244 2.04102 7.03609 2.04102 8.16325C2.04102 9.29055 2.77828 10.2041 3.68784 10.2041H17.7411C18.6508 10.2041 19.388 9.29042 19.388 8.16325C19.3881 7.03609 18.6508 6.12244 17.7411 6.12244Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <h4 className="title">Free Shipping & Returns</h4>
                            <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc</p>
                        </li>
                        <li
                            className="features-list_item col-md-6 col-xl-3 d-flex flex-column align-items-center"
                            data-order="2"
                            data-aos="fade-up"
                        >
                            <span className="icon d-flex align-items-center justify-content-center">
                                <svg className="" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 25C0 11.2156 11.2156 0 25 0C38.7844 0 50 11.2156 50 25C50 38.7844 38.7844 50 25 50C11.2156 50 0 38.7844 0 25ZM3.125 25C3.125 37.0625 12.9375 46.875 25 46.875C37.0625 46.875 46.875 37.0625 46.875 25C46.875 12.9375 37.0625 3.125 25 3.125C12.9375 3.125 3.125 12.9375 3.125 25Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M25.5109 23.9229C22.8562 23.9229 20.613 22.4689 20.613 20.7483C20.613 19.0277 22.8562 17.5737 25.5109 17.5737C27.013 17.5737 28.404 18.0308 29.3248 18.8245C29.9975 19.4054 31.026 19.3515 31.6301 18.6912C32.2309 18.0372 32.1689 17.034 31.493 16.4499C30.3501 15.4626 28.8154 14.7959 27.1436 14.5324V12.8118C27.1436 11.9356 26.4121 11.2245 25.5109 11.2245C24.6097 11.2245 23.8783 11.9356 23.8783 12.8118V14.5261C20.1558 15.1166 17.3477 17.6816 17.3477 20.7483C17.3477 24.2499 21.0113 27.0975 25.5109 27.0975C28.1656 27.0975 30.4089 28.5515 30.4089 30.2721C30.4089 31.9927 28.1656 33.4467 25.5109 33.4467C24.0089 33.4467 22.6179 32.9896 21.697 32.1959C21.0244 31.6118 19.9926 31.6689 19.3917 32.3292C18.7909 32.9832 18.853 33.9864 19.5289 34.5705C20.6717 35.561 22.2064 36.2245 23.8783 36.4912V38.2086C23.8783 39.0848 24.6097 39.7959 25.5109 39.7959C26.4121 39.7959 27.1436 39.0848 27.1436 38.2086V36.4943C30.866 35.9039 33.6742 33.3388 33.6742 30.2721C33.6742 26.7705 30.0105 23.9229 25.5109 23.9229Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <h4 className="title">Money Back Guarantee</h4>
                            <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                        </li>
                        <li
                            className="features-list_item col-md-6 col-xl-3 d-flex flex-column align-items-center"
                            data-order="3"
                            data-aos="fade-up"
                        >
                            <span className="icon d-flex align-items-center justify-content-center">
                                <svg className="" width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M41.2292 20.6684H41.3542C44.2277 20.6684 46.2265 23.8244 46.2264 26.485V34.2202C46.2264 36.6336 44.5398 38.3044 41.8538 38.49L40.6669 40.2227C38.3206 43.3138 34.6389 45.126 30.7349 45.1113C30.5595 46.2319 30.0354 47.2703 29.2356 48.0817C28.0503 49.2834 26.4339 49.9728 24.7381 50C21.3125 50.0002 18.5257 47.2672 18.4915 43.8738C18.5146 40.9805 20.5779 38.4977 23.4397 37.9196C26.7861 37.2434 30.0524 39.3828 30.7349 42.698C33.8524 42.7127 36.7936 41.2673 38.6681 38.7995L38.793 38.6139H37.3563C37.3328 38.6128 37.3092 38.611 37.2858 38.6086C36.634 38.5395 36.1622 37.9601 36.2319 37.3144V22.1535C36.2319 21.4108 36.6692 20.6683 37.3563 20.6683H38.7306V17.6361C38.7306 9.26299 31.8786 2.47514 23.4264 2.47514C14.9742 2.47514 8.12218 9.26299 8.12218 17.6361V20.6683H9.49645C10.1836 20.6683 10.6208 21.4109 10.6208 22.1535V37.3144C10.6233 37.3376 10.6251 37.361 10.6262 37.3843C10.6571 38.0329 10.1512 38.5836 9.49645 38.614H4.87398L4.85772 38.6138C4.84166 38.6136 4.82563 38.6133 4.80954 38.6128C2.08503 38.5442 -0.0676036 36.3007 0.00162401 33.6017V25.8665C0.00162401 23.0817 2.12544 20.6684 4.87398 20.6684H5.62353V17.6362C5.62353 7.89601 13.594 0 23.4264 0C33.2587 0 41.2292 7.89601 41.2292 17.6362V20.6684ZM4.87398 36.1387H8.12218V23.1436H4.87398C3.49971 23.1436 2.50027 24.4431 2.50027 25.8664V33.6015C2.4992 33.6236 2.49836 33.6455 2.49776 33.6674C2.465 34.9999 3.52888 36.1063 4.87398 36.1387ZM27.4242 46.3492C26.732 47.0928 25.7593 47.5186 24.7382 47.525C22.7059 47.493 21.0566 45.8864 20.9903 43.8739C20.9894 41.8575 22.6388 40.2222 24.6743 40.2214C26.7097 40.2206 28.3604 41.8545 28.3613 43.8709V43.8739C28.4133 44.7927 28.0732 45.6909 27.4242 46.3492ZM41.3542 36.1387C42.1037 36.1387 43.7279 35.8912 43.7279 34.2204V26.4852C43.7279 25.062 42.7284 23.1437 41.3542 23.1437H38.7306V36.1387H41.3542Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <h4 className="title">Online Support</h4>
                            <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                        </li>
                        <li
                            className="features-list_item col-md-6 col-xl-3 d-flex flex-column align-items-center"
                            data-order="4"
                            data-aos="fade-up"
                        >
                            <span className="icon d-flex align-items-center justify-content-center">
                                <svg className="" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M47.311 27.6956C46.4686 27.6956 45.7849 28.3823 45.7849 29.2284V39.9578H3.05233V21.5645H19.8401C20.6826 21.5645 21.3663 20.8778 21.3663 20.0318C21.3663 19.1857 20.6826 18.499 19.8401 18.499H3.05233V12.3679H19.8401C20.6826 12.3679 21.3663 11.6812 21.3663 10.8351C21.3663 9.98905 20.6826 9.30237 19.8401 9.30237H3.05233C1.36744 9.30237 0 10.6757 0 12.3679V39.9578C0 41.6499 1.36744 43.0233 3.05233 43.0233H45.7849C47.4698 43.0233 48.8372 41.6499 48.8372 39.9578V29.2284C48.8372 28.3823 48.1535 27.6956 47.311 27.6956Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M14.7285 27.907H8.52695C7.67114 27.907 6.97656 28.6884 6.97656 29.6512C6.97656 30.614 7.67114 31.3954 8.52695 31.3954H14.7285C15.5843 31.3954 16.2789 30.614 16.2789 29.6512C16.2789 28.6884 15.5843 27.907 14.7285 27.907Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M38.3926 0.1248L49.0758 4.83422C49.6374 5.08225 50.0006 5.65052 50.0006 6.27844V12.5577C50.0006 21.2073 46.8964 26.2558 38.5514 31.1881C38.3163 31.3263 38.0538 31.3953 37.7913 31.3953C37.5288 31.3953 37.2663 31.3263 37.0313 31.1881C28.6862 26.2432 25.582 21.1947 25.582 12.5577V6.27844C25.582 5.65052 25.9453 5.08225 26.5038 4.83422L37.187 0.1248C37.5746 -0.0415999 38.005 -0.0415999 38.3926 0.1248ZM37.7913 28.0046C44.6163 23.7975 46.9483 19.807 46.9483 12.5577V7.31451L37.7913 3.27697L28.6344 7.31451V12.5577C28.6344 19.7976 30.9663 23.7881 37.7913 28.0046Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M42.4773 9.62645C41.8524 9.11805 40.9396 9.21674 40.4338 9.85971L35.8643 15.7392L34.0562 12.9579C33.6056 12.2701 32.7016 12.0877 32.0417 12.5423C31.3761 12.9998 31.1929 13.9299 31.6377 14.6147L34.5445 19.1006C34.8033 19.4983 35.2277 19.7436 35.6928 19.7675C35.7131 19.7675 35.7364 19.7675 35.7538 19.7675C36.1927 19.7675 36.6113 19.5641 36.8904 19.2053L42.7041 11.7288C43.2041 11.0829 43.1052 10.1438 42.4773 9.62645Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <h4 className="title">100% Secure Payment</h4>
                            <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                        </li>
                    </ul>
                </div>
            </section> */}
            {/* Features section end */}
            {/* Instagram section start */}
            {/* <section className="instagram">
                <div className="container">
                    <div className="instagram_header">
                        <h2 className="instagram_header-title">Follow Us on Instagram</h2>
                        <p className="instagram_header-text">
                            Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem
                        </p>
                    </div>
                </div>
                <div className="instagram_slider swiper">
                    <div className="swiper-wrapper" id="components">
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcSet="img/orange.png" srcSet="img/orange.png" type="image/webp" />
                                    <img className="lazy" data-src="img/orange.png" src="img/orange.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcSet="img/alovera.png" srcSet="img/alovera.png" type="image/webp" />
                                    <img className="lazy" data-src="img/alovera.png" src="img/alovera.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcSet="img/amla.png" srcSet="img/amla.png" type="image/webp" />
                                    <img className="lazy" data-src="img/amla.png" src="img/amla.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcSet="img/reetha.png" srcSet="img/reetha.png" type="image/webp" />
                                    <img className="lazy" data-src="img/reetha.png" src="img/reetha.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcSet="img/tulsi.png" srcSet="img/tulsi.png" type="image/webp" />
                                    <img className="lazy" data-src="img/tulsi.png" src="img/tulsi.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcSet="img/hibiscus.png" srcSet="img/hibiscus.png" type="image/webp" />
                                    <img className="lazy" data-src="img/hibiscus.png" src="img/hibiscus.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcSet="img/shikakai insta.png" srcSet="img/shikakai insta.png" type="image/webp" />
                                    <img className="lazy" data-src="img/shikakai insta.png" src="img/shikakai insta.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcSet="img/brahmi leaf.png" srcSet="img/brahmi leaf.png" type="image/webp" />
                                    <img className="lazy" data-src="img/brahmi leaf.png" src="img/brahmi leaf.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Instagram section end */}
         
        </main>
    </>
  )
}
