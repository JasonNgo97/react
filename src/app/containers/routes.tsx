import { HomePage } from '../pages/HomePage/Loadable';
import { SignupPage } from '../pages/SignupPage/Loadable';
import { SignupWithEmailPage } from '../pages/SignupWithEmailPage/Loadable';
import { AuthenticationSuccess } from '../pages/AuthenticationSuccess/Loadable';
import { LoginPage } from '../pages/LoginPage/Loadable';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage/Loadable';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: 'signup/:role',
    name: 'Signup',
    component: SignupPage,
  },
  {
    path: '/signup-with-email/:role',
    name: 'Signup',
    component: SignupWithEmailPage,
  },
  {
    path: '/confirm-email/:role/:email',
    name: 'Confirm Email',
    component: AuthenticationSuccess,
  },
  {
    path: '/signin',
    name: 'Sign in',
    component: LoginPage,
  },
  {
    path: '/forgotPassword',
    name: 'Forgot Password',
    component: ForgotPasswordPage,
  },
  {
    path: '/resetPassword',
    name: 'Reset Password',
    component: ForgotPasswordPage,
  },
];

export default routes;
