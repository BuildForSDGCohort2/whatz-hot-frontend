import React, { Component } from 'react';
import { FormGroup, InputGroup, Button, Alignment } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import UserauthLogo from '../../container/UserauthLogo';
import UserauthHeader from '../../container/UserauthHeader';
import StyleFirebaseAuthUi from '../../container/StyledFirebaseAuthUi';
import { auth } from '../../utils/Uiconfig';
import {
  Wrapper,
  ButtonWrapper,
  Col,
  Row,
  FormWrapper,
  Form,
  H2,
  LegalCopy,
  SubHeading,
  NameWrapper,
  InputWrapper,
  H6
} from '../../styles/userauthstyles';
import { AppState } from '../../redux';
import { Ui } from '../../redux/models/ui';
import { connect } from 'react-redux';
import SpinnerUi from '../../container/Spinnerui';
import { RouteComponentProps } from 'react-router';

interface Istate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isSignedIn: Boolean;
  error: Boolean;
  errMessage: string;
}
interface Iprops extends RouteComponentProps<{ history: any }> {}

type props = Iprops & LinkStateProp;

class Login extends Component<props, Istate> {
  constructor(props: props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isSignedIn: false,
      error: false,
      errMessage: ''
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.sendEmailVerification();
        if (user.emailVerified) {
          this.props.history.push('/homepage');
          this.setState({ isSignedIn: !!user });
        }
      }
    });
  };

  handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const displayName = this.state.firstName + ' ' + this.state.lastName;
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        const user = auth.currentUser;
        if (user !== null) {
          user?.updateProfile({
            displayName
          });
        }
        this.props.history.push('/verifymail');
      })
      .catch((err) => {
        this.setState({
          error: true,
          errMessage: err.message
        });
      });
    console.log(displayName);
    this.setState({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      error: false,
      errMessage: ''
    });
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (Object.keys(this.state).includes(key)) {
      this.setState({ [key]: value } as any);
    }
  };
  render() {
    const {
      ui: { loading }
    } = this.props;
    return (
      <>
        {loading ? (
          <SpinnerUi />
        ) : (
          <Wrapper>
            <Col>
              <UserauthHeader />
            </Col>
            <Col>
              <Row>
                <FormWrapper>
                  <Form onSubmit={this.handleSubmit}>
                    <div>
                      <H2>sign up for whatz-hot</H2>
                      <SubHeading>connect to local businesses</SubHeading>
                      <LegalCopy>
                        By continuing, you agree to Yelp’s{' '}
                        <Link to='/termsofservice'>Terms of Service</Link> and
                        acknowledge whatz-hot's
                        <Link to='/privacypolicy'>Privacy Policy.</Link>
                      </LegalCopy>
                      <ButtonWrapper>
                        <StyleFirebaseAuthUi />
                      </ButtonWrapper>
                    </div>
                    {this.state.error ? (
                      <InputWrapper>
                        <H6>{this.state.errMessage}</H6>
                      </InputWrapper>
                    ) : null}
                    <NameWrapper>
                      <InputWrapper>
                        <FormGroup
                          helperText='Helper text with details...'
                          label='First Name'
                          labelFor='first-name'
                        >
                          <InputGroup
                            id='first-name'
                            type='text'
                            name='firstName'
                            placeholder='first name'
                            value={this.state.firstName}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </InputWrapper>
                      <InputWrapper>
                        <FormGroup
                          helperText='Helper text with details...'
                          label='Last Name'
                          labelFor='last-name'
                        >
                          <InputGroup
                            id='last-name'
                            type='text'
                            name='lastName'
                            placeholder='last name'
                            value={this.state.lastName}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </InputWrapper>
                    </NameWrapper>
                    <NameWrapper>
                      <InputWrapper>
                        <FormGroup
                          helperText='Helper text with details...'
                          label='Email'
                          labelFor='email'
                        >
                          <InputGroup
                            id='email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup
                          helperText='Helper text with details...'
                          label='Password'
                          labelFor='password'
                        >
                          <InputGroup
                            id='password'
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </InputWrapper>
                    </NameWrapper>
                    <ButtonWrapper>
                      <Button
                        alignText={Alignment.CENTER}
                        intent={'success'}
                        large={true}
                        fill={true}
                        type='submit'
                        onSubmit={this.handleSubmit}
                        disabled={loading}
                      >
                        Sign Up
                      </Button>
                    </ButtonWrapper>
                  </Form>
                </FormWrapper>
              </Row>
              <Row>
                <UserauthLogo />
              </Row>
            </Col>
          </Wrapper>
        )}
      </>
    );
  }
}

interface LinkStateProp {
  ui: Ui;
}

const mapStateToProps = (state: AppState, ownprops: props): LinkStateProp => ({
  ui: state.Ui
});

export default connect(mapStateToProps)(Login);
