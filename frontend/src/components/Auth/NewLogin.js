import React, {Component} from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
} from 'mdbreact';
import './login.css';

import instagram from '../../assets/images/instagram.png'
import playstore from '../../assets/images/playstore.png'
import appstore from '../../assets/images/appstore.png'
import winstore from '../../assets/images/winstore.png'

class LoginPage extends Component {

    state = {
        errorMessage: '',
    };

    render() {
        const errorMessage = this.state.errorMessage;
        return (
            <MDBContainer className='d-flex justify-content-center align-items-center'>
                <div>
                    <img src={instagram} alt="" className={'instagram'}/>
                </div>
                <div className={'text-center'}>
                    <MDBCard style={{width: "20rem"}}>
                        <h1 className={'primary-title larger-font text-center pt-5'}>Reactxagram</h1>
                        <MDBCardBody className="mx-4">
                            <input type="text" className={'form-control'}/>
                            <input type="text" className={'form-control'}/>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{width: "20rem"}} className={'mt-4 mb-3 text-center p-4 signUp-prompt-text d-block'}>
                        Don't have an account? <span className={'d-inline-block blue-text'}> Sign up</span>
                    </MDBCard>

                    <p className={'get-the-app'}>Get the app.</p>

                    <div className={'mt-3'}>
                        <img src={appstore} alt="" className={'dl-apps'}/>

                        <img src={playstore} alt="" className={'dl-apps'}/>

                        <img src={winstore} alt="" className={'dl-apps'}/>
                    </div>
                </div>

            </MDBContainer>
        );
    }
}

export default LoginPage;
