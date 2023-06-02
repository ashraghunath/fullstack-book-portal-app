import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { ExploreTopBooks } from './layouts/HomePage/components/ExploreTopBooks';
import { Heros } from './layouts/HomePage/components/Heros';
import { LibraryServices } from './layouts/HomePage/components/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/OktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { PaymentPage } from './layouts/PaymentPage/PaymentPage';

const oktaAuth = new OktaAuth(oktaConfig);

function App() {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage />
          </Route>
          <Route path='/login' render={
            () => <LoginWidget config={oktaConfig} /> 
            } 
          />
          <Route path='/login/callback' component={LoginCallback} />
          <SecureRoute path='/fees'> <PaymentPage/> </SecureRoute>
        </Switch>
      </div>
      <Footer />
      </Security>
    </div>
  );
}

export default App;
