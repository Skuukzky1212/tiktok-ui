import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                alt="avatar"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/eb00e0f6e8a4cfe1ea985b793f9290b4.jpeg?x-expires=1653922800&x-signature=0WmLv4eDEFYUctw7Dju1H64hJ1U%3D"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>bp_tiktok</span>
                    <FontAwesomeIcon
                        className={cx('verify')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('username')}>blackpinkofficial</span>
            </div>
        </div>
    );
}

export default AccountItem;
