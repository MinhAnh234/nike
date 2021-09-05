<template>
    <div>
    <Header :key="reload"></Header>
    <div class=" container">
        
        <form @submit.prevent="submitLogin()" method="POST" class="loginForm">
            
            <div class="row logo_form_login ">
                    <img src="https://s3.nikecdn.com/unite/app/904/images/swoosh_black.png" class=" mt-4 mb-4" alt="">
                    <button @click="close" type="button" class="pr-2 hover_pointer close_button"><svg fill="#111" height="20px" width="20px" viewBox="0 0 24 24"><path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z"></path></svg>
                    </button>
            </div>
            <div class="col-lg-8 view-header mx-auto mb-4">YOUR ACCOUNT FOR EVERYTHING NIKE</div>
            <div class="col-lg-11 mx-auto">
                <small class="text-danger mb-2 error" >{{ this.error }}</small>
                <input type="email" name="email" class="form-control mb-2 " v-model="email" id="emailLogin" v-bind:class="{'is-invalid' :email==''| error!=''}" aria-describedby="emailHelp" placeholder="Enter email">
                <small class="form-text text-danger mb-2  errorEmail invalid-feedback"></small>  
                <input type="password" name="password" class="form-control mb-3" v-model="password" id="passwordLogin"  v-bind:class="{'is-invalid' :password==''| error!=''}" placeholder="Password">
                <small  class="form-text text-danger mb-3  errorPassword">Please enter a password.</small>  
                <div class="row pl-3">
                     <div class="col-lg-5 p-0">  
                         <input type="checkbox" class="mr-2 ml-0  large" style="vertical-align: middle;" >
                         <label class="form-check-label ml-1 hover_pointer" for="Check">Keep me signed in</label>
                     </div>
                    <div class="col-lg-7 p-0 text-muted" style="text-align: right">
                        <small class="hover_pointer">Forgot password? </small>
                    </div>
                </div>
                <div class="col-lg-12 text-muted mt-3 mb-3" style="line-height: 18px; text-align:center">
                    <small>By logging in, you agree to Nike's <span  class="text_decoration hover_pointer">Privacy Policy</span> and <span class="text_decoration hover_pointer">Terms of Use.</span></small>
                </div>
                <button type="submit" class="w-100 mb-3 hover_pointer bg-dark text-light">SIGN IN</button>
                <small class="text-muted text-center d-block mb-4">Not a member?
                     <span class="text-dark hover_pointer text_decoration" @click="registerForm()"> Join Us.</span>
                </small>
            </div>
        </form>
        <form @submit.prevent="submitRegister()" action="/" class="registerForm">
            <div class="row logo_form_login ">
                    <img src="https://s3.nikecdn.com/unite/app/904/images/swoosh_black.png" class=" mt-4 mb-4" alt="">
                    <button @click="close" type="button" class="pr-2 hover_pointer close_button"><svg fill="#111" height="20px" width="20px" viewBox="0 0 24 24"><path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z"></path></svg>
                    </button>
            </div>
            <div class="col-lg-8 view-header mx-auto mb-4">BECOME A NIKE MEMBER</div>
            <div class="col-lg-11 mx-auto">
                <input type="email" name="email" class="form-control mb-1 inputEmail" v-model="registerUser.email" v-bind:class="{'is-invalid' :registerUser.email==''}" placeholder="Email">
                <small v-show="registerUser.email==''" class="form-text text-danger errorEmailRegister  mb-3"  aria-describedby="emailHelp" style="display:block">Please enter email.</small>  
                
                <input type="password" name="password" class="form-control mt-3 mb-1 inputPassword" v-model="registerUser.password" v-bind:class="{'is-invalid' :registerUser.password==''}" placeholder="Password">
                <small v-show="registerUser.password==''" class="form-text text-danger mb-3  errorPasswordRegister">Please enter password.</small>  
                
                <input type="text" name="firstName" class="form-control mt-3 inputFirstName" v-model="registerUser.firstName" v-bind:class="{'is-invalid' :registerUser.firstName==''}" placeholder="First Name ">
                <small v-show="registerUser.firstName==''" class="form-text text-danger errorFirstName ">Please enter your first name.</small>  
                
                <input type="text" name="name" class="form-control mt-3 inputName " v-model="registerUser.name" v-bind:class="{'is-invalid' :registerUser.name==''}" placeholder="Last Name ">
                <small v-show="registerUser.name==''" class="form-text text-danger errorName ">Please enter your last name.</small>  
                
                <input type="date" name="birthDate" class="form-control mt-3" v-model="email" id="exampleInputEmail7" v-bind:class="{'is-invalid' :email==''}" placeholder="Date of Birth">
                
                <select class="w-100 mt-3 select_country text-dark" >
                        <option value="0">Select country</option>
                        <option value="1">Japan</option>
                        <option value="2">Korean</option>
                        <option value="3">VietNam</option>
                        <option value="3">China</option>
                </select>
                
                <input type="button" class="select_sex hover_pointer mt-3" value="Male" @click="addBorder($event)">
                <input type="button" class="select_sex hover_pointer mt-3" value="Femail" @click="addBorder($event)" style="float:right">
                <div class="row pl-3">
                         <input type="checkbox" class=" ml-0 mt-3 large" style="vertical-align: middle;" >
                         <label class="form-check-label ml-1 hover_pointer col-lg-10 mt-3 pl-1 mr-0 p-0" style="" for="Check">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</label>
                   
                </div>
                <div class="col-lg-12 text-muted mt-3 mb-3" style="line-height: 18px; text-align:center">
                    <small>By logging in, you agree to Nike's <span  class="text_decoration hover_pointer">Privacy Policy</span> and <span class="text_decoration hover_pointer">Terms of Use.</span></small>
                </div>
                <button type="submit" class="w-100 mb-3 hover_pointer bg-dark text-light">JOIN US</button>
                <small class="text-muted text-center  mb-4">All ready member? <span class="text-dark hover_pointer text_decoration" @click="signInForm"> Sign in</span></small>
            </div>
        </form>
    </div>
    </div>
</template>
<style scoped>
small {
   
}
  input.large {
        width: 20px;
        height: 20px;
}
.loginForm input, .registerForm input{
    font-size: 14px !important;
    height:40px;
}
.logo_form_login img{
    margin-left:50%;
}
.logo_form_login button{
    margin-left:25%;
}
button {
    padding: 0;
    border: none;
    background: none;
}
.loginForm,.registerForm {
    background-color:white;
    z-index:8;
    display:block;
    width:22%;
    position: fixed;
    left: 38%;
}
.loginForm {
      top: 25%;
}
.registerForm {
    top:8%;
}
label {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 12px;
    color:gray;
}
.loginForm img{
    max-height: 100%;
}
.view-header {
    line-height: 25px;
    font-weight: bold;
    text-align: center;
    font-family: 'Teko';
    font-weight: 300;
    font-size: 30px;
}
.hover_pointer:hover {
    cursor: pointer;
    color:black;
}

l:hover {
    cursor: pointer;
}

button {
     font-family: 'Teko';
     font-size:20px;
}
.text_decoration {
    text-decoration: underline;
}
.select_sex,.select_country {
    border:1px solid #b5b5b5;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 15px;
    background-color: white;
    color: gray;
    width: 45%;
    height:40px;
    border-radius: 4px;
}
.border {
    border: 1px solid black !important;
    color:black;
}

</style>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<script>
const axios = require('axios').default;
import Header from './Header.vue'
export default {
    components:{
        Header
    },
    data() {
        return {
            email:null,
            password:null,
            error:'',
            reload:1,
            registerUser:{
                email:'',
                password:'',
                name:'',
                firstName:'',
                name:'',
            }
        }
    }, watch: {
        email: function() {
            if(this.email!=''){
                $('.errorEmail').hide();
                $('#emailLogin').removeClass("is-invalid");
            } else {
                $('.errorEmail').show();
                $('.errorEmail').html('Please enter a valid email address.');     
            }
        },
         password: function() {
            if(this.password!=''){
                $('.errorPassword').hide();
                 $('#passwordLogin').removeClass("is-invalid");
            } else {
                $('.errorPassword').show();
                $('.errorPassword').html('Please enter a valid password.');     
            }
        },
        //  registerUser : {
        //     handler(val){
                
        //     },
        //     deep: true
        //  }
    },
     mounted: function() {
            $('input').removeClass("is-invalid");
            $("form").submit(function(e){
                e.preventDefault();
            });
           
            $('.text-danger').hide();
            this.hide();
                var self=this;
            $('#emailLogin').click(function (){
                $(document).click(function(event) { 
                    var $target = $(event.target);
                    if(!$target.closest('#emailLogin').length && 
                            $('#emailLogin').is(":visible")) {
                              if(self.email==null){
                                 $('#emailLogin').addClass("is-invalid");
                                 $('.errorEmail').show();
                                 $('.errorEmail').html('Please enter a valid email address.');     
                              }
                    }        
                });
               
            })
               $('#passwordLogin').click(function (){
                $(document).click(function(event) { 
                    var $target = $(event.target);
                    if(!$target.closest('#passwordLogin').length && 
                            $('#passwordLogin').is(":visible")) {
                              if(self.password==null){
                                 $('#passwordLogin').addClass("is-invalid");
                                 $('.errorPassword').show();
                                 $('.errorPassword').html('Please enter a valid password.');     
                              }
                    }        
                });
               
            })
     },
        methods:{
            hide() {
                $('#psudo-background3').hide();
                $('.loginForm').hide();
                $('.registerForm').hide();
            },
            close() {
                this.login=true;
                this.hide();
                
            },
            registerForm() {
                $('.loginForm').hide();
                $('.registerForm').show();
            }, 
            signInForm() {
                $('.loginForm').show();
                $('.registerForm').hide();
            },
            addBorder($event) {
                $('.border').removeClass( "border" );
                $event.target.classList.add('border');
            },
            submitLogin() {
                axios.post('https://nameless-cove-44446.herokuapp.com/api/login', {
                            email: this.email,
                            password: this.password,
                        })
                        .then((response) => {
                            this.hide();
                            document.cookie = "user="+response.data.token;
                            
                            localStorage.setItem("token",response.data.token);
                            localStorage.setItem("userInfo",JSON.stringify(  response.data));
                            this.reload++;
                        })
                        .catch((error) => {
                            $('#emailLogin').addClass("is-invalid");
                            $('#passwordLogin').addClass("is-invalid");
                            $('.error').show();
                             this.error=error.response.data.error;    
                        });
            }, submitRegister() {
                axios.post('https://nameless-cove-44446.herokuapp.com/api/register', 
                            this.registerUser,
                             {headers: {'Accept': 'application/json'}}
                            )
                        .then((response) => {
                            this.hide();
                            localStorage.setItem("token",response.data.token);
                            localStorage.setItem("userInfo",JSON.stringify(  response.data));
                            this.reload++;
                        })
                        .catch((error) => {
                           let err=error.response.data.errors;
                              if(err.email[0]!=null){
                                  $('.inputEmail').addClass("is-invalid");
                                  $('.errorEmailRegister').html(err.email[0]);
                                  $('.errorEmailRegister').show();
                              }
                               if(err.password[0]!=null){
                                  $('.inputPassword').addClass("is-invalid");
                                  $('.errorPasswordRegister').html(err.password[0]);
                                  $('.errorPasswordRegister').show();
                              }
                                if(err.name[0]!=null){
                                  $('.inputName').addClass("is-invalid");
                                  $('.errorName').html(err.name[0]);
                                  $('.errorName').show();
                              }
                        });
            }
        }
}
</script>
