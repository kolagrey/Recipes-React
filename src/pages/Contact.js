import React, { Component } from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

class Contact extends Component {
    render() {
        return (
            <Section>
                <ContactForm />
            </Section >
        );
    }
};

export default Contact;