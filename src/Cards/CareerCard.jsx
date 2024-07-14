import React from 'react'

const CareerCard = ({item}) => {
    return (
        <div className="col-lg-3 col-md-6  col-xxl-4 fit-card">
            <div class="card mb-4 ">
                <img class="card-img-top img-fluid" src={item.img} />
                <div class="card-body">
                    <p class="card-text">{item.heading1}</p>
                    <span>{item.heading2}</span> <br />
                    <small >{item.read}</small>
                </div>
                <ul class="list-group list-group-flush ">
                    <li class="list-group-item">{item.footer}</li>
                </ul>
            </div>
        </div>
    )
}

export default CareerCard