<template>
  <footer>
    <div class="footer-wraper">
      <nav class="footer-nav">
        <ul class="footer-list">
          <li class="footer-item">
            <a href="#" class="footer-link">Vacancies</a>
          </li>
          <li class="footer-item">
            <a href="#" class="footer-link">Specialists</a>
          </li>
          <li class="footer-item">
            <a href="#" class="footer-link">Education</a>
          </li>
          <li class="footer-item">
            <a href="#" class="footer-link">Support</a>
          </li>
        </ul>
      </nav>
      <div class="footer-logo">
        <a href="#">LOGO</a>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
  name: 'yellow'
}
</script>
<style scoped>
.footer-wraper {
  background: #e5b300;
  display: flex;
  flex-direction: column;
  padding-top: 44px;
  padding-bottom: 211px;
  justify-content: center;
  align-items: center;
  gap: 61px;
}
.footer-list {
  display: flex;
  align-items: center;
  gap: 14px;
}
.footer-item {
}
.footer-link {
  font-weight: 400;
  font-size: 16px;
  color: #fff;
}
.footer-logo {
}
.footer-logo a {
  font-weight: 400;
  font-size: 20px;
  color: #fff;
}
</style>
