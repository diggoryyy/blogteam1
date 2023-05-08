/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../Css/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

                {/* <div className="footer">
            </div> */}
            
            <div className='container'>
                <div className='row'>
                <div className='footer-col'>
                        
                        <ul>
                        <h4>Thông tin liên hệ</h4>
                            <li><a href=''>+84 926 999 999</a></li>
                            <li><a href=''>Email: info@diggory.com</a></li>
                            <li><a href=''>Địa chỉ: 12 Trịnh Đình Thảo, quận Tân Phú, HCM</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                    
                        <ul>
                        <h4>Về chúng tôi</h4>
                            <li><a href=''>Diggory - nơi chia sẻ trải nghiệm và kinh nghiệm du lịch</a></li>
                        </ul>
                    </div>
                    
                   
                    <div className='footer-col'>
                        <h4>kết nối với chúng tôi</h4>
                        <div className='social-links'>
                            <a href=''><i className="topIcon fab fa-facebook-square"></i></a>
                            <a href=''><i className="topIcon fab fa-twitter-square"></i></a>
                            <a href=''><i className="topIcon fab fa-pinterest-square"></i></a>
                            <a href=''><i className="topIcon fab fa-instagram-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='big'>
                <div className='small'>
                <ul>
                <h4>tuan</h4>
                            <li><a href=''>dsad</a></li>
                            <li><a href=''>dsad</a></li>
                            <li><a href=''>dsad</a></li>
                            <li><a href=''>dsad</a></li>
                        </ul>
                </div>
                <div className='small'>dsadsa</div>
                <div className='small'>dasdsad</div>
            </div> */}
            <div className="copyright">
                <p className="copyright-blog">© 2023 by DIGGORY</p>
            </div>
        </div>
        
    )
}

export default Footer;
