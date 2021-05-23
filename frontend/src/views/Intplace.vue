<template>
    <div id='intplace' class='paddingbottomm'>
        <Menu
        v-bind:Active="isActive"/>
        <div class='contariner mt-4'>
            <div class='row'>
                <div class='col-12 text-center'>
                    <p class='h4'>Интересные места</p>
                </div>
            </div>
        </div>
        <InterestingPlaces
        v-for="org of org" :key="org.id"
                v-bind:org="org"/>
        <div class='container text-center intplace'>
            <button class='btn_default mb-5'>добавить</button>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import InterestingPlaces from '@/components/InterestingPlaces.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Profile',
  components: {
    Menu,
    InterestingPlaces,
    Footer
  },
  data(){
      return{
          isActive:[
              {Home:false, Cataloge:true, Profile:false}
          ],
          org:[
              {
                  systname:'intplace', name:'Экотропа', img1:'https://www.kraskompas.ru/images/krasstolby_tri/x9.JPG', img2:'https://a.d-cd.net/21a8b2es-1920.jpg', adress:'Новороссийск', smallcontent:'Экотропа расположена неподалеку от.. и длится на протяжении 5км'
              }
            ]

      }
  }
}
</script>