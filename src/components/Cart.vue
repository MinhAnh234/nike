<template>
    <div class="cart" >
         
        <i style="color: green;" class="fas fa-check-circle m-3"></i>
        <span class=" ml-3">Added to Bag</span>
        <span class="mr-4 mt-2 destroy">X</span>
        <div id="cart-warrap">
            <img style="width:90px;height:90px;vertical-align: top"   class="m-3" :src="cartProduct.product_image" alt="">
            <ul class="d-inline-block mt-3">
                <li class="d-block">  {{cartProduct.product_name}} </li> 
                <li class="d-block text-muted">{{cartProduct.product_category}}</li>
                <li class="d-block text-muted">{{cartProduct.product_size}}</li>
                <li class="d-block">${{cartProduct.product_price}}</li> 
            </ul>  
        </div>
        <div class="row">
            <button class="addFavarite col-lg-5 w-50 m-4 ">View Bag(2)</button>
            <button class="addCardButton col-lg-5 w-50 mt-4 h-50">Checkout</button>
        </div> 
    </div>
</template>
<style scoped>
.cart {
    background-color:white;
    display: none;
    position:absolute;
    width: 450px;
    z-index: 100000;
    top: 0px;
    right:20px;
}
</style>
<script>
    export default {
        name: 'Cart',
        data() {
            return {
            
            }
        },
        computed: {
            cartProduct() {
                 this.$store.dispatch("getCart");
                return  JSON.parse(this.$store.state.cart[this.$store.state.cart.length-1]);
            }
        },
    
        methods: {
          
        }
    }
</script>