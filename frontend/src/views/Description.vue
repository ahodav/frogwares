<template>
  <div>
    <table>
      <tr>
        <th>
          Build Id
        </th>
        <th>
          Platform  
        </th> 
        <th>
          Quest name
        </th>
      </tr>
      <tr v-if = "inform">
        <td>
          {{ info.globalId }}
        </td>
        <td>
          {{ info.platform }}
        </td>
        <td>
          {{ info.name }}
        </td>
      </tr>
    </table>
    <h1>Pathways</h1>
    <table style="width:100%">
      <tr>
        <th class="coln">
          Status
        </th>
        <th class="col1">
          Path name  
        </th> 
        <th>
          Leaf's Info
        </th>
      </tr>
      <tr v-if = "info">
        <td>
          {{ info.pathway.status }}
        </td>
        <td>
          {{ info.pathway.name }}
        </td>
        <td>
          <span v-for='path in info.finishedleafs' :key="index(path)"> 
            <img v-if="path  == true" src='../assets/checked.png' height="20px" width="20px">
            <img v-else src='../assets/clear.png' height="20px" width="20px">
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'description',
  data() {
    return {
      info: null,
    }
  },
  created: function(){
    axios
      .get(`http://localhost:3000/quest/${this.$route.params.id}/${this.$route.params.alias}/${this.$route.params.status}`)
      .then((response) => {
        this.info = response.data
        }
      );
  },
  methods: {
    index: function(path){
      setTimeout(function(){
        return new Date().getMilliseconds() 
      },10)
    }
  }

}
</script>

<style scoped>
table, th, td {
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-collapse: collapse;
}
.col1 { width: 240px; }
.coln { width: 160px; }
</style>
