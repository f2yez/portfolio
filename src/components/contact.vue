<template>
  <div class="contact-area">
    <h1 class="big-title">Let's Talk</h1>
    <Row type="flex" justify="center">
      <Col class='card-col' :xs="24" :sm="24" :md="8" :lg="5" v-for="item in contacts">
        <Card class='card-item'>
          <div class='card-body'>
            <i :class="item.icon"></i>
            <a target="_blank" :href="item.url">
              <h3>{{ item.name }}</h3>
            </a>
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
      contacts: [
        { name: 'Facebook', url: 'https://www.facebook.com/f2yez', icon: 'devicon-facebook-plain colored' },
        { name: 'twitter', url: 'https://twitter.com/fayezbdair', icon: 'devicon-twitter-plain colored' },
        { name: 'linkedin', url: 'https://linkedin.com/in/f2yez', icon: 'devicon-linkedin-plain colored' },
        { name: 'github', url: 'https://github.com/f2yez', icon: 'devicon-github-plain colored' },
        { name: 'gmail', url: 'mailto:fayezbdair@gmail.com', icon: 'devicon-google-plain' },
      ],
    };
  }
}
</script>
