export const userService = {
    login,
    logout,
    search
    };
function login(username, password) {
    return fetch('https://swapi.co/api/people/')
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            let apiUsersDetail= user.results;
            let filteredUserDetail = apiUsersDetail.filter(function(user) {
                //console.log("api username=>>"+user.name+",password==>>"+user.birth_year);
                return (user.name===username && user.birth_year===password)
            });
            if (filteredUserDetail.length===undefined || filteredUserDetail.length==0){
                return false;
            }
            
            if (filteredUserDetail.length ) {
                // store user details in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(username));
            }
            return username;
        });
}
// function search(searchData) {
//     return fetch('https://swapi.co/api/planets/')
//         .then(response => {
//             if (!response.ok) { 
//                 return Promise.reject(response.statusText);
//             }
//             return response.json();
//         })
//         .then(searchRes => {

//             let apiSearchPlanetDetails= searchRes.results;
//             let filteredSearchDetail = apiSearchPlanetDetails.filter(function(planet) {
//                 return filterData(planet,searchData)
//             });
//             //console.log("search planent="+JSON.stringify(filteredSearchDetail));
//             return filteredSearchDetail;
//         });
// }

function search() {
    return fetch('https://swapi.co/api/planets/')
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(searchRes => {
            let apiSearchPlanetDetails= searchRes.results;
            // let filteredSearchDetail = apiSearchPlanetDetails.filter(function(planet) {
            //     return filterData(planet,searchData)
            // });
            // //console.log("search planent="+JSON.stringify(filteredSearchDetail));
            return apiSearchPlanetDetails;
        });
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}