<template>
   <header> 
                    <div id="psudo-background"></div>
                    <div id="psudo-background2"></div>
                    
                    <div class="header-nav main-wrapper">
                             <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                            <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                            </path>
                             </svg>
                        <ul class="header-login" > 
                            <li>Help</li>
                            <li @click="register" v-show="login">Join Us</li>
                            <li v-show="!login" style="max-width:45%" class="ml-1 mr-2">Hi!, {{name}}<i class="fas fa-user ml-2 mr-1"></i></li>
                            <li v-show="!login" @click="logout()" >Logout</li>
                            <li @click="sign_in" v-show="login">Sign in </li>
                        </ul>
                    </div>
                    <div class="menu main-wrapper" >
                        <div class="row" >
                            <div class="col-3 col-lg-1 header-logo">
                                <svg @click="home()" class="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
                            </div>
                            <div class="col-lg-8 releases-header">
                                <ul  id="releases" class="d-block">
                                    <li class="releases"><a  href="#">New Releases </a> 
                                        <span id="releases-menu">
                                            <ul class="col-lg-6 mx-auto releases-menu-warrap">
                                                <span class="row">
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a> new & featured</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">Shoes</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Clothing</a></li>
                                                        <li class=" d-block"><a>Equipment</a></li>
                                                        <li class=" d-block"><a>USA Team Gear</a></li>
                                                        <li class=" d-block"><a>Red, White & Blue</a></li>
                                                        <li class=" d-block"><a>Nike x Space Jam: A New Legacy</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>  New For Men</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">Shoes</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Clothing</a></li>
                                                        <li class=" d-block"><a>Equipment</a></li>
                                                        <li class=" d-block"><a>Shop All New</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>  New For Women</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">Shoes</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Clothing</a></li>
                                                        <li class=" d-block"><a>Equipment</a></li>
                                                        <li class=" d-block"><a>Shop All New</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>  New For Kids</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">Boys Clothing</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Girls Shoes</a></li>
                                                        <li class=" d-block"><a>Equipment</a></li>
                                                        <li class=" d-block"><a>Girls Clothing </a></li>
                                                        <li class=" d-block"><a>Shop All New</a></li>
                                                    </span>
                                                </span>
                                               
                                            </ul>
                                        </span>
                                    </li>
                                    <li class="releases"><a  href="#">Men </a> 
                                        <span id="releases-men">
                                            <ul class="col-lg-6 mx-auto releases-menu-warrap">
                                                <span class="row">
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a> new & featured</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">New Releases</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Best Sellers</a></li>
                                                        <li class=" d-block"><a>Best of Air Max</a></li>
                                                        <li class=" d-block"><a>Cross Country Gear</a></li>
                                                        <li class=" d-block"><a>Red, White & Blue</a></li>
                                                        <li class=" d-block"><a>Nike x Space Jam: A New Legacy</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>  Shoes</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">Lifestyle</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Running</a></li>
                                                        <li class=" d-block"><a>Basketball</a></li>
                                                        <li class=" d-block"><a>Jordan</a></li>
                                                        <li class=" d-block"><a>Training & Gym</a></li>
                                                        <li class=" d-block"><a>Soccer</a></li>
                                                        <li class=" d-block"><a>Golf</a></li>
                                                        <li class=" d-block"><a>Cross Country</a></li>
                                                        <li class=" d-block"><a>Skateboarding</a></li>
                                                        <li class=" d-block"><a>Tennis</a></li>
                                                        <li class=" d-block"><a>Sandals & Slides</a></li>
                                                        <li class=" d-block"><a>Shoes $100 & Under</a></li>
                                                        <li class=" d-block"><a>All Shoes</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>Clothing</a></li>
                                                        <li class=" d-block"><a>Tops & T-Shirts</a></li>
                                                        <li class=" d-block"><a>Shorts</a></li>
                                                        <li class=" d-block"><a>Hoodies & Sweatshirts</a></li>
                                                        <li class=" d-block"><a>Pants & Tights</a></li>
                                                        <li class=" d-block"><a>Matching Sets</a></li>
                                                        <li class=" d-block"><a>Jackets & Vests</a></li>
                                                        <li class=" d-block"><a>Swimwear</a></li>
                                                        <li class=" d-block"><a>Polos</a></li>
                                                        <li class=" d-block"><a>Nike Pro</a></li>
                                                        <li class=" d-block"><a>Yoga</a></li>
                                                        <li class=" d-block"><a>Socks</a></li>
                                                        <li class=" d-block"><a>Underwear</a></li>
                                                        <li class=" d-block"><a>Big & Tall</a></li>
                                                        <li class=" d-block"><a>Sustainable Materials</a></li>
                                                        <li class=" d-block"><a>Clothing $50 & Under</a></li>
                                                        <li class=" d-block"><a>All Clothing</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">Boys Clothing</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Girls Shoes</a></li>
                                                        <li class=" d-block"><a>Equipment</a></li>
                                                        <li class=" d-block"><a>Girls Clothing </a></li>
                                                        <li class=" d-block"><a>Shop All New</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>Shop Collection</a></li>
                                                        <li class="d-block"><a href=""> Golf</a></li>
                                                        <li class="d-block"><a href=""> Jordan</a></li>
                                                        <li class="d-block"><a href=""> Soccer</a></li>
                                                        <li class="d-block"><a href=""> Running</a></li>
                                                        <li class="d-block"><a href=""> Basketball</a></li>
                                                        <li class="d-block"><a href=""> Tennis</a></li>
                                                        <li class="d-block"><a href=""> NikeLab</a></li>
                                                        <li class="d-block"><a href=""> Training & Gym</a></li>
                                                        <li class="d-block"><a href=""> Football</a></li>
                                                        <li class="d-block"><a href=""> Baseball</a></li>
                                                        <li class="d-block"><a href=""> Nike Sportswear</a></li>
                                                        <li class="d-block"><a href=""> ACG</a></li>
                                                        <li class="d-block"><a href=""> Skateboarding</a></li>
                                                        <li class="d-block"><a href=""> Lacrosse</a></li>
                                                        <li class="d-block"><a href=""> Fan Gear</a></li>
                                                        <li class="d-block"><a href=""> Nike FlyEase</a></li>
                                                </span>
                                                </span>
                                               
                                            </ul>
                                        </span>
                                    </li>
                                    <li class="releases"><a  href="#">Woman </a> 
                                        <span id="releases-woman">
                                            <ul class="col-lg-6 mx-auto releases-menu-warrap">
                                                <span class="row">
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a> new & featured</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">New Releases</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Best Sellers</a></li>
                                                        <li class=" d-block"><a>Best of Air Max</a></li>
                                                        <li class=" d-block"><a>Cross Country Gear</a></li>
                                                        <li class=" d-block"><a>Red, White & Blue</a></li>
                                                        <li class=" d-block"><a>Nike x Space Jam: A New Legacy</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>  Shoes</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">Lifestyle</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Running</a></li>
                                                        <li class=" d-block"><a>Basketball</a></li>
                                                        <li class=" d-block"><a>Jordan</a></li>
                                                        <li class=" d-block"><a>Training & Gym</a></li>
                                                        <li class=" d-block"><a>Soccer</a></li>
                                                        <li class=" d-block"><a>Golf</a></li>
                                                        <li class=" d-block"><a>Cross Country</a></li>
                                                        <li class=" d-block"><a>Skateboarding</a></li>
                                                        <li class=" d-block"><a>Tennis</a></li>
                                                        <li class=" d-block"><a>Sandals & Slides</a></li>
                                                        <li class=" d-block"><a>Shoes $100 & Under</a></li>
                                                        <li class=" d-block"><a>All Shoes</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>Clothing</a></li>
                                                        <li class=" d-block"><a>Tops & T-Shirts</a></li>
                                                        <li class=" d-block"><a>Shorts</a></li>
                                                        <li class=" d-block"><a>Hoodies & Sweatshirts</a></li>
                                                        <li class=" d-block"><a>Pants & Tights</a></li>
                                                        <li class=" d-block"><a>Matching Sets</a></li>
                                                        <li class=" d-block"><a>Jackets & Vests</a></li>
                                                        <li class=" d-block"><a>Swimwear</a></li>
                                                        <li class=" d-block"><a>Polos</a></li>
                                                        <li class=" d-block"><a>Nike Pro</a></li>
                                                        <li class=" d-block"><a>Yoga</a></li>
                                                        <li class=" d-block"><a>Socks</a></li>
                                                        <li class=" d-block"><a>Underwear</a></li>
                                                        <li class=" d-block"><a>Big & Tall</a></li>
                                                        <li class=" d-block"><a>Sustainable Materials</a></li>
                                                        <li class=" d-block"><a>Clothing $50 & Under</a></li>
                                                        <li class=" d-block"><a>All Clothing</a></li>
                                                        <li class=" d-block"><a href="wwww.abc.come">Boys Clothing</a></li>
                                                        <li class=" d-block"><a href="wwww.bcd.come">Girls Shoes</a></li>
                                                        <li class=" d-block"><a>Equipment</a></li>
                                                        <li class=" d-block"><a>Girls Clothing </a></li>
                                                        <li class=" d-block"><a>Shop All New</a></li>
                                                    </span>
                                                    <span class="col-lg-3">
                                                        <li class=" d-block mt-4 mb-4"><a>Shop Collection</a></li>
                                                        <li class="d-block"><a href=""> Golf</a></li>
                                                        <li class="d-block"><a href=""> Jordan</a></li>
                                                        <li class="d-block"><a href=""> Soccer</a></li>
                                                        <li class="d-block"><a href=""> Running</a></li>
                                                        <li class="d-block"><a href=""> Basketball</a></li>
                                                        <li class="d-block"><a href=""> Tennis</a></li>
                                                        <li class="d-block"><a href=""> NikeLab</a></li>
                                                        <li class="d-block"><a href=""> Training & Gym</a></li>
                                                        <li class="d-block"><a href=""> Football</a></li>
                                                        <li class="d-block"><a href=""> Baseball</a></li>
                                                        <li class="d-block"><a href=""> Nike Sportswear</a></li>
                                                        <li class="d-block"><a href=""> ACG</a></li>
                                                        <li class="d-block"><a href=""> Skateboarding</a></li>
                                                        <li class="d-block"><a href=""> Lacrosse</a></li>
                                                        <li class="d-block"><a href=""> Fan Gear</a></li>
                                                        <li class="d-block"><a href=""> Nike FlyEase</a></li>
                                                </span>
                                                </span>
                                               
                                            </ul>
                                        </span>
                                    </li>
                                    <li><a href="#">Kids</a></li>
                                    <li><a href="#">Sale</a></li>
                                    <li><a href="#">Customize</a></li>
                                    <li><a href="#">Conllections</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 item" id="item-warrap" >
                                <label class="pre-search"  for="search">
                                    <i class="fas fa-search" ></i>
                                    <input id="search" type="text" placeholder="Search">
                                </label>
                             <div class="heart-warrap">
                                 <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24" ><path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path></svg>
                            </div>
                               
                            <div class="cart-warrap" @click="$router.push('/viewCart')">
                                <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24" style="right:5px"><path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path><path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path></svg>
                                <span id="count" style="font-size:12px" data-var="jewel">{{count}}</span>
                            </div>
                            </div>
                        </div>
                    </div>

              <!--  ----------****************----------------- banner -->


                    <div class="banner-title">
                        <div class="row">
                            <div class="col-lg-6 col-12 mx-auto ">
                                <div class=" row " style="width:100%">
                                    <div class="col-lg-12 mx-auto">
                                        <svg aria-hidden="true" fill="rgb(128,128,128)" height="30px" width="30px" viewBox="0 0 185.4 300"><path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path></svg>
                                        <div class=" d-inline-block sale-warrap ">
                                            <div class="sale_1 active">
                                                <span>Save up to 40% </span>
                                                <a style="text-align:center"> Shop All Our New Markdowns</a>
                                            </div>
                                            <div class="sale_2 ">
                                                <span>FREE SHIPPING & 60-DAY FREE RETURNS</span>
                                                <a class="text_decoration text-center" > Join now</a>
                                            </div>
                                        </div>
                                        <svg aria-hidden="true" fill="rgb(128,128,128)" height="30px" width="30px" viewBox="0 0 185.4 300"><path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                       
                    </div>

            
                <!--  ----------****************----------------- end banner -->
            </header>
</template>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<script>
export default {
  name: 'Header', 
 data() {
     return {
        count:0,
        login:false,
        name:'',
     }
 },
  mounted() {
    this.changeSale();
       function change() {
        setTimeout(function(){
          $('.sale_1').toggleClass('active');
          $('.sale_2').toggleClass('active');
            change();
      },5000)
      };
      change();
     
       if(localStorage.getItem('userInfo')!=null) {
          this.name=JSON.parse(localStorage.getItem('userInfo')).name;
       }
      document.getElementById("releases").addEventListener("mouseover", function(){
        document.getElementById("psudo-background").style.display="block";
    });
    document.getElementById("releases").addEventListener("mouseout", function(){
        document.getElementById("psudo-background").style.display="none";
    });
    this.count=localStorage.getItem('totalCount');
    this.checkLogin();
  },
  methods: {
      home(){
          this.$router.push('/');
      },
      changeSale() {
          $('.banner-title svg').click(function (){
          $('.sale_1').toggleClass('active');
          $('.sale_2').toggleClass('active');
      });
      },
      sign_in() {
          $('#psudo-background3').show();
          $('.loginForm').show();
      },
      checkLogin() {
          if(localStorage.getItem('token')==null) {
             this.login=true
          } else {
              this.login=false
          }
      },
      register() {
          $('#psudo-background3').show();
          $('.registerForm').show();
      },
      logout() {
          this.login=true;
          localStorage.removeItem('userInfo');
          localStorage.removeItem('token');
      }
  }
}
</script>
