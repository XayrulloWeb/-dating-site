import React from 'react';
import routes from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";
import "./style/style.css";
import Navbar from "./Companents/Navbar/Navbar";
import Footer from './Companents/footer/Footer';

const App = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Navbar />

                <div className="routes">
                    <Switch>
                        {
                            routes.map(item => {
                                return <Route
                                    key={item.id}
                                    path={item.path}
                                    component={item.component}
                                    exact
                                />
                            })
                        }
                        <Redirect to="/404" />
                    </Switch>


                </div>
                <Footer/>

            </div>
        </div>
    );
}

export default App;