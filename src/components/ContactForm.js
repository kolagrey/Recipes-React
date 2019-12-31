import React, { Component } from 'react';
import Link from './Link';
import FormErrorDisplay from './FormErrorDisplay';
import UserList from './UserList';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUserGroup = this.onChangeUserGroup.bind(this);
        this.onChangeTerms = this.onChangeTerms.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            fullName: '',
            displayName: '',
            email: '',
            userGroup: '',
            terms: false,
            formConfig: {
                userGroup: []
            },
            formError: {
                fullName: false,
                displayName: false,
                email: false,
                userGroup: false,
                terms: false,
            },
            formEntries: []
        };


    }

    componentDidMount() {
        this.setState({
            fullName: '',
            displayName: '',
            email: '',
            userGroup: '',
            terms: false,
            formConfig: {
                userGroup: ['Provider', 'Client']
            },
            formEntries: JSON.parse(localStorage.getItem('formEntries') || '[]')
        });
    }

    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value,
            formError: {
                fullName: false
            }
        });
    }

    onChangeDisplayName(e) {
        this.setState({
            displayName: e.target.value,
            formError: {
                displayName: false
            }
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
            formError: {
                email: false
            }
        });
    }

    onChangeUserGroup(e) {
        this.setState({
            userGroup: e.target.value,
            formError: {
                userGroup: false
            }
        });
    }

    onChangeTerms(e) {
        this.setState({
            terms: this.state.terms ? false : true,
            formError: {
                terms: false
            }
        });
    }

    inputClass(inputClass, inputName) {
        return this.state.formError[inputName] ? (`${inputClass} is-danger`) : (`${inputClass} is-success`);
    }

    submit(e) {
        e.preventDefault();
        const payload = {
            id: Date.now(),
            fullName: this.state.fullName,
            displayName: this.state.displayName,
            email: this.state.email,
            userGroup: this.state.userGroup,
            terms: this.state.terms
        };

        this.setState({
            formError: {
                fullName: !this.state.fullName ? true : false,
                displayName: !this.state.displayName ? true : false,
                email: !this.state.email ? true : false,
                userGroup: !this.state.userGroup ? true : false,
                terms: !this.state.terms ? true : false,
            }
        });


        if (this.state.terms) {
            this.setState({
                formEntries: [payload, ...this.state.formEntries,],
                fullName: '',
                displayName: '',
                email: '',
                userGroup: '',
                terms: false,
            }, () => {
                localStorage.setItem('formEntries', JSON.stringify(this.state.formEntries));
            });

        }
    }

    render() {
        return (
            <div className="row">
                <div className="columns is-mobile is-multiline">

                    <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-desktop">

                        <form onSubmit={this.submit}>
                            <div className="field">
                                <label className="label">Fullname</label>
                                <div className="control">
                                    <input onChange={this.onChangeFullName} className={this.inputClass('input', 'fullName')} type="text" placeholder="Text input" name="fullName" value={this.state.fullName} />
                                </div>
                                {this.state.formError.fullName && <FormErrorDisplay message="Fullname is required" />}
                            </div>

                            <div className="field">
                                <label className="label">Displayname</label>
                                <div className="control">
                                    <input onChange={this.onChangeDisplayName} className={this.inputClass('input', 'displayName')} type="text" placeholder="Text input" name="displayName" value={this.state.displayName} />
                                </div>
                                {this.state.formError.displayName && <FormErrorDisplay message="Display name is required" />}
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input onChange={this.onChangeEmail} className={this.inputClass('input', 'email')} type="email" placeholder="Email input" name="email" value={this.state.email} />
                                </div>
                                {this.state.formError.email && <FormErrorDisplay message="A valid mail is required" />}
                            </div>

                            <div className="field">
                                <label className="label">User Group</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={this.onChangeUserGroup} name="userGroup" value={this.state.userGroup} className={this.inputClass('select', 'userGroup')} >
                                            <option value="">Select your group</option>
                                            {this.state.formConfig.userGroup.map((opt) => {
                                                return (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                {this.state.formError.userGroup && <FormErrorDisplay message="User Group is required" />}
                            </div>

                            <div className="field">
                                <div className="control">
                                    <label className="checkbox">
                                        <input onChange={this.onChangeTerms} type="checkbox" name="terms" className={this.inputClass('checkbox', 'terms')} />
                                        I agree to the <Link to="#">terms and conditions</Link>
                                    </label>
                                </div>
                                {this.state.formError.terms && <FormErrorDisplay message="Please agree to terms" />}
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit" className="button is-link">Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button is-link is-light">Cancel</button>
                                </div>
                            </div>
                        </form>


                    </div>

                    <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-desktop">
                        {this.state.formEntries.map((entry) => {
                            return (
                                <UserList key={entry.displayName} data={entry} />
                            );
                        })}
                    </div>
                </div>
            </div>

        );
    }

};

export default ContactForm;