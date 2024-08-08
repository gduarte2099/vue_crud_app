import { ref } from 'vue'
import infoJson from './employees.json'

class InfoService {
  arrayInfo
  info


  constructor() {
    this.arrayInfo = ref([])
  }

  getArrayInfo() {
    return this.arrayInfo
  }

  getInfo() {
    return this.info
  }


  async fetchAll() {
    this.arrayInfo = infoJson
    //console.log(this.arrayInfo);
    return this.arrayInfo
    
  }


}



export default InfoService