<template>
<div class="w-100">
     <div class="container">
        <div class="row">
            <div class="col-lg-7 ">
                <div class="row">
                    <div class="col-lg-12  m-0 p-0">
                           <div class="banner-node mt-5 mb-3">
                    <h5 class="m-2 d-inline-block">Bag</h5>
                    <div class=""><p>
                        <a class="banner-link m-2  " target="_blank" data-id="0b2171ef-32fc-4af3-9cd7-ac5b10e8ac71" href="https://www.nike.com/w/sale-3yaep">Shop All Our New Markdowns</a>
                        </p>
                    </div>
                </div>
                    </div>
                      <div v-for="cart in carts" :key=" cart.id" class="col-lg-12  mb-2 pr-3 pl-0">
                            <div class="row">
                                <div class="col-lg-4 ">
                                    <img  style="max-width:100%; max-height:100%" :src="cart.product_image" alt="">
                                </div>
                                <div class="col-lg-7 m-0 p-0">
                                    {{ cart.product_name }}<br>
                                   <span class="text-muted"> {{ cart.product_category }}</span><br>
                                   <span class="text-muted"> {{ cart.product_color }}</span><br>
                                   <span class="text-muted"> Size:<span class="text-dark;" style="font-size:12px;">
                                       <select >
                                                <option selected>{{cart.product_size}}</option>
                                                <option v-for="size in sizes" :key=" size.id">
                                                    <span v-if="size.size!=cart.product_size">{{size.size}}</span>
                                                    <span v-else class="d-none none"></span>
                                                 
                                                </option>
                                        </select>
                                       </span>  &ensp;     
                                                              Quantity:
                                        <span class="text-dark;" style="font-size:12px;">
                                             <select >
                                                <option selected>{{cart.product_quantity}}</option>
                                                <option v-if="cart.product_quantity!=1">1</option>
                                                <option v-if="cart.product_quantity!=2">2</option>
                                            </select>
                                        </span>
                                        
                                                            
                                        </span><br>
                                                            
                                   <span class="text-muted"> </span><br>
                                </div>
                                <div class="col-lg-1">
                                    <div class="row">
                                        <div class="col-lg-12">${{cart.product_price}}.00</div>
                                    </div>
                                </div>
                            </div>
                           
                                     
                    </div>  
                </div>
             
              
            </div>
            <div class="col-lg-5 mt-5">
                <div class="row">
                    <div class="col-lg-12">
                        <h4>Summary</h4>
                    </div>
                    <div class="col-lg-12">
                        Do you have a Promo Code?
                    </div>
                    <div class="col-lg-8 mt-1 mb-1">
                       Subtotal
                    </div>
                    <div class="col-lg-4 text-right">
                        ${{ sum }}.00
                    </div>
                    <div class="col-lg-8 mt-1 mb-1">
                       Estimated Shipping & Handling <i class="fas fa-question-circle"></i>


                    </div>
                    <div class="col-lg-4 text-right">
                        $0.00
                    </div>
                    <div class="col-lg-9 mt-1 mb-1">
                        Estimated Tax
                    </div>
                    <div class="col-lg-3 text-right">
                        __
                    </div>
                    <div class="col-lg-8 mt-4 mb-4 summary" style="height:50px; line-height:50px">
                        Total
                    </div>
                    <div class="col-lg-4 mt-4 mb-4 summary text-right" style="height:50px; line-height:50px; font-family: 'Teko'; font-size: 20px;font-weight: bold ">
                        ${{ sum }}.00
                    </div>
                    <div class=" mx-auto col-lg-9 addCardButton mt-2">Add to Bag</div>
                    <div class=" mx-auto col-lg-9 buttonPrimary mt-2 bg-muted">
                        <img alt="PayPal" width="51" height="14" src="https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png" class="css-v7ibj3 e1gvmhx91">
                    </div>
                </div>
            </div>
        
          
        
    </div>
   
     
    </div>
        <Intro></Intro>
         
      
    
</div>
   
   
</template>
<style>
    .banner-node {
        background-color:  rgb(247, 247, 247);
      
    }
    .banner-node a {
        color:black;
        font-size: 12px;
        text-decoration: underline;
    }
    .buttonPrimary {
    vertical-align: top;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    color: rgb(255, 255, 255);
    width: 100%;
    padding: 18px 24px;
    border-radius: 30px;
    box-shadow: rgb(229 229 229) 0px 1px 0px 0px inset, rgb(229 229 229) -1px 0px 0px 0px inset, rgb(229 229 229) 0px -1px 0px 0px inset, rgb(229 229 229) 1px 0px 0px 0px inset;
    background: rgb(245, 245, 245);
    }
     .buttonPrimary:hover {
         background-color: beige;
     }
</style>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<script>

import Intro from './Intro.vue';

export default ({
    components: {
        Intro
    },
    data() {
        return {
            sum:0
        }
    },
    computed:{
    carts() {
        var cart=JSON.parse(localStorage.getItem('allItems'));
        for(let i=0;i< cart.length;i++) {
            this.sum+=cart[i].product_price;
        }
        return JSON.parse(localStorage.getItem('allItems'))
    },
    sizes() {
        return this.$store.state.sizes;
    },
    products() {
        return this.$store.state.allProducts;
    }
    
    }, mounted() {
       
  
    }
})
</script>
