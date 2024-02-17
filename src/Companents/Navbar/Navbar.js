import React from 'react';
import {Link} from "react-router-dom";
import account from "../../Images/account.png"

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_start">
                    <div className="navbar_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <g clip-path="url(#clip0_17_4433)">
                                <path d="M20.9373 13.9449C21.7682 15.4637 23.0367 16.6576 24.1559 17.7104C24.3422 17.8858 24.5271 18.0597 24.7075 18.2327C25.4024 18.9002 26.1009 19.5392 26.7761 20.1563C27.4362 20.7596 28.1183 21.3835 28.7825 22.0212C29.4629 22.6744 30.5375 22.6744 31.2178 22.0212C31.8816 21.384 32.5636 20.7605 33.2233 20.1572C33.8989 19.5397 34.5975 18.9006 35.2928 18.2327C35.4727 18.0597 35.6577 17.8862 35.844 17.7109C36.9637 16.6576 38.2321 15.4637 39.063 13.9449C40.217 11.8346 40.1785 9.38645 38.96 7.39609C37.762 5.43915 35.8998 4.35242 33.7172 4.33594C32.4254 4.32587 31.1597 4.69391 30.0478 5.39521L30.0432 5.39803C30.0169 5.4145 29.9834 5.41447 29.9571 5.39795C28.8548 4.70261 27.6028 4.33594 26.3326 4.33594C26.3161 4.33594 26.3 4.33594 26.2831 4.33594C24.1005 4.35242 22.2383 5.43915 21.0403 7.39609C19.8218 9.38645 19.7833 11.8346 20.9373 13.9449Z" fill="url(#paint0_linear_17_4433)"/>
                                <path d="M56.0788 37.1031C53.9132 37.1031 52.1576 35.3475 52.1576 33.1819V31.1481C52.1576 25.4984 47.5612 20.9015 41.911 20.9015C37.0798 20.9015 33.0193 24.2628 31.944 28.7696C31.7232 29.6949 30.9513 30.4385 30 30.4385C29.0487 30.4385 28.2768 29.6949 28.056 28.7696C26.9807 24.2628 22.9202 20.9015 18.089 20.9015C12.4388 20.9015 7.84241 25.4984 7.84241 31.1481V33.1819C7.84241 35.3475 6.08682 37.1031 3.9212 37.1031C1.75558 37.1031 0 38.8587 0 41.0243V43.4523C0 48.002 3.70148 51.7035 8.25119 51.7035C8.52676 51.7035 8.75015 51.9269 8.75015 52.2025V53.811C8.75015 54.7818 9.53715 55.5688 10.508 55.5688C11.4788 55.5688 12.2658 54.7818 12.2658 53.811V53.1864C12.2658 52.3674 12.9297 51.7035 13.7487 51.7035C14.5677 51.7035 15.2316 52.3674 15.2316 53.1864V53.811C15.2316 54.7818 16.0186 55.5688 16.9894 55.5688C17.9603 55.5688 18.7473 54.7818 18.7473 53.811V53.5776C18.7473 52.5187 19.585 51.6658 20.6136 51.4142C25.0406 50.3311 28.3356 46.3303 28.3356 41.5741V35.6186C28.3356 34.6994 29.0808 33.9542 30 33.9542C30.9192 33.9542 31.6644 34.6994 31.6644 35.6186V41.5741C31.6644 46.3303 34.9594 50.3311 39.3864 51.4142C40.415 51.6658 41.2527 52.5187 41.2527 53.5776V53.811C41.2527 54.7818 42.0397 55.5688 43.0106 55.5688C43.9814 55.5688 44.7684 54.7818 44.7684 53.811V53.1864C44.7684 52.3674 45.4323 51.7035 46.2513 51.7035C47.0703 51.7035 47.7342 52.3674 47.7342 53.1864V53.811C47.7342 54.7818 48.5212 55.5688 49.492 55.5688C50.4628 55.5688 51.2498 54.7818 51.2498 53.811V52.2025C51.2498 51.9269 51.4732 51.7035 51.7488 51.7035C56.2985 51.7035 60 48.002 60 43.4523V41.0243C60 38.8587 58.2444 37.1031 56.0788 37.1031ZM21.5918 39.8245C21.5918 42.7588 19.205 45.146 16.2708 45.146H14.8453C13.8745 45.146 13.0875 44.359 13.0875 43.3882C13.0875 42.4174 13.8745 41.6304 14.8453 41.6304H16.2708C17.2664 41.6304 18.0762 40.8206 18.0762 39.8245C18.0762 38.8537 18.8632 38.0594 19.834 38.0594C20.8048 38.0594 21.5918 38.8537 21.5918 39.8245ZM21.5918 30.8318C21.5918 31.8026 20.8048 32.5896 19.834 32.5896C18.8632 32.5896 18.0762 31.8026 18.0762 30.8318C18.0762 29.8609 18.8632 29.0739 19.834 29.0739C20.8048 29.0739 21.5918 29.8609 21.5918 30.8318ZM38.4082 30.8318C38.4082 29.8609 39.1952 29.0739 40.166 29.0739C41.1368 29.0739 41.9238 29.8609 41.9238 30.8318C41.9238 31.8026 41.1368 32.5896 40.166 32.5896C39.1952 32.5896 38.4082 31.8026 38.4082 30.8318ZM46.9125 43.3882C46.9125 44.359 46.1255 45.146 45.1547 45.146H43.7292C40.795 45.146 38.4082 42.7588 38.4082 39.8245C38.4082 38.8537 39.1952 38.0594 40.166 38.0594C41.1368 38.0594 41.9238 38.8537 41.9238 39.8245C41.9238 40.8206 42.7336 41.6304 43.7292 41.6304H45.1547C46.1255 41.6304 46.9125 42.4174 46.9125 43.3882Z" fill="url(#paint1_linear_17_4433)"/>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_17_4433" x1="20.0983" y1="13.763" x2="39.902" y2="13.763" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EE0979"/>
                                    <stop offset="1" stop-color="#FF6A00"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_17_4433" x1="-3.35276e-07" y1="38.2352" x2="60" y2="38.2352" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EE0979"/>
                                    <stop offset="1" stop-color="#FF6A00"/>
                                </linearGradient>
                                <clipPath id="clip0_17_4433">
                                    <rect width="60" height="60" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Znakomstva.com</p>
                    </div>

                    <div className="navbar_links">
                        <ul>
                            <Link>Анкеты</Link>
                            <Link>Сообщения</Link>
                            <Link>Подписка</Link>
                        </ul>
                    </div>
                    <div className="navbar_account">
                        <select id="country" name="country">
                            <option value="uzbek">Узбекистан</option>
                            <option value="russian">Россия</option>
                        </select>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_3422)">
                                <path d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" fill="#925FA4"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_3422">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_3439)">
                                <path d="M17.8162 14.0942C16.5562 13.0292 15.8337 11.4725 15.8337 9.82333V7.5C15.8337 4.5675 13.6553 2.14 10.8337 1.73333V0.833333C10.8337 0.3725 10.4603 0 10.0003 0C9.54033 0 9.16699 0.3725 9.16699 0.833333V1.73333C6.34449 2.14 4.16699 4.5675 4.16699 7.5V9.82333C4.16699 11.4725 3.44449 13.0292 2.17699 14.1008C1.85283 14.3783 1.66699 14.7817 1.66699 15.2083C1.66699 16.0125 2.32116 16.6667 3.12533 16.6667H16.8753C17.6795 16.6667 18.3337 16.0125 18.3337 15.2083C18.3337 14.7817 18.1478 14.3783 17.8162 14.0942Z" fill="#925FA4"/>
                                <path d="M10.0001 20C11.5093 20 12.7718 18.9242 13.0618 17.5H6.93848C7.22848 18.9242 8.49098 20 10.0001 20Z" fill="#925FA4"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_3439">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="account">
                            <img src={account} alt="icon"/>
                            <p>Иван Иванов</p>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;