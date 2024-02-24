import React from "react";

function Card(props){
    return (
        <div class="col">
          <div class="card h-100">
            <img src={props.img} class="card-img-top" alt={props.alt} style={{height:"300px", width:"100%"}}/>
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.description}</p>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">View this project</button>
              </div>
            </div>
          </div>
        </div>  
    )
}

export default Card;