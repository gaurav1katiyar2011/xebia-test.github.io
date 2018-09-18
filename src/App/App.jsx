import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../store';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        return (
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">                   
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" auth={this.props.authentication} component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>  
        );
    }
}
function mapStateToProps(state) {
    const { alert,authentication } = state;
    return {
        alert,
        authentication
    };
}
const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 