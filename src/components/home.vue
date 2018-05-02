<template lang="html">
  <Layout class="layout">
    <app-sidebar v-on:activeMenu='changeActiveMenu($event)'></app-sidebar>
    <Layout calss="content-layout">
      <Content class="content-area">
        <component v-bind:is='active_menu'></component>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import Sidebar from './sidebar.vue';
import About from './about.vue';
import Contact from './contact.vue';
import Skills from './skills.vue';

export default {
  data() {
    return {
      active_menu: 'app-about',
    };
  },

  components: {
    'app-sidebar': Sidebar,
    'app-about': About,
    'app-lets-talk': Contact,
    'app-skills': Skills,
  },

  methods: {
    changeActiveMenu: function(menu) {
      this.active_menu = menu;
    }
  }
}
</script>
