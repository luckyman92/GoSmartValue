import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import smartlogo from '../../images/1gosmartvalue/layout/images/favicons/smart_log_45x45.png';
import smartMarkup from '../../images/1gosmartvalue/layout/images/smart-w.PNG';


class Header6 extends Component {
	componentDidMount() {
        // sidebar open/close
		
        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
		
		
        function checkLi(current) {
            current.parentElement.parentElement.querySelectorAll( "li" ).forEach( el =>
				(current.parentElement !== el) ? el.classList.remove('open') : ''
			);
			
			setTimeout(() => {
				current.parentElement.classList.toggle('open');
				
			}, 100);			
        }
	}
	
    render() {
        return (
            <>
                <header className="site-header header mo-left header-transparent" id="fix-header">
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar clearfix">
                            <div className="container clearfix">

                                <div className="logo-header mostion">
                                    <Link to={'./'} className="dez-page"><img src={smartlogo} alt="" /></Link>
                                    <Link to={'./'} className="dez-page"><img src={smartMarkup} alt="" /></Link>
                                </div>

                                <button className="navbar-toggler collapsed navicon justify-content-end" type="button"  data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <Link to={'#'} className="dez-page site-button primary">Login</Link>
                                        {/* <Link to={'./contact'} className="dez-page site-button primary">Register</Link> */}
                                    </div>
                                </div>
                                <div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
                                    {/*  Header Menu Contents  */}
										<ul className="nav navbar-nav">
                                            <li><Link to={'#'}>Subscriptions</Link>                                                
                                            </li>
                                            <li><Link to={'#'}>Valuetions</Link>                                                
                                            </li>
                                            <li><Link to={'#'}>Reports</Link>                                                
                                            </li>
                                            <li><Link to={'#'}>Our Portfolio</Link>                                                
                                            </li>
                                            <li><Link to={'#'}>News</Link>
                                            </li>
                                            <li><Link to={'#'}>Contact us</Link>
                                            </li>
                                        </ul>
									{/*  Header Menu Contents End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
export default Header6;