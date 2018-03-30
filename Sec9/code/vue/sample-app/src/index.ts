import Vue from 'vue';
import ProductComponent from './components/Products';

let v = new Vue({
  el: "#app",
  template: `
  <div>
    <h1>{{ message }}</h1>
    <product-component />
  </div>
  `,
  data: {
    message: 'Hello from Vue!'
  },
  components: {
    ProductComponent
  }
});