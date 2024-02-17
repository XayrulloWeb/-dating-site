import React from 'react';
import email from "../Images/email.png"
import eye from "../Images/eye1.png"
import password from "../Images/password1.png"
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <div className='login'>
            <div className="login_start">
                <div className="login_navbar">
                    <div className="login_navbar-start">
                        <div className="login_navbar-icon">
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
                        <div className="login_navbar-regis">
                            <a href="/#">Впервые здесь?</a>
                            <button>Регистрация</button>
                        </div>
                    </div>
                </div>
                <div className="login_content">
                    <div className="login_text">
                         <h3>Знакомства без преград</h3>
                        <p>Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость <br/> системы обучения кадров, соответствующей насущным потребностям.</p>
                    </div>
                    <div className="login_input">
                        <form action="#" method="post">
                            <div className="username">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.2422 3.14879H1.75781C0.788555 3.14879 0 3.93734 0 4.9066V15.0934C0 16.0627 0.788555 16.8512 1.75781 16.8512H18.2422C19.2114 16.8512 20 16.0627 20 15.0934V4.9066C20 3.93734 19.2114 3.14879 18.2422 3.14879ZM18.0128 4.32066L17.7782 4.51602L10.6974 10.4121C10.2933 10.7486 9.70664 10.7486 9.30258 10.4121L2.22184 4.51602L1.98723 4.32066H18.0128ZM1.17188 5.16668L6.94109 9.9707L1.17188 13.8103V5.16668ZM18.2422 15.6793H1.75781C1.47469 15.6793 1.23789 15.4775 1.18363 15.2102L7.8807 10.7531L8.55273 11.3127C8.97203 11.6618 9.48606 11.8364 10 11.8364C10.514 11.8364 11.028 11.6618 11.4473 11.3127L12.1194 10.7531L18.8164 15.2101C18.7621 15.4775 18.5253 15.6793 18.2422 15.6793ZM18.8281 13.8103L13.0589 9.97074L18.8281 5.16668V13.8103Z" fill="#8B5D9A"/>
                                </svg>
                                <input type="email" id="username" placeholder="Введите электронную почту"/>
                            </div>
                            <div className="password">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.4531 14.2969C14.8846 14.2969 15.2344 13.9471 15.2344 13.5156C15.2344 13.0842 14.8846 12.7344 14.4531 12.7344C14.0217 12.7344 13.6719 13.0842 13.6719 13.5156C13.6719 13.9471 14.0217 14.2969 14.4531 14.2969Z" fill="#8B5D9A"/>
                                    <path d="M17.9688 14.1406C18.4002 14.1406 18.75 13.7909 18.75 13.3594V10.4688C18.75 8.74562 17.3481 7.34375 15.625 7.34375H14.6861V4.58852C14.6861 2.0584 12.5832 0 9.99855 0C7.41387 0 5.31105 2.0584 5.31105 4.58852V7.34375H4.375C2.65188 7.34375 1.25 8.74562 1.25 10.4688V16.875C1.25 18.5981 2.65188 20 4.375 20H15.625C17.3481 20 18.75 18.5981 18.75 16.875C18.75 16.4435 18.4002 16.0938 17.9688 16.0938C17.5373 16.0938 17.1875 16.4435 17.1875 16.875C17.1875 17.7366 16.4866 18.4375 15.625 18.4375H4.375C3.51344 18.4375 2.8125 17.7366 2.8125 16.875V10.4688C2.8125 9.60719 3.51344 8.90625 4.375 8.90625H15.625C16.4866 8.90625 17.1875 9.60719 17.1875 10.4688V13.3594C17.1875 13.7909 17.5373 14.1406 17.9688 14.1406ZM13.1236 7.34375H6.87355V4.58852C6.87355 2.91996 8.27543 1.5625 9.99855 1.5625C11.7217 1.5625 13.1236 2.91996 13.1236 4.58852V7.34375Z" fill="#8B5D9A"/>
                                    <path d="M8.55469 14.2969C8.98616 14.2969 9.33594 13.9471 9.33594 13.5156C9.33594 13.0842 8.98616 12.7344 8.55469 12.7344C8.12322 12.7344 7.77344 13.0842 7.77344 13.5156C7.77344 13.9471 8.12322 14.2969 8.55469 14.2969Z" fill="#8B5D9A"/>
                                    <path d="M5.625 14.2969C6.05647 14.2969 6.40625 13.9471 6.40625 13.5156C6.40625 13.0842 6.05647 12.7344 5.625 12.7344C5.19353 12.7344 4.84375 13.0842 4.84375 13.5156C4.84375 13.9471 5.19353 14.2969 5.625 14.2969Z" fill="#8B5D9A"/>
                                    <path d="M11.4844 14.2969C11.9158 14.2969 12.2656 13.9471 12.2656 13.5156C12.2656 13.0842 11.9158 12.7344 11.4844 12.7344C11.0529 12.7344 10.7031 13.0842 10.7031 13.5156C10.7031 13.9471 11.0529 14.2969 11.4844 14.2969Z" fill="#8B5D9A"/>
                                </svg>
                                <input type="password" id="password" name="password" placeholder="Введите пароль"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_59_1383)">
                                        <path d="M19.8507 9.60918C19.6722 9.41004 15.3782 4.72656 10 4.72656C4.62181 4.72656 0.32791 9.41004 0.149355 9.60918C-0.0497851 9.83176 -0.0497851 10.1682 0.149355 10.3908C0.32791 10.59 4.62189 15.2734 10 15.2734C15.3781 15.2734 19.6721 10.59 19.8507 10.3908C20.0498 10.1682 20.0498 9.83176 19.8507 9.60918ZM10 14.1016C7.73865 14.1016 5.89845 12.2614 5.89845 10C5.89845 7.73863 7.73865 5.89844 10 5.89844C12.2614 5.89844 14.1016 7.73863 14.1016 10C14.1016 12.2614 12.2614 14.1016 10 14.1016Z" fill="#8B5D9A"/>
                                        <path d="M10.5859 8.82812C10.5859 8.23867 10.8786 7.72012 11.3237 7.40117C10.9243 7.19668 10.4787 7.07031 10 7.07031C8.38465 7.07031 7.07031 8.38465 7.07031 10C7.07031 11.6154 8.38465 12.9297 10 12.9297C11.4462 12.9297 12.6433 11.8737 12.8798 10.4938C11.6998 10.8737 10.5859 9.98133 10.5859 8.82812Z" fill="#8B5D9A"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_59_1383">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <input className="sumbit" type="submit" value="Войти"/>
                            <p>Я не помню пароль</p>
                        </form>
                    </div>
                </div>

                <div className="login_footer">
                    <div className="login_footer-left">
                        <Link>О нас</Link>
                        <Link>Поддержка</Link>
                        <Link>Советы</Link>
                        <Link>Контакты</Link>
                        <Link>Правила оплаты</Link>
                    </div>
                    <div className="login_footer-center">
                        <p>Политика обработки персональных данных</p>
                    </div>
                    <div className="login_footer-right">
                        <select id="language" name="language">
                            <option value="english">Ru</option>
                            <option value="russian">Eng</option>
                        </select>
                        <p>©Xayrowa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;