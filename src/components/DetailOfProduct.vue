<template>
<div class="content" style="position:relative">
             <Cart :key="comics_reload"></Cart>
            <div class="warrap">
            <div class="row">
                <div class="col-lg-8">
                              <div class="row mt-5"> 
                           <div v-for="imgSrc in detail_images_src" :key=" imgSrc.id" class="col-lg-6  mb-2 pr-3 pl-0">
                                     <img  style="max-width:100%; max-height:100%" :src="imgSrc.img_url" alt="">
                         </div> 
                    </div>
                </div>
                <div class="col-lg-4 mt-5">
                        <div class="row">
                                  <div class="info col-lg-12">
                                     <div class="row">
                                         <div class="col-lg-10">{{ allProducts[$route.params.id-1].category}}</div>
                                         <div class="col-lg-2">${{ allProducts[$route.params.id-1].price}}</div>
                                         <div class="col-lg-12"><h3>{{ allProducts[$route.params.id-1].name}}</h3></div>
                                     </div>
                                  </div>
                                <div v-for=" DetailOfProduct in  DetailOfProducts" :key=" DetailOfProduct.id" class="mb-2 col-lg-3 pr-0 pl-0">
                    
                                       
                                <div style="display:none">{{ DetailOfProduct_id_array.push(DetailOfProduct.id) }}</div>
                                        <img @click="$router.push('/DetailOfProduct/'+$route.params.id+'/'+DetailOfProduct.id, hide())" v-if="DetailOfProduct.id==detail_id" v-show="DetailOfProduct.imgSrc" :src="DetailOfProduct.imgSrc" class="childImage currentImg" alt="">
                                        <img @click="$router.push('/DetailOfProduct/'+$route.params.id+'/'+DetailOfProduct.id), hide()" v-else  class="childImage"  :src="DetailOfProduct.imgSrc" alt="" >
                         
                        </div>
                        <div class="row p-0 m-0">
                            <div class="col-lg-6 mb-3 select_size_text">Select Size</div>
                            <div class="col-lg-6 mb-3">Size Guide</div>
                        </div>
                        <div class="row p-0 m-0 warrapSize ">
                        <div class="col-lg-6  mb-2 mt-2 " v-for="size in sizes" :key="size.id">
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
                            <div class="mx-auto col-lg-9 mt-2 text-dark text-left mt-5 mb-5">{{ allProducts[$route.params.id-1].description}}</div>
                            <div class="mx-auto col-lg-9 mt-2 mb-5 summary">
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
              
                           <div v-for="imgSrc in detail_images_src" :key=" imgSrc.id" class="col-lg-12 m-0 p-0 mt-5 ">
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
            <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
            <div class="MultiCarousel-inner">
                <div class="itemImg" v-for="product in allProducts" :key="product.id">
                    <div class="pad15">
                        <img :src="product.imgSrc" alt="">
                    </div>
                </div>
              
            </div>
            <button class="leftLst"><svg aria-hidden="true" fill="rgb(128,128,128)" height="15px" width="15px" viewBox="0 0 185.4 300"><path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path></svg></button>
            <button class=" rightLst"><svg aria-hidden="true" fill="rgb(128,128,128)" height="15px" width="15px" viewBox="0 0 185.4 300"><path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path></svg></button>
            </div>
            
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

    export default {
        name:'DetailOfProduct', 
        components: {
             Cart:Cart
        },
        data() {
            return {
              DetailOfProduct_id:0,
              DetailOfProduct_id_array:[],
              detail_id:0,
              array:[1,2,3,4,5,6,7],
              count:0,
              checked:false,
              size:null,
              detail_images:null,
            }
        },
        computed: {
            sizes() {
                var n=this;
                this.$store.state.sizes.filter(function(key){
                    n.$store.state.allProducts.[n.$route.params.id-1].sizes.filter(function(k){
                            if(key["size"]===k["size"]){
                                    key.haveSize = "haveSize";
                            }
                     })
                })
                
              return this.$store.state.sizes;
            },
            allProducts() {
            return this.$store.state.allProducts;
            },
            DetailOfProducts() {
                    var id =this.$route.params.id;
                    this.detail_images=this.$store.state.DetailOfProduct.filter(function(key){
                            return (key["products_id"] == id);
                     })
                     return this.detail_images;
            },
            detail_images_src() {
               var id=this.$route.params.idDetail;
               if(id==null) {
                   id=this. DetailOfProduct_id_array[0];
               }
               this.detail_id= id;
                   return this.$store.state.detail_images_src.filter(function(key){
                            return (key["detail_products_id"] == id);
                     });
            }
        },
        mounted() {
            
             $(document).ready(function () {
                $('.cart').hide(); 
                var itemsMainDiv = ('.MultiCarousel');
                var itemsDiv = ('.MultiCarousel-inner');
                var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();
    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)'});
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = (parseInt(xds) - parseInt(itemWidth * s))-300;
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s)+300;
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition-150;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        
    }
    
    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});
            $('.summary>span:nth-child(1)').after().click(function () {
                  $('.summary>span:nth-child(1)').toggleClass('isActive');
                  $('.text').toggleClass('d-block');
            });
          /*   this.$store.dispatch("DetailOfProduct");
             this.$store.dispatch("detail_images_src");
             this.$store.dispatch("getSizes"); */
             this.DetailOfProduct_id_array=[];
             if(this.DetailOfProduct.id==this.$route.params.idDetail){
                    $( ".childImage" ).attr('id', 'currentImage');

             }

        }, methods: {
            hide() {
                
               
                 $('.cart').hide();
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
                     // add data of cart to local storage----------------------------
                        var detail=this.$store.state.allProducts[this.$route.params.id-1];
                        var img=null;
                        var id=this.$route.params.idDetail;
                            if(id==null) {
                                        id=1;
                                        img=detail.imgSrc;
                            } else {
                                        img= this.detail_images.[id-1].imgSrc;
                                }
                        var count=++this.count;
                        var newItem = {
                                        'product_name': detail.name,
                                        'product_image': img,
                                        'product_price': detail.price,
                                        'product_category': detail.category,
                                        'product_color': detail.details.[id-1].Color,
                                        'product_size': this.size,
                                        };
                        localStorage.setItem('totalCount', count);
                        $('#count').html(count);
                        localStorage.setItem('cart', JSON.stringify(newItem));
                        this.$store.dispatch("getCart");
                      
                        $('#psudo-background2').show();
                          this.comics_reload++;
                         $('.cart').show();
                        var tag = $("#"+'app'+"");
                         $('html,body').animate({scrollTop: tag.offset().top},'fast');
                         $('body').css({"margin":"0","height":"100%","overflow":"hidden"});
                        
                    }
               /*    this.comics_reload++; */
              
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