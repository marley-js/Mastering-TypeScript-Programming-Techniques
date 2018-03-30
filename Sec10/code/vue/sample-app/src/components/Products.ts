import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  template: `
  <div>
    <p>Products: </p>
    <ul v-if="data.products && data.products.length">
      <li v-for="product of data.products"><b>{{ product.name }}</b> costs £{{ product.price }}</li>
    </ul>
  </div>
  `,
  data() {
    return {
      data: {
        products: []
      }
    }
  },
  created() {
    axios.get('http://localhost:3000/api/products').then(products => this.data.products = products.data);
  }
})