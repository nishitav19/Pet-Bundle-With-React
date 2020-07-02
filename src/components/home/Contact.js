import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDetails } from '../../store/contactActions'

class Contact extends Component {

    state = {
        name: '',
        tel: '',
        email: '',
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.addDetails(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value],
        })
    }

    render() {
        return (
            <div className="container center-align">
                <div className="row">
                    <div className="col s12 m6 l5 offset-l3" style={{ marginTop: '60px' }} >
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <i className="material-icons prefix">account_circle</i>
                                <input type="text" id="name" onChange={this.handleChange} required />
                                <label>Name</label>
                            </div>
                            <div className="input-field">
                                <i className="material-icons prefix">phone</i>
                                <input type="tel" id="tel" onChange={this.handleChange} required />
                                <label>Phone</label>
                            </div>
                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input type="email" id="email" onChange={this.handleChange} required />
                                <label>Your Email</label>
                            </div>
                            <div className="input-field">
                                <i className="material-icons prefix">message</i>
                                <textarea id="message" className="materialize-textarea" cols="20" rows="20" onChange={this.handleChange}></textarea>
                                <label>Your Message</label>
                            </div>
                            <div>
                                <button className="waves-effect waves-light grey darken-4 btn"><i
                                    className="material-icons right">pets</i>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDetails: (details) => dispatch(addDetails(details))
    }
}

export default connect(null, mapDispatchToProps)(Contact)

