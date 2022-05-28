import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchRessult, setSearchRessult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchRessult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok-logo" />
                </div>
                <div>
                    <Tippy
                        interactive={true}
                        visible={searchRessult.length > 0}
                        render={(attrs) => (
                            <div
                                className={cx('search-results')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input
                                placeholder="Search accounts and videos..."
                                spellCheck={false}
                            />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <button className={cx('loading')}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </button>
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
