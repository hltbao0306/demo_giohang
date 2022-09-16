import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        const {cart, handleRemoveCart, handleQuantity} = this.props;

        const renderCart = () => {
            return cart.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <img style={{width: '60px'}} src={item.image} alt="..." />
                        </td>
                        <td>{item.giaBan.toLocaleString()}</td>
                        <td>
                            <button className='btn btn-warning'
                                onClick={() => handleQuantity(item.id, -1)}> - </button>
                            <span className='mx-2'>{item.quantity}</span>
                            <button className='btn btn-warning'
                                onClick={() => handleQuantity(item.id, 1)}> + </button>
                        </td>
                        <td>{(item.giaBan * item.quantity).toLocaleString()}</td>
                        <td>
                            <button className='btn btn-danger'
                                onClick={() => handleRemoveCart(item.id)}>Xóa
                            </button>
                        </td>
                    </tr>
                )
            })
        }

        return (
            <div>
            {/* <!-- Button trigger modal --> */}
            <div className="text-right">
                <button type="button" className="btn  mb-4 cart" style={{color: '#fff'}} data-toggle="modal" data-target="#exampleModal">
                    <i className="fa-solid fa-cart-plus mr-2"></i>
                    Giỏ hàng
                    {/* <span className='ml-3'>
                        ({cart.length} - {' '}
                        {cart.reduce((total, item)=>{
                            return (total += item.quantity * item.giaBan)
                        }, 0).toLocaleString()}VNĐ
                        )
                    </span> */}
                </button>
            </div>
    
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Giỏ Hàng
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã SP</th>
                                            <th>Tên SP</th>
                                            <th>Hình Ảnh</th>
                                            <th>Giá bán</th>
                                            <th>Số lượng</th>
                                            <th>Tổng tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    {/* <tbody>{renderCart()}</tbody> */}
                                </table>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )}
}