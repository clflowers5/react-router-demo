import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import ComponentA from './ComponentA';
import ComponentB from './ComponentB'
import {ContentWrapper, Header, LinkWrapper, SubHeader} from './styled-components';

function App() {
    return (
        <div className="App">
            <Header>Isn't this cool</Header>
            <SubHeader>(Pay attention to the URL)</SubHeader>

            {/* A base level Router - typically wraps an app (or sublevel-app) */}
            <Router>
                <ContentWrapper>

                    {/* A Switch handles the routing logic, based on the url path, render something */}
                    <Switch>
                        <Route path='/yolo-a'>
                            <ComponentA/>
                        </Route>

                        <Route path='/woo-b'>
                            {/* ComponentB Has a nested Router */}
                            <ComponentB/>
                        </Route>

                        {/*
                            Ripped from official docs:
                            If none of the previous routes render anything, this route acts as a fallback.
                            Important: A route with path="/" will *always* match
                            the URL because all URLs begin with a /. So that's
                            why we put this one last of all
                        */}
                        <Route path="/">
                            <p>Well howdy ho neighbor! Welcome!</p>
                        </Route>
                    </Switch>

                </ContentWrapper>

                {/* Links for page navigation */}

                <LinkWrapper>
                    <Link to='/yolo-a'>Click me to go to Page - A</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/woo-b'>Click me to go to Page - B (It's like a sub-app)</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Back to the Beginning</Link>
                </LinkWrapper>

            </Router>
        </div>
    );
}

export default App;
