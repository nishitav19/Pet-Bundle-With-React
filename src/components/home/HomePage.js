import React, { Fragment } from 'react'
import pug from '../images/pug.jpg'
import pup from '../images/pup.jpg'
import box from '../images/box.jpg'

const HomePage = () => {
    return (
        <Fragment>
            <div style={mainImgStyle}></div>

            <div class="center-align">
                <h4>Welcome to the Pup Bundle family!</h4>
                <h6>We are pawsitively thrilled to have you here! Now sit back and enjoy, let us take care of your pet.</h6>
            </div>

            <div className="container section">
                <div className="row" style={{ marginTop: '40px' }}>
                    <div className="col l4">
                        <img src={pup} alt="pup" className="responsive-img z-depth-2" />
                    </div>
                    <div className="col l6 offset-l1">
                        <h2 className="grey-text text-darken-4">What is the Pup Bundle?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            <div className="container section">
                <div className="row" style={{ marginBottom: '60px' }}>
                    <div className="col l4 push-l7">
                        <img src={box} alt="box" className="responsive-img z-depth-2" />
                    </div>
                    <div className="col l6 offset-l1 pull-l5 ">
                        <h2 className="grey-text text-darken-4">What's inside the box?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            <div className="center-align">
                <h2 style={{ marginBottom: '50px' }}>Choose a plan</h2>

                <div className="container row">
                    <div className="col s12 m6 l4">
                        <div className="card grey darken-4 z-depth-2">
                            <div className="card-content white-text">
                                <span className="card-title">₹2000/month*</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4">
                        <div className="card grey darken-4 z-depth-2">
                            <div className="card-content white-text">
                                <span className="card-title">₹4000/month*</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4">
                        <div className="card grey darken-4 z-depth-2">
                            <div className="card-content white-text">
                                <span className="card-title">₹6000/month*</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

const mainImgStyle = {
    background: 'url(' + pug + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '700px'
}

export default HomePage