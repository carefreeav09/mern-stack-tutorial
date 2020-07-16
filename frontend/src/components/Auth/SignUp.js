import React, {useEffect, useContext} from 'react';
import {Link, withRouter} from "react-router-dom";
import { AuthContext } from "../../contexts/auth";


import PlayStore from '../../assets/images/playstore.png'
import AppStore from '../../assets/images/appstore.png'
import './login.css';
import {useForm} from 'react-hook-form';
import Footer from "./Footer";
import {graphql} from 'react-apollo';
import {addUsersMutation, getUsersList,} from "../../queries/queries";
import axios from "axios";

const SignUp = (props) => {
    const authContextData = useContext(AuthContext);
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = data => {
        let requestBody = {
            query: `
                mutation {
                    addUser(userInput:{
                        name:"${data.fullName}",
                        username :"${data.username}",
                        password :"${data.password}",
                        email:"${data.email}",
                  })
                  {
                    name,
                    username
                  }
                }
            `
        }
        authContextData.register(requestBody);
    }


    return (
        <div className="container">
            {console.log(props, 'im props of signup')}
            <div className="row">
                <div
                    className="col-md-12 col-sm-12 text-left d-flex justify-content-center align-items-center text-center"
                    style={{
                        minHeight: '100vh',
                    }}>
                    <div>
                        <div className="card reactxagram-cards px-5"
                             style={{
                                 maxWidth: '350px'
                             }}
                        >
                            <h1 className={'primary-title larger-font text-center py-4'}>Reactxagram</h1>

                            <p className={'font-weight-bold font-size-larger'}>
                                Sign up to see photos and videos from your friends.
                            </p>

                            <button className={'btn btn-block facebook-background-blue white-text mb-3 p-2'}>
                                <i className={'fab fa-facebook-square mr-2 fa-lg'}/>
                                Log in with Facebook
                            </button>

                            <div className="row">
                                <div className="col-5">
                                    <hr className={'black w-100 black-text'}/>
                                </div>
                                <div className="col-2"><span className="small">OR</span></div>
                                <div className="col-5">
                                    <hr className={'black w-100 black-text'}/>
                                </div>
                            </div>


                            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" id="email" className="form-control login-forms"
                                       placeholder="Mobile Number or Email" ref={register}
                                       name={'email'}/>
                                {errors.email && <span>This field is required</span>}

                                <input type="text" id="fullName"
                                       className="form-control login-forms" placeholder="Full Name" ref={register}
                                       name={'fullName'}/>
                                {errors.fullName && <span>This field is required</span>}

                                <input type="text" id="username" className="form-control login-forms"
                                       placeholder="Username" ref={register} name={'username'}/>
                                {errors.username && <span>This field is required</span>}

                                <input type="password" id="password" className="form-control login-forms"
                                       placeholder="Password" ref={register} name={'password'}/>
                                {errors.password && <span>This field is required</span>}

                                <button className="login-forms-button mt-1 mb-4 py-1" type="submit">Log In</button>
                            </form>

                            <div className="login-with-facebook">
                                <p className={'text-muted small'}>
                                    By signing up, you agree to our <a className={'font-weight-bolder'}>Terms , Data
                                    Policy</a> and <a className={'font-weight-bolder'}>
                                    Cookies Policy
                                </a>.
                                </p>
                            </div>
                        </div>

                        <div
                            className={'mt-4 reactxagram-cards w-100 white mb-3 text-center p-4 signUp-prompt-text d-block'}>
                            Have an account?
                            <Link to='/login'>
                                <a className={'ml-2 d-inline-block blue-text font-weight-bold'}> Sign In</a>
                            </Link>
                        </div>

                        <p className={'get-the-app'}>Get the app.</p>

                        <div className={'mt-3 text-center'}>
                            <img src={AppStore} alt="" className={'dl-apps'}/>

                            <img src={PlayStore} alt="" className={'dl-apps'}/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
    );
};

export default withRouter(SignUp)