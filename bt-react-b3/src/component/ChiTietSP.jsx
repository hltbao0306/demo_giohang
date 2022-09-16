import React, { Component } from 'react'

export default class ChiTietSP extends Component {
    render() {
    const { item, showDetail, handleCart } = this.props
    
    return (
        <div className="card bg-info h-100">
            <img className="card-img-top w-50 m-auto" src={item.image} alt='...' />
            <div className="card-body bg-secondary text-white">
                <h4 className="card-title">{item.name}</h4>
                <h4 className="card-text text-danger">{item.price}$</h4>
                <p className="card-text">{item.shortDescription}</p>
            </div>
            <div className='card-footer bg-secondary border-top-0 d-flex justify-content-between'>
                <button className='btn btn-warning detail' data-toggle="modal" data-target="#modelId" onClick={() => showDetail(item)}>Xem chi tiết</button>
                <button className='btn btn-info addcart' onClick={() => handleCart(item)}><span>Thêm giỏ hàng</span></button>
            </div>
        </div>
    )}
}
