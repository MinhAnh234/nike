<template>
            <div class="row p-0 m-0 warrapSize " >
                        <div class="col-lg-6  mb-2 mt-2 " v-for="(size) in sizes" :key="size.id">
                                    <div @click="dyClass($event,size.size)" v-if="size.haveSize!=null" class="col-lg-12 select_item_active">{{size.size}} </div>
                                    <div v-else class="col-lg-12 select_item">{{size.size}}</div>
                        </div>
                        </div>
</template>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>

  <script>
    export default {
        name: 'Cart',
        data() {
            return {
                 size:null,
                 checked:false
            }
        },computed: {
             sizes() {
                var n=this;
                this.$store.state.sizes.filter(function(key){
                    n.$store.state.avatar_Sizes[n.$route.params.idDetail-1].sizes.filter(function(k){
                            if(key["size"]===k["size"]){
                                    key.haveSize = "haveSize";
                            }
                     })
                })
              return this.$store.state.sizes;
            },

        },
        mounted() {
           
            this.$store.dispatch("getAvatarSize");
            this.$store.dispatch("getSizes");
        },
        methods: {
              dyClass: function(event,size) {
                this.size=size;
                 this.checked=true;
                 this.check();
                 $('.addBorder').removeClass("addBorder");
                event.target.classList.toggle('addBorder');
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
        }
    }
</script>