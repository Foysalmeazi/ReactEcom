import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom'


export default class  extends Component {
    render() {
        const btnstyle=
        {
            border:'1px solid blue',
            margin:'5px'
        }
      
        return (
            <ProductConsumer>
               {(value) =>
               {
                   const {modalOpen,closeModal} = value;
                   const {img,title,price}=value.modalProduct;
                   if(!modalOpen)
                   {
                       return null;
                   }
                   else{
                       return (<ModalContainer>
                           <div className="container">
                               <div className="row">
                                    <div  id='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center test-capitalize">
                                        <h5>item addet to cart</h5>
                                        <img src={img} className="img-fluid" alt="product"></img>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : $ {price}</h5>
                                        <Link to='/'>
                                    <ButtonContainer onClick={()=>closeModal()} style={btnstyle}>
                                               Store
                                    </ButtonContainer>
                                        </Link>

                                        <Link to='/cart'>
                                            <ButtonContainer onClick={()=>closeModal()} style={btnstyle}>
                                              Go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                               </div>
                           </div>

                       </ModalContainer>
                       );
                   }
               }}
            </ProductConsumer>
        )
    }
}

const ModalContainer=styled.div`
position:fixed;
top:0;
left:0
right:0;
bottom:0;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
#modal
{
    background:var(--mainWhite)
}

`;
