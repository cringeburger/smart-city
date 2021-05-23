<template>
    <div id='Cafes' class='paddingbottomm'>
        <Menu
        v-bind:Active="isActive"/>
        <div class='contariner mt-4'>
            <div class='row'>
                <div class='col-12 text-center'>
                    <p class='h4'>Музеи</p>
                </div>
            </div>
        </div>
        <OrganizationList
        v-for="org of orga" :key="org.id"
                v-bind:org="org"/>
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios'
import Menu from '@/components/Menu.vue'
import OrganizationList from '@/components/OrganizationList.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Profile',
  components: {
    Menu,
    OrganizationList,
    Footer
  },
  data(){
      return{
          isActive:[
              {Home:false, Cataloge:true, Profile:false}
          ],
          serverData:{
          token:"museum"},
          orga:[
                
            ]
      }
  },
  mounted(){
    this.getOrganizations();
  },
  methods:{
      getOrganizations(){
            const path = 'http://26.173.145.160:5000/organizations';
            axios.post(path, this.serverData)
            .then((res) => {
                this.orga=res.data;
            })
      }
  }
}
</script>