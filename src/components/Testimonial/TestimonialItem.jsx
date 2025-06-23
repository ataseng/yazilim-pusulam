import React from 'react'

const TestimonialItem = ({ data }) => {
    return (
        <div className="bg-white p-5">
            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
            <p>{data.content}</p>
            <div className="d-flex flex-shrink-0 align-items-center mt-4">
                <img className="img-fluid mr-4" src={data.image} alt="" />
                <div>
                    <h5>{data.name}</h5>
                    <span>{data.category}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem