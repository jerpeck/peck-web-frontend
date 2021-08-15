import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

import ContactForm from './ContactForm';

class Contact extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     contactData: {
  //       contactName: "",
  //       contactEmail: "",
  //       contactPhone: "",
  //       contactSubject: "",
  //       contactMessage: "",
  //     },
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.resetContactData = this.resetContactData.bind(this);
  // }

  // handleChange(e){
  //   const newContactData = this.state.contactData;
  //   newContactData[e.target.id] = e.target.value
  //   this.setState({contactData: newContactData});
  // };

  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.sendContactEmails(this.state.contactData);
  //   this.resetContactData();
  //   // send emails
  //     // email to me 
  //     // email to contact
  //   // reset state
  // }

  // resetContactData(){
  //   this.setState({    
  //     contactData: {
  //     contactName: "",
  //     contactEmail: "",
  //     contactPhone: "",
  //     contactSubject: "",
  //     contactMessage: "",
  //   },})
  // }

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    // const {contactName, contactEmail, contactPhone, contactSubject, contactMessage} = this.state.contactData;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <ContactForm sendContactEmails={this.props.sendContactEmails}/>
              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
