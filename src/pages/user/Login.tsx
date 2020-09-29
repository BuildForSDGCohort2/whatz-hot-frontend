import React, { Component } from 'react';
import { FormGroup, InputGroup, Button, Alignment } from '@blueprintjs/core';
import { Link, Redirect } from 'react-router-dom';
import UserauthLogo from '../../container/UserauthLogo';
import UserauthHeader from '../../container/UserauthHeader';
import StyleFirebaseAuthUi from '../../container/StyledFirebaseAuthUi';
import { userAuth } from '../../utils/Uiconfig';
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
  SpanBorder,
  LinkInfo
} from '../../styles/userauthstyles';
import { AppState } from '../../redux';
import { Ui } from '../../redux/models/ui';
import { connect } from 'react-redux';
import SpinnerUi from '../../container/Spinnerui';
import { RouteComponentProps } from 'react-router';
import { setUiLoading } from '../../redux/actions/uiActions';
import { user } from '../../redux/models/User';
import { setLoadUser } from '../../redux/actions/userAction';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../redux/types/appAction';

interface Istate {
  email: string;
  password: string;
  error: Boolean;
  errMessage: Array<any>;
  redirectToReferrer: Boolean;
}
interface Iprops extends RouteComponentProps<{ history: any }> {}

type props = Iprops & LinkStateProp & LinkDispatchProp;

class Login extends Component<props, Istate> {
  constructor(props: props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      errMessage: [],
      redirectToReferrer: false
    };
  }

  handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUiLoading();
    let idtoken: string | undefined;
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    userAuth
      .signInWithEmailAndPassword(newUser.email, newUser.password)
      .then((data) => {
        return data.user?.getIdToken();
      })
      .then((token) => {
        idtoken = token;
      })
      .then(() => {
        const user = userAuth.currentUser;
        if (!user?.emailVerified) {
          this.props.history.push('/user/success');
        } else {
          const userCred = {
            id: user?.uid,
            displayName: user?.displayName,
            email: user?.email,
            photoUrl: user.photoURL,
            token: idtoken
          };
          this.props.setLoadUser(userCred);
          this.setState({
            redirectToReferrer: true
          });
          this.props.history.push('/homepage');
        }
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
          case 'auth/weak-password':
            return this.setState({
              error: true,
              errMessage: err.message
            });
          case 'auth/wrong-password':
            return this.setState({
              error: true,
              errMessage: err.message
            });
          case 'auth/user-not-found':
            return this.setState({
              error: true,
              errMessage: err.message
            });
          default:
            return 'Log in failed';
        }
      });
    this.setState({
      email: '',
      password: '',
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
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }
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
                      <H2>sign in to whatz hot</H2>
                      <SubHeading>
                        new to whatz hot? <Link to='/user/signup'>sign up</Link>
                      </SubHeading>
                      <LegalCopy>
                        By logging in, you agree to whatz hot’s{' '}
                        <Link to='/termsofservice'> Terms of Service</Link> and
                        acknowledge whatz hot's
                        <Link to='/privacypolicy'> Privacy Policy.</Link>
                      </LegalCopy>
                      <ButtonWrapper>
                        <StyleFirebaseAuthUi
                          fullLabel={'Log In'}
                          firebaseauth={userAuth}
                        />
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
                        <FormGroup label='Email' labelFor='email'>
                          <InputGroup
                            id='email'
                            type='email'
                            name='email'
                            required
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
                            required
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
                        Log In
                      </Button>
                    </ButtonWrapper>
                    <LinkInfo>
                      <Link to='/login'>Forgot password?</Link>
                    </LinkInfo>
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

interface LinkDispatchProp {
  setLoadUser: (User: user) => void;
  setUiLoading: () => void;
}

const mapStateToProps = (state: AppState, ownprops: Iprops): LinkStateProp => ({
  ui: state.Ui
});

const mapDispatchToProp = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownprops: Iprops
) => ({
  setLoadUser: bindActionCreators(setLoadUser, dispatch),
  setUiLoading: bindActionCreators(setUiLoading, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProp)(Login);
