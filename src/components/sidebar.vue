<template>
  <div id="sidebar-area" >
    <Sider breakpoint="md" :collapsed-width="78">
      <div class="profile" >
        <Avatar class="avatar" icon="person" />
        <h3 class="title">Fayez Jawad Bdair</h3>
        <h4 class="job-description">Full Stack web Developer</h4>
        <a href="mailto:fayezbdair@gmail.com" class="hire-me ivu-btn ivu-btn-error" type="error">Hire me</a>
      </div>
      <Menu active-name="app-about" theme="dark" width="auto" @on-select="handleChangeMenu" class="menu-item">
        <MenuItem name="app-about">
          <span>About</span>
        </MenuItem>
        <MenuItem name="app-skills">
          <span>Skills</span>
        </MenuItem>
        <MenuItem name="app-lets-talk">
          <span>let's talk</span>
        </MenuItem>
      </Menu>
      <div slot="trigger"></div>
    </Sider>
  </div>
</template>

<script>
export default {
  props: {
    active_menu: {
      type: String,
    }
  },
  methods: {
    handleChangeMenu: function(menu){
      this.$emit('activeMenu', menu);
    },
  },
}
</script>
