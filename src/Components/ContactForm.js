import {React} from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.contactName) {
        errors.contactName = 'Required';
      }
    if (!values.contactEmail) {
        errors.contactEmail = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contactEmail)) {
        errors.contactEmail = 'Invalid email address';
      }
    if (!values.contactPhone) {
        errors.contactPhone = 'Required';
      }
    if (!values.contactMessage) {
        errors.contactMessage = 'Required';
      }
    return errors;
}

export default function ContactForm(props) {
    const formik = useFormik({
        initialValues: {
            contactName: "",
            contactEmail: "",
            contactPhone: "",
            contactSubject: "",
            contactMessage: "",
        },
        validate,
        onSubmit: values => {
            props.sendContactEmails(values);
          },     
    })
    return(
        <form
            id="contactForm"
            name="contactForm"
            onSubmit={formik.handleSubmit}
        >
            <fieldset>
                <div className="form-item-container">
                    <div className="label-error-container">
                        <label htmlFor="contactName">
                            Name<span className="required">*</span>
                        </label>
                        {formik.touched.contactName && formik.errors.contactName ? <div className="error">{formik.errors.contactName}</div> : null}
                    </div>

                    <input
                        id="contactName"
                        name="contactName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactName}
                        size="35"
                    />
                </div>

                <div className="form-item-container">
                    <div className="label-error-container">
                        <label htmlFor="contactEmail">
                            Email <span className="required">*</span>
                        </label>
                        {formik.touched.contactEmail && formik.errors.contactEmail ? <div className="error">{formik.errors.contactEmail}</div> : null}
                    </div>
                    <input
                        id="contactEmail"
                        name="contactEmail"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactEmail}
                        size="35"
                    />
                </div>

                <div className="form-item-container">
                    <div className="label-error-container">
                        <label htmlFor="contactPhone">
                            Phone <span className="required">*</span>
                        </label>
                        {formik.touched.contactPhone && formik.errors.contactPhone ? <div className="error">{formik.errors.contactPhone}</div> : null}
                    </div>
                    <input
                        id="contactPhone"
                        name="contactPhone"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactPhone}
                        size="35"
                    />
                </div>

                <div className="form-item-container">
                    <div className="label-error-container">
                        <label htmlFor="contactSubject">Subject</label>
                    </div>
                    <input
                        id="contactSubject"
                        name="contactSubject"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactSubject}
                        size="35"
                    />
                </div>

                <div className="form-item-container">
                    <div className="label-error-container">
                        <label htmlFor="contactMessage">
                            Message <span className="required">*</span>
                        </label>
                        {formik.touched.contactMessage && formik.errors.contactMessage ? <div className="error">{formik.errors.contactMessage}</div> : null}
                    </div>
                    <textarea
                        id="contactMessage"
                        name="contactMessage"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactMessage}
                        cols="50"
                        rows="15"
                    ></textarea>
                </div>

                <div>
                    <button className="submit" type="submit">Submit</button>
                    <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                    </span>
                </div>
            </fieldset>
            </form>
    )
}  
            