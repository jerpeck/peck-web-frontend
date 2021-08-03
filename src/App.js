import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import sendEmail from "./helpers/sendEmail";
import EmailSent from "./Components/EmailSent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      emailSentOpen: false,
    };
    this.sendContactEmails = this.sendContactEmails.bind(this);
    this.openEmailSent = this.openEmailSent.bind(this);
    this.closeEmailSent = this.closeEmailSent.bind(this);
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  sendContactEmails(contactData){
    sendEmail(contactData);
    this.openEmailSent();
  }

  openEmailSent(){
    this.setState({emailSentOpen: true});
  };

  closeEmailSent(){
    this.setState({emailSentOpen: false});
  };

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        {/* <Resume data={this.state.resumeData.resume} /> */}
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} sendContactEmails={this.sendContactEmails}/>
        <Footer data={this.state.resumeData.main} />
        <EmailSent emailSentOpen={this.state.emailSentOpen} closeEmailSent={this.closeEmailSent}/>
      </div>
    );
  }
}

export default App;
