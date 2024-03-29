import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import PastTrialsPage from './pages/PastTrials';
import HowItWorksPage from './pages/HowItWorks';
import LogInPage from './pages/LogIn';
import Header from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import './styles/css/App.css';


function App() {
    return (
    	<Router>
            <Header />

            <main role="main">
	            <Route path="/" component={ HomePage } exact />
	            <Route path="/past-trials" component={ PastTrialsPage } />
	            <Route path="/how-it-works" component={ HowItWorksPage } />
	            <Route path="/login" component={ LogInPage } />

                <FooterComponent />
            </main>
        </Router>
    );
}

export default App;
