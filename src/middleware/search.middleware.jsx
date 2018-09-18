import { userConstants } from '../constants';
export function filterData(criteria){
    return(dispatch,getState)=>{
        let state= getState();
        let planets= state.search===undefined?undefined:state.search.searchRes;
        if (planets!==undefined){
            let filteredSearchDetail = planets.filter(function(planet) {
                return filterPlanet(planet,criteria)
            });
            dispatch({type:userConstants.FILTER_SUCCESS,data:filteredSearchDetail})  
        }
    }
}
function filterPlanet(data,criteria){
    let name= data.name.toString();
    return name.toLowerCase().includes(criteria.toLowerCase());

}