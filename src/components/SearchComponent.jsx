import React from 'react';
export const SearchComponent = (props)=>{
    const {data} = props;
    if (data===null || data===undefined || data==''){
            return(
                <div className="col-md-6">
                No data found....
                </div>
            )
    }else {
        return (
            <div style={{"marginTop": "12px"}}>
                { data.map(function (planet) {
                        let height=planet.population;
                        let width = planet.population; 
                    return (

                        <div style="text-align:center">
                            <span class="dot" style="height: 100px;width: 100px;"></span>
                        </div>


                    )
                })}
            </div>
        )
    }
    
}