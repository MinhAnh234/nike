<template>
    
      <div class="col-lg-11 main p-0" >
          
                            <div v-for="product in allProducts " :key="product.id" class="col-lg-3 col-sm-1 d-inline-block mt-4 mb-5 img-product pl-2">
                                 <router-link :to="'/DetailOfProduct/'+product.id+'/'+product.avatar_img[0].id">
                                         <img :src="product.img" style="max-height:500px; width: 550px;" alt="">
                                  </router-link>
                                <div class="warrap-product-info">
                                    <a href="" class="just-in mt-2 mb-2">Just In</a>
                                    <div class="product-name mt-2 mb-2">{{product.name}}</div>
                                    <div class="category mt-2 mb-2 gray-text ">{{product.category}}</div>
                                    <div class="category-color mt-2 mb-2 gray-text">{{ product.num_color }} Colors</div>
                                    <div class="price mt-3 mb-2 ">${{product.price}}</div>
                                </div>
                            </div>
        </div>
      
</template>
<script>
export default {
    name: 'Products',
    computed: {
            allProducts() {
            return this.$store.state.allProducts;
            }
        },
    mounted() {
       this.$store.dispatch("getAllProducts");
    }
    
}

</script>
