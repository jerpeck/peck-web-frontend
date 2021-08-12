import React from "react";
import { Fade, Slide } from "react-reveal";
import { useFormik } from 'formik';

function Contact(props) {
  // if (!props.data) return null;
  
  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactSubject: "",
      contactMessage: "",
    },
    onSubmit: values => {props.sendContactEmails(values)}
  });

  console.log('contact props: ', props);
  const {name, phone, contactmessage} = props.data;
  const {street, city, state, zip} = props.data.address;
  
  // handleChange(e){
  //   const newContactData = this.state.contactData;
  //   newContactData[e.target.id] = e.target.value
  //   this.setState({contactData: newContactData});
  // };

  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.sendContactEmails(this.state.contactData);
  //   this.resetContactData();
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

  // render() {

    // const city = props.data.address.city;
    // const state = props.data.address.state;
    // const zip = props.data.address.zip;
    // const phone = props.data.phone;
    // const contactmessage = props.data.contactmessage;

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
              <p className="lead">{contactmessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                id="contactForm"
                name="contactForm"
                onSubmit={formik.handleSubmit}
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      size="35"
                      id="contactName"
                      name="contactName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.contactName}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.contactEmail}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPhone">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      size="35"
                      id="contactPhone"
                      name="contactPhone"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.contactPhone}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.contactSubject}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      onChange={this.handleChange}
                      value={formik.contactMessage}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

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
  // }
}

export default Contact;
