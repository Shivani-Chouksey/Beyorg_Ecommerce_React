import React from 'react';
import '../css/user/cart.min.css';
import hibiscus from '../img/hibiscus powder.png';
import shikakai from '../img/shikakai powder.png'
export default function Cart() {
  return (
    <>
      <header className="page">
            <div className="page_main container-fluid">
                <div className="container">
                    <h1 className="page_header">Cart page</h1>
                    <p className="page_text">Beyorg's pride goes beyond organic. Nothing to hide, and everything is natural. </p>
                </div>
            </div>
            <div className="container">
                <ul className="page_breadcrumbs d-flex flex-wrap">
                    <li className="page_breadcrumbs-item">
                        <a className="link" href="index.html">Home</a>
                    </li>

                    <li className="page_breadcrumbs-item current">
                        <span>Cart page</span>
                    </li>
                </ul>
            </div>
        </header>
        {/* <!-- Cart content start --> */}
        <main>
            <section className="cart section">
                <div className="container d-md-flex justify-content-between align-content-start">
                    <div className="cart_main">
                        <h3 className="cart_main-header d-flex align-items-center justify-content-between">
                            Products
                            <span>2 Items</span>
                        </h3>
                        <ul className="cart_main-list">
                            <li className="cart_main-list_item">
                                <div className="wrapper d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between">
                                    <div className="wrapper_item d-flex align-items-center">
                                        <div className="wrapper_item-media">
                                            <picture>
                                                <source data-srcset={hibiscus} srcset={hibiscus} type="image/webp" />
                                                <img className="lazy" data-src={hibiscus} src={hibiscus} alt="media" />
                                            </picture>
                                        </div>
                                        <div className="wrapper_item-info">
                                            <h4 className="title">hibiscus powder</h4>
                                            <span className="volume">100gm</span>
                                        </div>
                                    </div>
                                    <div className="price_wrapper d-flex flex-column">
                                        <span className="price price--old">₹250</span>
                                        <span className="price price--new">₹150</span>
                                    </div>
                                    <div className="price_wrapper price_wrapper--subtotal d-flex flex-column">
                                        <h5 className="title">Subtotal</h5>
                                        <span className="price price--total">₹550</span>
                                    </div>
                                    <div className="qty d-flex align-items-center justify-content-between">
                                        <span className="qty_minus control disabled d-flex align-items-center">
                                            <i className="icon-minus"></i>
                                        </span>
                                        <input className="qty_amount" type="number" readonly value="1" min="1" max="99" />
                                        <span className="qty_plus control d-flex align-items-center">
                                            <i className="icon-plus"></i>
                                        </span>
                                    </div>
                                    <a className="close d-flex align-items-center align-items-sm-start" href="#">
                                        <i className="icon-close"></i>
                                    </a>
                                </div>
                            </li>
                            <li className="cart_main-list_item">
                                <div className="wrapper d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between">
                                    <div className="wrapper_item d-flex align-items-center">
                                        <div className="wrapper_item-media">
                                            <picture>
                                                <source data-srcset={shikakai} srcset={shikakai} type="image/webp" />
                                                <img className="lazy" data-src={shikakai} src={shikakai} alt="media" />
                                            </picture>
                                        </div>
                                        <div className="wrapper_item-info">
                                            <h4 className="title">shikakai powder</h4>
                                            <span className="volume">100gm</span>
                                        </div>
                                    </div>
                                    <div className="price_wrapper d-flex flex-column">
                                        <span className="price price--old">₹350</span>
                                        <span className="price price--new">₹250</span>
                                    </div>
                                    <div className="price_wrapper price_wrapper--subtotal d-flex flex-column">
                                        <h5 className="title">Subtotal</h5>
                                        <span className="price price--total">₹550</span>
                                    </div>
                                    <div className="qty d-flex align-items-center justify-content-between">
                                        <span className="qty_minus control disabled d-flex align-items-center">
                                            <i className="icon-minus"></i>
                                        </span>
                                        <input className="qty_amount" type="number" readonly value="1" min="1" max="99" />
                                        <span className="qty_plus control d-flex align-items-center">
                                            <i className="icon-plus"></i>
                                        </span>
                                    </div>
                                    <a className="close d-flex align-items-center align-items-sm-start" href="#">
                                        <i className="icon-close"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className="cart_main-action d-flex flex-column flex-sm-row align-items-center justify-content-sm-between">
                            <a className="btn--underline" href="#">Keep Shopping</a>
                            <a className="btn btn--green" href="#">Update cart</a>
                        </div>
                    </div>
                    <div className="cart_summary">
                        <h3 className="cart_summary-header">Order Summary</h3>
                        <form className="cart_summary-form" action="#" method="post">
                            <h5 className="cart_summary-form_header">Calculate Shipping</h5>
                            <input className="cart_summary-form_field field" type="text" placeholder="Country" />
                            <input className="cart_summary-form_field field" type="text" placeholder="City" />
                            <input className="cart_summary-form_field field" type="text" placeholder="ZIP" />
                            <button className="cart_summary-form_btn btn--underline" type="submit">Submit</button>
                        </form>
                        <div className="cart_summary-table">
                            <div className="cart_summary-table_row d-flex justify-content-between">
                                <span className="property">Items 2</span>
                                <span className="value">₹150</span>
                            </div>
                            <div className="cart_summary-table_row d-flex justify-content-between">
                                <span className="property">Shipping</span>
                                <span className="value">Free</span>
                            </div>
                            <div className="cart_summary-table_row cart_summary-table_row--total d-flex justify-content-between">
                                <span className="property">Total</span>
                                <span className="value">₹5150</span>
                            </div>
                        </div>
                        <a className="cart_summary-btn btn" href="#">Order Now</a>
                    </div>
                </div>
            </section>
            <aside>
                {/* <!-- <section className="top top--highlight section">
                    <div className="container">
                        <h2 className="top_header">Top Sales Products</h2>
                        <ul className="top_list d-lg-flex flex-wrap">
                            <li className="top_list-item col-lg-6" data-order="1">
                                <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                    <div className="media">
                                        <a href="product.html" target="_blank" rel="noopener norefferer">
                                            <picture>
                                                <source data-srcset="img/Tulsi leaf powder.png" srcset="img/Tulsi leaf powder.png" type="image/webp" />
                                                <img className="lazy" data-src="img/Tulsi leaf powder.png" src="img/Tulsi leaf powder.png" alt="media" />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="main d-md-flex flex-column">
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >Tulsi leaf powder</a
                                        >
                                        <ul className="main_table d-flex flex-column">
                                            <li className="list-item">
                                                <span className="property">THC</span>
                                                <span className="value">110.00-160.00%</span>
                                            </li>
                                            <li className="list-item">
                                                <span className="property">CBD</span>
                                                <span className="value">100gm</span>
                                            </li>
                                        </ul>
                                        <div className="main_price">
                                            <span className="price price--old">₹550</span>
                                            <span className="price price--new">₹330</span>
                                        </div>
                                        <div className="d-flex">
                                            <a className="btn" href="#">Add to Cart</a>
                                            <div className="action d-flex">
                                                <a
                                                    className="action_link d-flex align-items-center justify-content-center"
                                                    href="#"
                                                    data-role="wishlist"
                                                >
                                                    <i className="icon-heart"></i>
                                                </a>
                                                <a
                                                    className="action_link d-flex align-items-center justify-content-center"
                                                    href="#"
                                                    data-trigger="view"
                                                >
                                                    <i className="icon-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="top_list-item col-lg-6" data-order="2">
                                <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                    <div className="media">
                                        <a href="product.html" target="_blank" rel="noopener norefferer">
                                            <picture>
                                                <source data-srcset="img/calamine clay powder.png" srcset="img/calamine clay powder.png" type="image/webp" />
                                                <img className="lazy" data-src="img/calamine clay powder.png" src="img/calamine clay powder.png" alt="media" />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="main d-md-flex flex-column">
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">calamine clay powder</a>
                                        <ul className="main_table d-flex flex-column">
                                            <li className="list-item">
                                                <span className="property">THC</span>
                                                <span className="value">110.00-160.00%</span>
                                            </li>
                                            <li className="list-item">
                                                <span className="property">CBD</span>
                                                <span className="value">0.00-1.00mg/g</span>
                                            </li>
                                        </ul>
                                        <div className="main_price">
                                            <span className="price price--old">₹550</span>
                                            <span className="price price--new">₹330</span>
                                        </div>
                                        <div className="d-flex">
                                            <a className="btn" href="#">Add to Cart</a>
                                            <div className="action d-flex">
                                                <a
                                                    className="action_link d-flex align-items-center justify-content-center"
                                                    href="#"
                                                    data-role="wishlist"
                                                >
                                                    <i className="icon-heart"></i>
                                                </a>
                                                <a
                                                    className="action_link d-flex align-items-center justify-content-center"
                                                    href="#"
                                                    data-trigger="view"
                                                >
                                                    <i className="icon-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="top_list-item col-lg-6" data-order="3">
                                <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                    <div className="media">
                                        <a href="product.html" target="_blank" rel="noopener norefferer">
                                            <picture>
                                                <source data-srcset="img/Moroccan combo.jpg" srcset="img/Moroccan combo.jpg" type="image/webp" />
                                                <img className="lazy" data-src="img/Moroccan combo.jpg" src="img/Moroccan combo.jpg" alt="media" />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="main d-md-flex flex-column">
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >Moroccan poWDER combo powder</a
                                        >
                                        <ul className="main_table d-flex flex-column">
                                            <li className="list-item">
                                                <span className="property">THC</span>
                                                <span className="value">110.00-160.00%</span>
                                            </li>
                                            <li className="list-item">
                                                <span className="property">CBD</span>
                                                <span className="value">500gm</span>
                                            </li>
                                        </ul>
                                        <div className="main_price">
                                            <span className="price price--old">₹550</span>
                                            <span className="price price--new">₹330</span>
                                        </div>
                                        <div className="d-flex">
                                            <a className="btn" href="#">Add to Cart</a>
                                            <div className="action d-flex">
                                                <a
                                                    className="action_link d-flex align-items-center justify-content-center"
                                                    href="#"
                                                    data-role="wishlist"
                                                >
                                                    <i className="icon-heart"></i>
                                                </a>
                                                <a
                                                    className="action_link d-flex align-items-center justify-content-center"
                                                    href="#"
                                                    data-trigger="view"
                                                >
                                                    <i className="icon-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="top_list-item col-lg-6" data-order="4">
                                <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                    <div className="media">
                                        <a href="product.html" target="_blank" rel="noopener norefferer">
                                            <picture>
                                                <source data-srcset="img/tulsi combo.jpg" srcset="img/tulsi combo.jpg" type="image/webp" />
                                                <img className="lazy" data-src="img/tulsi combo.jpg" src="img/tulsi combo.jpg" alt="media" />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="main d-md-flex flex-column">
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">tulsi  powder combo</a>
                                        <ul className="main_table d-flex flex-column">
                                            <li className="list-item">
                                                <span className="property">THC</span>
                                                <span className="value">110.00-160.00%</span>
                                            </li>
                                            <li className="list-item">
                                                <span className="property">CBD</span>
                                                <span className="value">500gm</span>
                                            </li>
                                        </ul>
                                        <div className="main_price">
                                            <span className="price price--old">₹550</span>
                                            <span className="price price--new">₹330</span>
                                        </div>
                                        <div className="d-flex">
                                            <a className="btn" href="#">Add to Cart</a>
                                            <div className="action d-flex">
                                                <a
                                                    className="action_link d-flex align-items-center justify-content-center"
                                                    href="#"
                                                    data-role="wishlist"
                                                >
                                                    <i className="icon-heart"></i>
                                                </a>
                                                <a
                                                    className="action_link d-flex align-items-center justify-content-center"
                                                    href="#"
                                                    data-trigger="view"
                                                >
                                                    <i className="icon-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> --> */}
            </aside>
        </main>
    </>
  )
}
