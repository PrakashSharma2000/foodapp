import React from 'react'

export const FormatItems = ({data,passdata}) => {
    return (
        <div className="card">
            <div>
                <img className="imgsize" src={data.images} alt={data.name} onClick={()=>passdata(data.price)} />
                <div>
                    <strong>{data.name}</strong>
                    <br/>
                    {data.price}rs
                </div>
            </div>
        </div>
    )
}
export default FormatItems