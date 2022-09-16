import React, { Component } from 'react'
// import ChiTietSP from './ChiTietSP'

export default class ModalDeltail extends Component {
    render() {
        // return (
        //     <div>
        //         <div>
        //             <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        //                 <div className="modal-dialog modal-xl">
        //                     <div className="modal-content">
        //                         <div className="modal-header">
        //                             <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
        //                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                                 <span aria-hidden="true">×</span>
        //                             </button>
        //                         </div>
        //                         <div className="modal-body">
        //                             <ChiTietSP chiTietSP={this.props.productDetail}/>
        //                         </div>
        //                         <div className="modal-footer">
        //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                             <button type="button" className="btn btn-primary">Save changes</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // )
        const { content } = this.props
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog p-2" role="document" style={{ maxWidth: '1000px' }}>
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h5 className="modal-title">Chi tiết sản phẩm</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className='row m-0'>
                            <div className='col-md-6 text-center'>
                                <img src={content.image} alt='...' className='img-fluid' />
                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-center modal-body">
                                {/* <h3>{content.name}</h3>
                                <h5 className='text-danger d-inline-block'>PRICE: {content.price}$</h5>
                                <span className='text-success'>QUANTITY: {content.quantity}</span>
                                <p style={{textAlign:'justify'}}>{content.description}</p> */}
                                <h2 className="text-center">Chi tiết</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="col-4">Thuộc tính</th>
                                            <th className="col-8
                                            ">Thông tin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tên sản phẩm</td>
                                            <td>{content.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Tên gọi khác</td>
                                            <td>{content.alias}</td>
                                        </tr>
                                        <tr>
                                            <td>Giá</td>
                                            <td>{content.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Mô tả</td>
                                            <td>{content.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Số Lượng</td>
                                            <td>{content.quantity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
