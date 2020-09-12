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
  H6,
  Span,
  SpanWrapper,
  SpanBorder
} from '../../styles/userauthstyles';
import { AppState } from '../../redux';
import { Ui } from '../../redux/models/ui';
import { connect } from 'react-redux';
import SpinnerUi from '../../container/Spinnerui';
import { RouteComponentProps } from 'react-router';
import { setUiLoading } from '../../redux/actions/uiActions';

interface Istate {
  fullName: string;
  email: string;
  password: string;
  isSignedIn: Boolean;
  error: Boolean;
  errMessage: Array<any>;
}
interface Iprops extends RouteComponentProps<{ history: any }> {}

type props = Iprops & LinkStateProp;

class Signup extends Component<props, Istate> {
  constructor(props: props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      isSignedIn: false,
      error: false,
      errMessage: []
    };
  }

  handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUiLoading();
    const displayName = this.state.fullName;
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        const user = auth.currentUser;
        if (user !== null && this.state.fullName !== null) {
          user?.sendEmailVerification();
          user?.updateProfile({
            displayName
          });
        }
        this.props.history.push('/success');
        console.log(user);
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/network-request-failed':
            return this.setState({
              error: true,
              errMessage: ['Please try again']
            });
          case 'auth/invalid-email':
            return this.setState({
              error: true,
              errMessage: err.message
            });
          case 'auth/email-already-in-use':
            return this.setState({
              error: true,
              errMessage: err.message
            });
          case 'auth/weak-password':
            return this.setState({
              error: true,
              errMessage: err.message
            });
          default:
            console.log(err);
            return 'Sign up failed! please try again';
        }
      });
    this.setState({
      email: '',
      password: '',
      fullName: '',
      error: false,
      errMessage: []
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
            <Row>
              <Col>
                <UserauthHeader />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormWrapper>
                  <Form onSubmit={this.handleSubmit}>
                    <div>
                      <H2>sign up for whatz-hot</H2>
                      <SubHeading>connect to local businesses</SubHeading>
                      <LegalCopy>
                        By continuing, you agree to whatz hot’s{' '}
                        <Link to='/termsofservice'> Terms of Service</Link> and
                        acknowledge whatz hot's
                        <Link to='/privacypolicy'> Privacy Policy.</Link>
                      </LegalCopy>
                      <ButtonWrapper>
                        <StyleFirebaseAuthUi fullLabel={'Sign up'} />
                      </ButtonWrapper>
                      <SpanWrapper>
                        <SpanBorder></SpanBorder>
                        <Span>or</Span>
                        <SpanBorder></SpanBorder>
                      </SpanWrapper>
                    </div>
                    {this.state.error ? (
                      <InputWrapper>
                        <H6>{this.state.errMessage}</H6>
                      </InputWrapper>
                    ) : null}
                    <NameWrapper>
                      <InputWrapper>
                        <FormGroup label='Full Name' labelFor='full-name'>
                          <InputGroup
                            id='full-name'
                            type='text'
                            name='fullName'
                            placeholder='Full name'
                            minLength={8}
                            value={this.state.fullName}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </InputWrapper>
                    </NameWrapper>
                    <NameWrapper>
                      <InputWrapper>
                        <FormGroup label='Email' labelFor='email'>
                          <InputGroup
                            id='email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup label='Password' labelFor='password'>
                          <InputGroup
                            id='password'
                            type='password'
                            name='password'
                            placeholder='Password'
                            minLength={6}
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
                        disabled={!!loading}
                      >
                        Sign Up
                      </Button>
                    </ButtonWrapper>
                    <LegalCopy>
                      Already a member? <Link to='/login'>Sign In</Link>
                    </LegalCopy>
                  </Form>
                </FormWrapper>
              </Col>
              <Col>
                <UserauthLogo />
              </Col>
            </Row>
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

export default connect(mapStateToProps)(Signup);
