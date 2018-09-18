import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../store';
export const userActions = {
    login,
    logout,
    fetchAllPlanet
};
function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then( user => { 
                        dispatch(success(user));
                        history.push('/');    
                    
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function fetchAllPlanet() {
    return dispatch => {
        dispatch(request("allData"));
        userService.search()
            .then( searchRes => { 
                        dispatch(success(searchRes));
                    //    history.push('/');       
                },
                error => {
                    console.log("users error"+error);
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(searchData) { return { type: userConstants.SEARCH_REQUEST, searchData } }
    function success(searchRes) { return { type: userConstants.SEARCH_SUCCESS, searchRes } }
    function failure(error) { return { type: userConstants.SEARCH_FAILURE, error } }
}
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
