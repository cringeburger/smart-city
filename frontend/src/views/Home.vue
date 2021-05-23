<template>
    <div id='home'>
        <div id='firstbanner'>
            <Menu
            v-bind:Active="isActive"/>
            <div class='container-fluid'>
                <div class='row mt-5'>
                    <div class='col-12 col-lg-6 col-xl-5 text-center'>
                        <div class='container-md g-sm-0'>
                            <h1 class="display-3  color-blue important-text">Электронная карта умного города</h1>
                            <p class='h3 mt-4'>-Не просто способ оплаты, но и уникальная возможность получить персонализированные скидки!</p>
                            <p class='h3 d-none d-md-block'> 
                                Оплачивайте музеи, театры, кинотеатры, транспорт с помощью единой системы оплаты, зарабатывайте достижения в профиле
                                и тратьте полученные бонусы на ваши нужды! </p>
                            <button class='btn_default'><i class="fa fa-credit-card-alt" aria-hidden="true"></i>&nbsp;
                            <router-link to='/profile' style="{text-decoration: none !important}">Оформить</router-link>
                            </button>
                            <p class='mt-2'>Для оформления карты перейдите в профиль</p>
                        </div>
                    </div>
                    <div class='col-12 col-lg-6 col-xl-7 text-center'>
                    <div class='container-fluid mt-5'>
                        <img class='img-fluid float-left' src='@/assets/smartCard.png'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='RightTopBackground'></div>  
        <div id='secondbanner'>
            <div class="container-fluid text-center sb-position">
                <p class='color-orange h4'><i class="fa fa-cube" aria-hidden="true"></i></p>
                <h2 class='display-4 color-blue important-text mb-5'>Наши преимущества</h2>
                <div class='container mt-5 cardscontainer'>
                    <div class='row mt-5 row-flex row-flex-wrap text-center'>
                        <SecondBannerCard 
                            v-for="carditem of cardItems" :key="carditem.id"
                            v-bind:carditem="carditem"/>
                    </div>
                </div>
            </div>
        </div>
        <div id='thirdbanner'>
            <div class="container-fluid text-center mt-5 mb-5">
                <p class='important-text color-blue h2'>Обратите внимание на наших чат-ботов в социальных сетях</p>
                <p class='h3'>Быстрый доступ ко всем услугам в</p>
                <button class='btn_default mb-2'><i class="fa fa-telegram" aria-hidden="true"></i>&nbsp;telegram</button>
                <button class='btn_default btn-reverse mb-2'><i class="fa fa-vk" aria-hidden="true"></i>&nbsp;vkontakte</button>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import SecondBannerCard from '@/components/SecondBannerCard.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Home',   
  components: {
    Menu,
    SecondBannerCard,
    Footer
  },
  data(){
      return{
          isActive:[
              {Home:true, Cataloge:false, Profile:false}
          ],
          cardItems:[
              {id: 'cardItems1', title: 'Универсальность', li:[
                  {id:'1', title: 'Оплачивайте'},
                  {id:'2', title: 'Бронируйте'},
                  {id:'3', title: 'Получайте бонусы'},
                  {id:'4', title: 'Оставайтесь в курсе событий'},
              ], bottomtext:'С умной картой Новороссийка', maincolor:'#2BB473', background:'#2BB4732c', icon:'fa-credit-card-alt', thirt: false},


              {id: 'cardItems2', title: 'На все случаи жизни', li:[
                  {id:'1', title: 'Для жителей'},
                  {id:'2', title: 'Для туристов'},
                  {id:'3', title: 'Для школьников'},
                  {id:'4', title: 'Для студентов'},
              ], bottomtext:'Умная карта Новороссийка для всех', maincolor:'#7740A6', background:'#7740A62c', icon:'fa-random', thirt: false},

              {id: 'cardItems3', title: 'Для партнеров', li:[
                  {id:'1', title: 'Неограниченые услуги'},
                  {id:'2', title: 'Новостная лента'},
                  {id:'3', title: 'Обратная свзязь'},
                  {id:'4', title: 'Индивидуальная настройка'},
              ], bottomtext:'Будьте на связи с клиентами с умной карты Новороссийка', maincolor:'#A32541', background:'#A325412c', icon:'fa-cart-plus', thirt: true}
          ]
      }
  },
  mounted() {
    document.getElementById('home').addEventListener('resize', this.updateHeight);
    this.updateHeight();
  },
  methods:{
     updateHeight() {
        if(window.innerWidth>992){
            document.getElementById('firstbanner').style.height=window.innerHeight+'px';
            document.getElementById('RightTopBackground').style.height=window.innerHeight+'px';
        }else{
            document.getElementById('firstbanner').style.height='auto';
        }
        
    }
  }
}
</script>
<style scoped>
#RightTopBackground{
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    z-index: -1;
    background: #7740A6;
    width: 56%;
    display: block;
}

@media (max-width:991px) {
    #RightTopBackground{
        display: none;
    }
    #thirdbanner{
        margin-bottom: 170px !important;
    }
}
@media (max-width:1199px) {
    #RightTopBackground{
        width: 50%;
    }
}
@media (max-width:500px) {
    .container-md{
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
}
@media (max-width:372px) {
    #thirdbanner{
        margin-bottom: 140px !important;
    }
}
.cardscontainer{
    padding-top: 50px;
}
#secondbanner{
    padding-top: 50px;
    position: relative;
    z-index: 5;
    overflow: hidden;
}
#secondbanner::before {
    position: absolute;
    content: '';
    background-color: #27a9e16e;
    width: 100%;
    height: 90%;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>
