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
                    return (
                        <div key={planet.name} className="panel panel-default">
                            <div className="panel-heading">{planet.name}</div>
                            <div className="panel-body">
                                <p>
                                    Population:
                                    <label>   {planet.population} </label>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    
}
