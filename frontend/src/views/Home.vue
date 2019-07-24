<template>
  <div class="home">
    <div>
      <label>File
        <input name='file' type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
    <table style="width:100%">
      <tr>
        <th v-for="obj in info" :key="obj.alias + '-' + obj.globalId"> {{obj.alias}}</th>
      </tr>
      <tr>
        <td v-for="obj in info" :key="obj.alias + '-' + obj.globalId">
          <img @click='setRout(obj)' v-if="obj.status  == 'SUCCESS'" src='../assets/checked.png' height="50px" width="50px">
          <img @click='setRout(obj)' v-else-if="obj.status  == 'CRASH'" src='../assets/clear.png' height="50px" width="50px">
          <img @click='setRout(obj)' v-else src='../assets/minus.png' height="50px" width="50px">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'home',
  data(){
    return {
      info:null,
      file:''
    }
  },
  methods: {
    setRout(param) {
      if (param.status == 'NO_DATA'){
        this.$router.push('nodata')
      }else{
        return this.$router.push({ name: 'description', params: { alias: param.alias, id : param.globalId, status: param.status } });
      }
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post( 'http://localhost:3000/send-file', formData,{
                  headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                  }
                ).then(function(){
                  console.log('SUCCESS!!');
                })
                .catch(function(){
                  console.log('FAILURE!!');
                });
    }
  },
  created: function() {
    axios
      .get('http://localhost:3000/')
      .then(response => (this.info = response.data));
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
</style>
