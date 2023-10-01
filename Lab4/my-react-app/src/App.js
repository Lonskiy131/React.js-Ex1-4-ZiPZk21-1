import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: '',
      errors: {},
    };
  }

  validateEmail = (email) => {
   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    
    if (!this.validateEmail(this.state.email)) {
      this.setState({ errors: { email: 'Введіть коректний email' } });
      return;
    }

  
    this.setState({ errors: {} });

  
    const { email, subject, message } = this.state;

    
    console.log('Email:', email);
    console.log('Тема:', subject);
    console.log('Повідомлення:', message);
  };

  render() {
    const { email, subject, message, errors } = this.state;

    return (
      <div>
        <h1>Форма зворотнього звʼязку</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Тема:</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Повідомлення:</label>
            <textarea
              name="message"
              value={message}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Відправити</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;