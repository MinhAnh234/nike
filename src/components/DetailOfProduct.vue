<template>
<div class="content" style="position:relative">
             <Cart :key="comics_reload"></Cart>
            <div class="warrap">
            <div class="row">
                 <div class="d-none">{{sizes}}</div>
                 <div class="d-none">{{ avatar_Sizes[0]}}</div>

              <div class="d-none">{{allProducts}}</div> 
                <div class="col-lg-8">
                              <div class="row mt-5" v-if="this.render"> 
                          <div v-for="imgSrc in DetailOfProducts" :key=" imgSrc.id" class="col-lg-6  mb-2 pr-3 pl-0">
                                     <img  style="max-width:100%; max-height:100%" :src="imgSrc.detail_img" alt="">
                         </div>  
                    </div>
                </div>
                <div class="col-lg-4 mt-5">
                        <div class="row">
                                  <div class="info col-lg-12">
                                     <div class="row">
                                         <div class="col-lg-10">Shoes</div>
                                         <div class="col-lg-2">${{  products[$route.params.id-1].price}}</div>
                                         <div class="col-lg-12"><h3>{{  products[$route.params.id-1].name}}</h3></div>
                                     </div>
                                  </div>
                                 <div  v-for=" (allProduct) in this.prd" :key=" allProduct.id" class="mb-2 col-lg-3 pr-0 pl-0">
                                <div class="productColor d-none"  v-if="allProduct.id==$route.params.idDetail">{{allProduct.color}}</div>
                                <img @click="$router.push('/DetailOfProduct/'+$route.params.id+'/'+ allProduct.id)" v-if="allProduct.id==$route.params.idDetail" :src="allProduct.avatar_img" class="childImage currentImg" alt="">
                                <img @click="$router.push('/DetailOfProduct/'+$route.params.id+'/'+ allProduct.id, get())" v-else :src="allProduct.avatar_img" class="childImage " alt="">

                                 </div>
                        <div class="row p-0 m-0">
                            <div class="col-lg-6 mb-3 select_size_text">Select Size</div>
                            <div class="col-lg-6 mb-3">Size Guide</div>
                        </div>
                              <div class="row p-0 m-0 warrapSize " >
                        <div class="col-lg-6  mb-2 mt-2 " v-for="(size) in sizes" :key="size.id">
                                    <div @click="dyClass($event,size.size)" v-if="size.haveSize!=null" class="col-lg-12 select_item_active">{{size.size}} </div>
                                    <div v-else class="col-lg-12 select_item">{{size.size}}</div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 m-3 error text-danger d-none">Please select a size.</div>
                            <div class=" mx-auto col-lg-9 addCardButton mt-2" @click="check(), addToCart()">Add to Bag</div>
                            <div class="mx-auto col-lg-9 addFavarite mt-2 mb-4">Favorite <i class="far fa-heart"></i> </div>
                        </div>
                        <div class="row">
                            <div class="mx-auto col-lg-9 mt-2 bg-light text-secondary text-center">This product is excluded from site promotions and discounts.</div>
<!--                             <div class="mx-auto col-lg-9 mt-2 text-dark text-left mt-5 mb-5">{{ allProducts[$route.params.id-1].description}}</div>
 -->                            <div class="mx-auto col-lg-9 mt-2 mb-5 summary">
                                <span class="d-block position-relative">Free Shipping & Returns</span>
                                <span class="text pb-3">Free standard shipping and free 60-day returns for Nike Members.<u style="text-decoration: underline;"> Learn more.</u> Return policy exclusions apply. Pick-up available at select Nike Stores.</span>
                            </div>
                            <div class="mx-auto col-lg-9 mt-2 mb-5 summary" style="  font-weight: 500; font-size: 20px;">
                                <div class="row">
                                    <span class="col-lg-8">Reviews (1321) </span> 
                                    <span class="col-lg-4" style="display:flex; align-items:center">
                                  
                                        <div class="clip-star"></div>
                                        <div class="clip-star"></div>
                                        <div class="clip-star"></div>
                                        <div class="clip-star"></div>
                                        <div class="clip-star"></div>
                                  
                                     </span>
                                </div>
                               
                            </div>
                           
                        </div>
                    </div>
                
                </div>
            </div>
            <div class="row">
                           <div v-for="imgSrc in DetailOfProducts" :key=" imgSrc.id" class="col-lg-12 m-0 p-0 mt-5 ">
                                     <img v-if="imgSrc.img_banner" style="max-width:100%; max-height:100%" :src="imgSrc.img_banner" alt="">
                                     <h3  v-if="imgSrc.description_title" class="col-lg-12 text-center mt-5 mb-3 ">{{imgSrc.description_title}}</h3>
                                     <div v-if="imgSrc.description" class="col-lg-7 mx-auto text-center" style="font-size:21px">{{imgSrc.description}}</div>
                         </div>  
            </div>
            </div>
            <div class="row m-0 pl-3 " style="font-family: 'Teko', sans-serif; font-size: 25px; font-weight:bold" >
                <div class="col-lg-12">
                     YOU MIGHT ALSO LIKE
                </div>
               
            </div>


          <Intro></Intro>
            
    </div>
    


</template>
<style>
.errorBorder {
    border: 1px solid red;
    color:red;
}
.clip-star {
  background: black;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: 18px;
  width: 18px;
}
    .g72-star {
        font-family: nike-glyphs;
        display: inline-block;
        font-size: inherit;
        line-height: inherit;
        vertical-align: top;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        text-decoration: none;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
    }
    .addBorder {
        border:1px solid black !important;
    }
    .warrap {
        max-width: 1440px;
        margin: 0 auto;
    }
     .childImage {
         max-width: 90%;
         max-height: 90%;
     }
    .childImage:hover {
        border: 1px solid black;
         cursor: pointer;
    }
    .select_item {
    height:50px;
    line-height:50px;
    text-align: center;
    cursor: default;
    color: rgb(221, 221, 221);
    background: rgb(247, 247, 247);
    border: none;
    border-radius: 2% ;
    box-shadow: rgb(229 229 229) 0px 0px 0px 1px;
    max-width: 75%;
    }
    .select_item_active {
    height:50px;
    line-height:50px;
    text-align: center;
    cursor: default;
    color: black;
    background: white;
    border: none;
    border-radius: 2% ;
    box-shadow: rgb(229 229 229) 0px 0px 0px 1px;
    max-width: 75%;
    box-sizing: border-box;
    }
    .select_item_active:hover {
        cursor: pointer;
        height:50px;
        border-radius: 2% ;
        line-height:48px;
        box-sizing: border-box;
        border:1px solid black;
        box-shadow: none !important;
    }
    .currentImg {
        border: 1px solid black;
    }
    .addCardButton {
        text-align: center;
        color: white;
        width: 100%;
        padding: 18px 24px;
        border-radius: 30px;
        background: rgba(0,0,0,.75);
    }
    .addFavarite {
        text-align: center;
        color: black;
        width: 100%;
        padding: 18px 24px;
        border-radius: 30px;
        border:1px solid #b5b5b5;
    }
    .addCardButton:hover{
        background: rgba(0,0,0,.5);
        cursor: pointer;
    }
    .addFavarite:hover{
        cursor: pointer;
        border:1px solid gray;
    }
    .summary {
    color: #111;
    min-height:80px;
    height:auto;
    border-top: 1px solid rgb(221, 221, 221);
    border-bottom: 1px solid rgb(221, 221, 221);
    }
     .summary:hover {
         cursor: pointer;
     }
     .summary span:nth-child(1) {
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-weight: 500;
            font-size: 20px;
            line-height: 80px;
            text-align: center;
     }
     .summary>span:nth-child(1)::after {
            content: '';
            position: absolute;
            right: 6px;
            top: calc(50% - 6px);
            border: solid black;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg)
      }
        .isActive::after {
           top: calc(50% - 4px);
           transform: rotate(-135deg) !important;
        }
        .summary> span.text {
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
            line-height: auto !important;
        }
        .text {
            display:none;
        }
        .rightLst {
            border:none;
            background-color:none;
        }
      
</style>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<script>
    import Cart from './Cart.vue';
    import Size from './Size.vue';
    import Intro from './Intro.vue'
    export default {
        name:'DetailOfProduct', 
        components: {
             Cart:Cart, Size:Size,Intro
        },
        data() {
            return {
             forceRecomputeCounter: 0,
             render:false,
              comics_reload:0,
              detail_id:0,
              count:0,
              checked:false,
              getData:false,
              prd:null,
              index:0,
              products:'',
              size:'',

            }
        },
        computed: {
            getImg() {
                 return this.$store.dispatch("getDetailImg",this.$route.params.idDetail);
            
            },
            avatar_Sizes(){
                return this.$store.state.avatar_Sizes;
            },
            sizes() {
                var n=this;
                this.$store.state.sizes.filter(function(key){
                     key.haveSize = null;
                })
                this.$store.state.sizes.filter(function(key){
                    n.$store.state.avatar_Sizes[n.$route.params.idDetail-1].sizes.filter(function(k){
                            if(key["size"]===k["size"]){
                                    key.haveSize = "haveSize";
                            }
                           
                     })
                })
                  
              return this.$store.state.sizes;
            },
             allProducts() {
                var id=this.$route.params.id;
                this.products=this.$store.state.allProducts;
                 var  allProducts=this.$store.state.allProducts.filter(function(key){
                            return (key["id"] == id);
                     })
                     
                     this.prd= allProducts[0].avatar_img;
                     return  allProducts;
            },
            DetailOfProducts() {
                this.forceRecomputeCounter;
                     return this.$store.state.detailImg;
            },
          
         /*    allProducts() {
                return this.$store.state.allProducts;
            } */
           /*  detail_images_src() {
               var id=this.$route.params.idDetail;
               if(id==null) {
                   id=this. DetailOfProduct_id_array[0];
               }
               this.detail_id= id;
                   return this.$store.state.detail_images_src.filter(function(key){
                            return (key["detail_products_id"] == id);
                     });
            } */
        },
        mounted() {  
            this.render=false;
            this.$store.dispatch("getDetailImg",this.$route.params.idDetail);
            this.render=true;
             this.forceRecomputeCounter++;
            this.$store.dispatch("getAllProducts");
            this.$store.dispatch("getAvatarSize");
            this.$store.dispatch("getSizes");
            if(!this.$route.params.idDetail) {
                $('.currentImg').click();
            }
             $(document).ready(function () {
                $('.cart').hide(); 
                });
        }, methods: {
            
            hide() {
                 $('.cart').hide();
            },
            get() {
                this.render=true;
                   this.$store.dispatch("getDetailImg",this.$route.params.idDetail);
                   this.render=true;
                    this.forceRecomputeCounter++;
            },
            check() {
                if(!this.checked) {
                    $('.error').removeClass("d-none");
                    $('.warrapSize').addClass("errorBorder"); 
                    $('.select_size_text').css('color','red');
                }
                else {
                    $('.error').addClass("d-none");
                    $('.warrapSize').removeClass("errorBorder"); 
                    $('.select_size_text').css('color','black');
                }
            },
             dyClass: function(event,size) {
                this.size=size;
                 this.checked=true;
                 this.check();
                 $('.addBorder').removeClass("addBorder");
                event.target.classList.toggle('addBorder');
            },
            addToCart() {
                 var id=this.$route.params.idDetail;
                    if(id==null) {
                   id=this. DetailOfProduct_id_array[0];
                     }
                if(this.checked) {
                 
                        var currentId=this.$route.params.id;
                        var count=++this.count;
                        var newItem = {
                                        'product_name': this.$store.state.allProducts[id-1].name,
                                        'product_image': $('.currentImg').attr('src'),
                                        'product_price': this.$store.state.allProducts[id-1].price,
                                        'product_category':this.$store.state.allProducts[id-1].category,
                                        'product_color':$('.productColor').html(),
                                        'product_size': this.size,
                                        'product_quantity': 1,
                                        };
                        if(localStorage.getItem('allItems')){
                            var allItems= [];
                            var oldItems=JSON.parse(localStorage.getItem('allItems'));
                             for(let i=0;i<oldItems.length;i++) {
                                    allItems.push(oldItems[i])
                            }
                          
                            for(let i=0;i< allItems.length;i++) {
                              if(allItems[i].product_image==newItem.product_image && allItems[i].product_size==newItem.product_size ) {
                                  allItems[i].product_quantity+=1;
                              }
                              else {
                                    allItems.push(newItem);
                                    break;
                              }
                            }
                          
                            localStorage.setItem('allItems', JSON.stringify(allItems));
                            console.log(allItems[0]);
                            console.log(newItem);
                            console.log(allItems[0].product_category==newItem.product_category);
                        }
                        else {
                           var allItems= [];
                           allItems.push(newItem);
                               localStorage.setItem('allItems', JSON.stringify(allItems));
                            
                        }
                        localStorage.setItem('totalCount', count);
                        $('#count').html(count);
                        localStorage.setItem('cart', JSON.stringify(newItem));
                        this.$store.dispatch("getCart");
                      
                        $('#psudo-background2').show();
                         $('.cart').show();
                        var tag = $("#"+'app'+"");
                         $('html,body').animate({scrollTop: tag.offset().top},'fast');
                         $('body').css({"margin":"0","height":"100%","overflow":"hidden"});
                        
                    }
              
                   $('.cart').show();
                    setTimeout(function(){ 
                         $('#psudo-background2').hide();
                         $('body').css({"overflow":"auto"});      
                         $('.cart').hide(); 
                         this.checked=false; }
                        , 5000);
                     
            }
        }

        
    }
</script>