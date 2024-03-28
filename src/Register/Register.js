import React from 'react';

function Register(props) {
    return (
        <div className='register'>
            <div className='container'>
                <div className='register_start'>
                    <h2>Создай новый аккаунт</h2>
                    <p>Присоединяйся к сообществу из 518 млн человек!
                    </p>

                    <input type='text' name='user' id='user' placeholder='Ваше имя' />
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.85723 9.63408C11.1808 9.63408 12.3267 9.15938 13.2633 8.22279C14.1996 7.28636 14.6744 6.14058 14.6744 4.81689C14.6744 3.49365 14.1997 2.34771 13.2631 1.41098C12.3266 0.4747 11.1806 0 9.85723 0C8.53353 0 7.38775 0.4747 6.45132 1.41113C5.51489 2.34756 5.04004 3.49349 5.04004 4.81689C5.04004 6.14058 5.51489 7.28652 6.45132 8.22295C7.38806 9.15922 8.53399 9.63408 9.85723 9.63408ZM7.28018 2.23983C7.99871 1.5213 8.84161 1.17203 9.85723 1.17203C10.8727 1.17203 11.7157 1.5213 12.4344 2.23983C13.153 2.95852 13.5024 3.80157 13.5024 4.81689C13.5024 5.83251 13.153 6.6754 12.4344 7.39409C11.7157 8.11278 10.8727 8.46205 9.85723 8.46205C8.84191 8.46205 7.99902 8.11263 7.28018 7.39409C6.56149 6.67555 6.21206 5.83251 6.21206 4.81689C6.21206 3.80157 6.56149 2.95852 7.28018 2.23983Z" fill="#8B5D9A" />
                        <path d="M18.2863 15.379C18.2592 14.9893 18.2046 14.5642 18.1242 14.1153C18.043 13.663 17.9385 13.2354 17.8134 12.8447C17.684 12.4408 17.5084 12.0419 17.2909 11.6597C17.0656 11.2629 16.8007 10.9175 16.5034 10.6332C16.1926 10.3358 15.812 10.0967 15.372 9.92231C14.9334 9.74882 14.4475 9.66093 13.9276 9.66093C13.7234 9.66093 13.526 9.7447 13.1447 9.99296C12.91 10.146 12.6355 10.323 12.3291 10.5188C12.0671 10.6857 11.7122 10.8421 11.2738 10.9837C10.8461 11.1221 10.4118 11.1923 9.98305 11.1923C9.55458 11.1923 9.12032 11.1221 8.69231 10.9837C8.25438 10.8423 7.89931 10.6859 7.63778 10.5189C7.33428 10.325 7.05962 10.148 6.82143 9.99281C6.44042 9.74455 6.24297 9.66078 6.03881 9.66078C5.51879 9.66078 5.03295 9.74882 4.59457 9.92247C4.15481 10.0966 3.77411 10.3357 3.46298 10.6334C3.16574 10.9178 2.90085 11.2631 2.67563 11.6597C2.45849 12.0419 2.28271 12.4406 2.15332 12.8448C2.02835 13.2356 1.92383 13.663 1.84265 14.1153C1.76208 14.5636 1.70761 14.9888 1.6806 15.3795C1.65405 15.7614 1.64062 16.1589 1.64062 16.5605C1.64062 17.6045 1.9725 18.4497 2.62695 19.073C3.27331 19.6881 4.12841 20 5.1686 20H14.7987C15.8386 20 16.6937 19.6881 17.3402 19.073C17.9948 18.4501 18.3267 17.6046 18.3267 16.5603C18.3265 16.1573 18.313 15.7599 18.2863 15.379ZM16.5321 18.2238C16.105 18.6303 15.538 18.8279 14.7986 18.8279H5.1686C4.42901 18.8279 3.862 18.6303 3.43506 18.224C3.0162 17.8253 2.81265 17.281 2.81265 16.5605C2.81265 16.1857 2.82501 15.8157 2.84973 15.4605C2.87384 15.112 2.92312 14.7291 2.99621 14.3223C3.06839 13.9206 3.16025 13.5435 3.2695 13.2022C3.37433 12.8749 3.5173 12.5508 3.69461 12.2386C3.86383 11.941 4.05853 11.6858 4.27337 11.4801C4.47433 11.2877 4.72763 11.1302 5.02609 11.0121C5.30212 10.9028 5.61233 10.843 5.94909 10.834C5.99013 10.8558 6.06322 10.8975 6.18163 10.9747C6.42257 11.1317 6.70028 11.3109 7.00728 11.5069C7.35335 11.7276 7.79921 11.9269 8.3319 12.0988C8.87648 12.2749 9.4319 12.3643 9.9832 12.3643C10.5345 12.3643 11.0901 12.2749 11.6344 12.099C12.1675 11.9267 12.6132 11.7276 12.9597 11.5066C13.2739 11.3058 13.5438 11.1319 13.7848 10.9747C13.9032 10.8977 13.9763 10.8558 14.0173 10.834C14.3542 10.843 14.6644 10.9028 14.9406 11.0121C15.2389 11.1302 15.4922 11.2878 15.6932 11.4801C15.908 11.6856 16.1027 11.9409 16.2719 12.2387C16.4494 12.5508 16.5925 12.875 16.6972 13.202C16.8066 13.5438 16.8986 13.9207 16.9706 14.3222C17.0436 14.7297 17.093 15.1127 17.1171 15.4606V15.4609C17.142 15.8148 17.1545 16.1847 17.1547 16.5605C17.1545 17.2812 16.951 17.8253 16.5321 18.2238Z" fill="#8B5D9A" />
                    </svg>
                    <label for='date' typeof='checkbox'>Дата рождения</label>
                    <div className='register_date'>
                        <input type='text' placeholder='Day' />
                        <select id="date" name="date">
                            <option selected>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <input type='text' placeholder='Year' />
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Register;