import React from 'react'

const Detail = ({title, year, poster}) => {
    return (

        <div className="card bg-light">
            
            <div className="card-body row" >
                <div className="col-6">
                    <img className="card-img-top"style={{width: "200px", height:"225px"}} src={poster} alt={title}/>
                </div>
                <div className="col-6">
                    <h5 className="card-title" >{title}</h5>
                    <p className="card-text">{year}</p>
                    <a href="#" className="btn btn-primary">View More</a>
                </div>
                

            </div>
        </div>
    )
}

export default Detail
