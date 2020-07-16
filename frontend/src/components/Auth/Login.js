import React, {useEffect, useContext} from 'react';
import {Link, withRouter} from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import Instagram from '../../assets/images/instagram.png'
import PlayStore from '../../assets/images/playstore.png'
import AppStore from '../../assets/images/appstore.png'
import './login.css';
import { useForm } from 'react-hook-form'
import Footer from "./Footer";

const Login = (props) => {
    const { register, handleSubmit, getValues, errors } = useForm();
    const authContextData = useContext(AuthContext);

    const onSubmit = data => {

        let requestBody = {
            query: `
                query {
                    login(username : "${data.username}", password : "${data.password}")
                    {
                        token
                        userID
                        tokenExpiration
                    }
                }
            `
        }
       authContextData.login(requestBody);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-right d-none d-md-block">
                    <img src={Instagram} alt="" className={'instagram-photo'}/>
                </div>

                <div className="col-md-6 col-sm-12 text-left d-flex justify-content-start align-items-center">
                    <div>
                        <div className="card reactxagram-cards px-5">
                            <h1 className={'primary-title larger-font text-center py-4'}>Reactxagram</h1>

                            <form className="text-center" onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                                <input type="text" id="username" className="form-control login-forms"
                                       placeholder="Username" ref={register} name={'username'}/>
                                {errors.username && <p>This field is required</p>}

                                <input type="password" id="defaultLoginFormPassword"
                                       className="form-control login-forms" placeholder="Password" ref={register} name={'password'}/>
                                {errors.password && <p>This field is required</p>}

                                <button className={`login-forms-button mt-1 mb-4 py-1 blue`} type="submit">Log In</button>
                            </form>

                            <div className="login-with-facebook">
                                <div className="row">
                                    <div className="col-5">
                                        <hr className={'black w-100 black-text'}/>
                                    </div>
                                    <div className="col-2 p-0"><span className="small">OR</span></div>
                                    <div className="col-5">
                                        <hr className={'black w-100 black-text'}/>
                                    </div>
                                </div>

                                <div><i className="fab fa-facebook-square facebook-color mb-4"></i>
                                    <span className="facebook-color font-weight-bolder pl-2 ">Login with facebook</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'mt-4 reactxagram-cards w-100 white mb-3 text-center p-4 signUp-prompt-text d-block'}>
                            Don't have an account?
                            <Link to={'/register'}>
                                <a className={'d-inline-block blue-text font-weight-bold ml-2'}> Sign up</a>
                            </Link>
                        </div>

                        <p className={'get-the-app'}>Get the app.</p>

                        <div className={'mt-3 text-center'}>
                            <img src={AppStore} alt="" className={'dl-apps'}/>

                            <img src={PlayStore} alt="" className={'dl-apps'}/>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    );
};

export default withRouter(Login)