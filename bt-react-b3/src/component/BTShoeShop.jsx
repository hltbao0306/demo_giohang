import React, { Component } from 'react'
import ModalDeltail from './ModalDeltail'
import ChiTietSP from './ChiTietSP'
import Shoe from './Shoe'
import data from './data.json'
import GioHang from './GioHang'


export default class BTShoeShop extends Component {
    state = {
        shoesDetail: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "./img/adidas-prophere.png"
        },

        cart: {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "./img/adidas-prophere-black-white.png"
          },
    }

    showDetail = (product) => {
        this.setState({
            shoesDetail: product,
        });
        // console.log(product);
    };

    handleCart = (shoesClick) => {
        //Spread operator
        const value = {...shoesClick, soLuong: 1}
        const data = [...this.state.cart]

        const index = data.findIndex((shoe) => shoe.id === shoesClick.id)
        if(index !== -1){
            data[index].soLuong += 1
        }else{
            data.push(value)
        }

        //set lại state thêm vào state sản phẩm đc click
        this.setState({
            cart: data,
        })
    }

    handleRemoveCart = (id) => {//Xóa giỏ hàng
        const data = this.state.cart.filter((item) =>item.id !== id)

        this.setState({
            cart: data,
        })
    }

    handleQuantity = (id, quantity) => {//Tăng giảm
        const data = [...this.state.cart]
        // Tìm trong giỏ hàng index của SP với mã SP truyền vào
        const index = data.findIndex((item) => item.id === id )
        
        if(data[index].soLuong > 1 || quantity > 0 ){
            data[index].soLuong += quantity
        } else if (window.confirm('Bạn có muốn xóa sản phẩm không?')){
            data.splice(index, 1)
        }
        
        this.setState({
            cart: data,
        })
    }

    render() {
        return (
        <div className='py-3'>
            <h1 className='text-center p-3 text-light'>Shoes Shop</h1>
            <div className='row container-fluid'>
                <div className='col-sm-2 text-light'>
                    <h4 className='bg-dark'>Home</h4>
                    <h4>Nike</h4>
                    <h4>Adidas</h4>
                    <h4>Puma</h4>
                    <h4>Thượng đỉnh</h4>
                </div>

                {/* Giỏ hàng */}
                {/* <GioHang cart={this.state.cart} /> */}
                {/* <GioHang cart={this.state.cart} 
                    handleRemoveCart={this.handleRemoveCart}
                     handleQuantity={this.handleQuantity} /> */}
                
                {/* Danh sách giày */}
                <div className="col-sm-10">
                    <div className='row d-block'>
                        <GioHang cart={this.state.cart}
                            handleRemoveCart={this.handleRemoveCart}
                            handleQuantity={this.handleQuantity} />
                        <Shoe data={data}  showDetail={this.showDetail}/>
                        {/* <ChiTietSP chiTietSP={this.props.shoesDetail}/> */}
                    </div>
                </div>
                <ModalDeltail content={this.state.shoesDetail} />
            </div>
        </div>
        )
    }
}
