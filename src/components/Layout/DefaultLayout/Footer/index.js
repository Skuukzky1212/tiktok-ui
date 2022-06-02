import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Place, Facebook, Instagram, Twitter } from '@mui/icons-material';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('wrapper', 'grid wide')}>
                <div className={cx('inner', 'row no-gutters')}>
                    <div className={cx('block-item', 'col l-3 m-4 c-12')}>
                        <span className={cx('title')}>Cửa Hàng</span>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/Home">
                                    Trang chủ
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Sản Phẩm
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Place
                                    sx={{ fontSize: 20, color: '#dc3a1a' }}
                                />

                                <a
                                    href="https://www.google.com/maps/place/CGV+Giga+Mall+Th%E1%BB%A7+%C4%90%E1%BB%A9c/@10.8275618,106.7210116,20.25z/data=!4m13!1m7!3m6!1s0x317528842f782221:0x3670cbfa60bbbcff!2zMjQyIFBo4bqhbSBWxINuIMSQ4buTbmcsIEhp4buHcCBCw6xuaCBDaMOhbmgsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!3b1!8m2!3d10.8276003!4d106.7212132!3m4!1s0x31752930d4f0ef63:0xfeffcc189deddb5b!8m2!3d10.8277882!4d106.7216702?hl=vi-VN"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx('Link')}
                                >
                                    Xem bản đồ của hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('block-item', 'col l-3 m-4 c-12')}>
                        <span className={cx('title')}>Hỗ Trợ</span>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Hỗ trợ trực tuyến
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Chính sách bảo hành
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Chính sách đổi trả sản phẩm
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Chính sách giao hàng
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Hình thức thanh toán
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('block-item', 'col l-3 m-4 c-12')}>
                        <span className={cx('title')}>Thông Tin Mua Hàng</span>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Điều khoản và Điều kiện
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Đăng ký thành viên
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Kiểm tra thời hạn bảo hành
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Ưa đãi cho doanh nghiệp
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('block-item', 'col l-3 m-4 c-12')}>
                        <span className={cx('title')}>Về René</span>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Tin tức
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Cam kết về môi trường
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Xem các chương trình khuyến mãi
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')} to="/">
                                    Chính sách giao hàng
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('block-row')}>
                    <ul className={cx('list-item')}>
                        <li className={cx('item')}>
                            <Link className={cx('item-link')} to="/">
                                Giới thiệu
                            </Link>
                        </li>
                        <li className={cx('item')}>
                            <Link className={cx('item-link')} to="/">
                                Tuyển dụng
                            </Link>
                        </li>
                        <li className={cx('item')}>
                            <Link className={cx('item-link')} to="/">
                                Liên hệ
                            </Link>
                        </li>
                        <div className={cx('contacts')}>
                            <a
                                href="facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className={cx(
                                    'social-icon',
                                    'social-icon-facebook',
                                )}
                            >
                                <Facebook sx={{ fontSize: 20 }} />
                            </a>
                            <a
                                href="instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className={cx(
                                    'social-icon',
                                    'social-icon-instagram',
                                )}
                            >
                                <Instagram sx={{ fontSize: 20 }} />
                            </a>

                            <a
                                href="twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className={cx(
                                    'social-icon',
                                    'social-icon-twitter',
                                )}
                            >
                                <Twitter sx={{ fontSize: 20 }} />
                            </a>
                        </div>
                    </ul>
                </div>
                <div className={cx('footer-signature')}>
                    <span className={cx('footer-copyright')}>
                        2022 &copy; Bản quyền thuộc sở hữu René Việt Nam.
                    </span>
                    <span className={cx('footer-copyright', 'small')}>
                        Địa chỉ: Tầng 6 TTTM Giga Mall, 240, 242 Đ. Phạm Văn
                        Đồng, Hiệp Bình Chánh, Thủ Đức, Thành phố Hồ Chí Minh
                        700000, Việt Nam.
                    </span>
                    <span className={cx('footer-copyright', 'small')}>
                        Điện thoại: 19006017
                    </span>

                    <p className={cx('footer-legal-links')}>
                        <Link to="/" title="Điều khoản sử dụng">
                            Điều khoản sử dụng
                        </Link>
                        <Link to="/" title="Quyền riêng tư">
                            Quyền riêng tư
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
