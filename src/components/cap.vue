<template>
  <header>
    <div class="header-wrapper">
      <div class="header-left">
        <div class="header-logo">
          <a href="#">LOGO</a>
        </div>
        <nav class="header-nav">
          <ul class="header-list">
            <li
              class="header-item"
              @mouseover="showDropdown"
              @mouseleave="hideDropdown"
            >
              Projects
              <img
                src="/src/assets/icons/header-down.svg"
                alt="Down"
                width="16"
              />
              <div
                class="dropdown-content"
                :class="{ show: isDropdownVisible }"
                @mouseover="showDropdown"
                @mouseleave="hideDropdown"
              >
                <a href="#" class="dropdown-content-link">The best</a>
                <a href="#" class="dropdown-content-link">Graphic design</a>
                <a href="#" class="dropdown-content-link">Photo</a>
                <a href="#" class="dropdown-content-link">Illustration</a>
              </div>
            </li>
            <li class="header-item">
              <a href="#" class="header-link">Vacancies</a>
            </li>
            <li class="header-item">
              <a href="#" class="header-link">Specialists</a>
            </li>
            <li class="header-item">
              <a href="#" class="header-link">Education</a>
            </li>
            <li class="header-item">
              <a href="#" class="header-link">Support</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <div class="header-form">
          <button id="share-button" @click="toggleForm">
            Share the project
          </button>
          <div id="upload-form" v-if="showForm">
            <h3>Upload a photo</h3>
            <form action="/upload" method="post" enctype="multipart/form-data">
              <label for="file-upload">Select a file:</label>
              <input
                type="file"
                id="file-upload"
                name="photo"
                accept="image/*"
                required
              />
              <button type="submit">Share</button>
            </form>
          </div>
        </div>
        <div class="header-bell">
          <a href="#"
            ><img src="/src/assets/icons/bell.svg" alt="Bell" width="28"
          /></a>
        </div>
        <div class="header-profile">
          <img src="/src/assets/img/Profile.png" alt="Profile" width="43" />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "cap",
  data() {
    return {
      isDropdownVisible: false,
      showForm: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>
<style scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 34px;
  background: #f8f8f8;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 24px;
}
.header-logo {
}
.header-logo a {
  font-weight: 400;
  font-size: 20px;
  color: #000;
}
.header-list {
  display: flex;
  gap: 16px;
}
.header-link {
  color: #000;
  font-size: 16px;
  line-height: 110%;
  font-weight: 400;
  letter-spacing: 0em;
}
.header-item:first-child {
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  cursor: pointer;
}
.dropdown-content {
  display: none;
  background: #efefef;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 16px 150px 16px 16px;
  min-width: 300px;
  position: absolute;
  top: 120%;
  left: -30%;
  z-index: 100;
  opacity: 0;
  transition: opacity 5s ease;
}
.dropdown-content.show {
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 1;
}
.dropdown-content-link {
  color: #000;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header-form {
  display: flex;
  position: relative;
}
#share-button {
  background: #efefef;
  border: 1px solid #ddd;
  border-radius: 51px;
  padding: 16px 28px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  font-family: "Space Grotesk", sans-serif;
  cursor: pointer;
}
#upload-form {
  background: #efefef;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 16px;
  position: absolute;
  top: 120%;
  left: 0;
}
#upload-form form {
  margin-top: 30px;
}

.header-bell {
}
.header-profile {
}
.header-profile img {
  width: 100%;
}
</style>
