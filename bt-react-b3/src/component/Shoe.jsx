import React, { Component } from 'react'
import ChiTietSP from './ChiTietSP';

export default class Shoe extends Component {
    render() {
    const { data, showDetail, handleCart } = this.props
        return (
            <div className="row">
                {data.map((item) => {
                return <div className="col-xl-4 col-md-6 mb-3" key={item.id}>
                    <ChiTietSP item={item} showDetail={showDetail} handleCart={handleCart}/>
                </div>
                })}
            </div>
          );
    }
}