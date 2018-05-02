<template lang="html">
  <div class="skills-area">
    <h1 class="big-title">My Skills</h1>
    <Row type="flex" justify="center">
      <Col class='card-col' :xs="24" :sm="24" :md="8" :lg="5" v-for="skill in skills">
        <Card class='card-item'>
          <div class='card-body'>
            <i :class="skill.icon"></i>
            <h3>{{ skill.name }}</h3>
          </div>
        </Card>
      </Col>
    </Row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'MySql', icon: 'devicon-mysql-plain colored' },
        { name: 'Nodejs', icon: 'devicon-nodejs-plain colored' },
        { name: 'larave', icon: 'devicon-laravel-plain colored' },
        { name: 'CodeIgniter', icon: 'devicon-codeigniter-plain colored' },
        { name: 'Django', icon: 'devicon-django-plain colored' },
        { name: 'vue.js', icon: 'devicon-vuejs-plain colored' },
        { name: 'ReactJS', icon: 'devicon-react-original' },
        { name: 'git', icon: 'devicon-git-plain' },
        { name: 'wordpress', icon: 'devicon-wordpress-plain' },
      ],
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
