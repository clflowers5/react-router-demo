import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom';
import ComponentB1 from "./ComponentB1";
import ComponentB2 from "./ComponentB2";
import {BorderedSalmonContent, ContentWrapper2, LinkWrapper} from '../styled-components';

/* This boi will have a nested router, like a sub app within the bigger app */
function ComponentB() {
    return (
        <>
            {/* Our subrouter gets a basename to keep it separate from the higher level router */}
            <Router basename='/woo-b'>
                <ContentWrapper2>
                    <BorderedSalmonContent>
                        <div>Welcome to ComponentB!</div>
                        <div>Stay a while, and listen!</div>

                        <Switch>
                            <Route path='/b1'>
                                <ComponentB1/>
                            </Route>

                            <Route path='/b2'>
                                {/* ComponentB Has a nested Router */}
                                <ComponentB2/>
                            </Route>
                        </Switch>
                    </BorderedSalmonContent>

                </ContentWrapper2>

                <LinkWrapper>
                    <Link to='/b1'>Go to ComponentB - b1</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/b2'>Go to ComponentB - b2</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Back to the Beginning of Component B</Link>
                </LinkWrapper>
            </Router>
        </>
    );
}

export default ComponentB;
