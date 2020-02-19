import React, {Component} from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            message: '',
            name: '',
            email: '',
            legendMessage: ''
        };
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        let classForLegend = this.state.legendMessage === "Send your message" ? styles.legend : ""
        || this.state.legendMessage === "Your message has been successfully sent" ? styles.legendSuccess : ""
        || this.state.legendMessage === "Your message has failed to be sent" ? styles.legendError : "";

        return (
            <div id={'contact-form'} className={styles.contacts}>
                <Fade bottom>
                    <div className={styles.container}>
                        <div className={styles.headerTitle}>
                            <h2 className={styles.headerTitle}>Contact me</h2>
                            <div className={styles.line}></div>
                        </div>

                        <form onSubmit={this.handleSubmit} className={styles.formWrapper}>
                            <legend className={classForLegend}>
                                {this.state.legendMessage}
                            </legend>
                            <input type="text"
                                   id="name"
                                   name="name"
                                   className={styles.formArea}
                                   onChange={this.handleChange}
                                   placeholder={'Name'}
                                   required
                                   value={this.state.name}/>
                            <input type="email"
                                   id="email"
                                   name="email"
                                   className={styles.formArea}
                                   onChange={this.handleChange}
                                   aria-describedby="emailHelp"
                                   placeholder={'E-mail'}
                                   required
                                   value={this.state.email}/>
                            <textarea
                                id="test-mailing"
                                name="message"
                                className={styles.messageArea}
                                onChange={this.handleChange}
                                placeholder="Type your message"
                                required
                                value={this.state.message}
                            />
                            <button className={styles.btnSubmit}>Send</button>
                        </form>
                    </div>
                </Fade>
            </div>
        );
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        const templateId = 'template_CB8rh080';

        this.sendMessage(templateId, {
            message_html: this.state.message,
            from_name: this.state.name,
            reply_to: this.state.email
        });

        this.setState(() => this.initialState);

        event.preventDefault();
        event.target.reset();
    }

    sendMessage(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            this.setState({
                legendMessage: "Your message has been successfully sent"
            });
             this.resetForm();
        })
            .catch(err => {
                console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
                this.setState({
                    legendMessage: "Your message has failed to be sent"
                });
            })
    }
}

export default Contacts;
