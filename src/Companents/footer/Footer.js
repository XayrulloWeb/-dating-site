import React from 'react';
import { Link } from 'react-router-dom';


function footer(props) {
    return (
        <div>
            
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
    );
}

export default footer;