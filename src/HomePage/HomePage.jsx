import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import {SearchComponent,Loader} from '../components'
import {filterData} from '../middleware/'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            isSearch: false,
            isSearchEnable: true,
            counter:0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    componentWillMount(){
        this.props.dispatch(userActions.fetchAllPlanet());
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        //e.preventDefault();    
        //const { search } = this.state;
        //alert("hello"+e.target.value);
        const search=e.target.value;
        const { dispatch,user } = this.props;
        if(user==='Luke Skywalker'){
            this.searchResult(search);
        }
        else
        {
            if(this.state.counter>14)
            {
                this.setState({isSearchEnable: false})
                alert("You can make only 15-Searches in a minute. Don't worry, just wait for some moment to enable search again!!");
            }
            else
                {
                    this.setState({counter:++(this.state.counter)})
                    this.searchResult(search);
                }
        }
    }

    searchResult(search)
    {
        const { dispatch,user } = this.props;
        if (search) {
            this.setState({ isSearch: true });
            dispatch(filterData(search));
        }else {
            this.setState({ isSearch: false });
        }
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({isSearchEnable: true,
            counter:0})},60000)
    }
    render() {
        const { user, users,searchRes } = this.props;
        return (
            <div>
                <div>
                    <span>Hi {user}!</span>
                    <span style={{"float":"right"}}>
                        <Link to="/login">Logout</Link>
                    </span>
                </div>
                <form name="searchForm" >
                    <div className="input-group">
                        <input name="search"  placeholder="Search planets..."  type="text" className="form-control" onChange={this.handleSubmit} />                        
                        <span className="input-group-btn">
                            <button className="btn btn-default" >Search</button>
                        </span>
                    </div>    
                </form>
                { searchRes!==undefined &&  this.state.isSearch &&
                    <SearchComponent data={searchRes} />
                }
                { this.state.isSearch && !searchRes &&
                    <Loader />
                }
            </div>
            
        );
    }
}
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    const searchRes = state.search.filterData===undefined?undefined:state.search.filterData
    return {
        user,
        users,
        searchRes
    };
}
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };