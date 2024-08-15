<template>
  <aside>
    <div class="aside-wrapper">
      <div class="user-profile">
        <div
          class="user-profile-foto"
          id="photoCircle"
          @click="handleFileUpload"
        >
          <input
            type="file"
            id="fileInput"
            ref="fileInput"
            accept="image/*"
            style="display: none"
            @change="handleImageChange"
          />
          <span class="camera-icon" id="cameraIcon"
            ><img :src="imageUrl" alt="User icon" width="100" />
            <p style="color: #072c48; font-size: 10px; margin-top: -15px">
              + Add a photo
            </p>
          </span>
        </div>
        <div class="user-profile-title">
          <h1>My name</h1>
          <h2>Profession</h2>
          <p>Location</p>
        </div>
      </div>
      <div class="profile-functions">
        <a href class="profile-function-link">My creatives</a>
        <a href class="profile-function-link">Publications </a>
        <a href class="profile-function-link">Education and development</a>
        <a href class="profile-function-link">Editing profile</a>
      </div>
      <div class="profile-statistics">
        <div class="profile-view">
          <p>View projects</p>
          <p>0</p>
        </div>
        <div class="profile-subscribers">
          <p>Subscribers</p>
          <p>0</p>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  name: "аuthor",
  data() {
    return {
      imageUrl: "/src/assets/icons/user-foto.svg", // Путь к изображению по умолчанию
    };
  },
  methods: {
    handleFileUpload() {
      this.$refs.fileInput.click();
    },
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
<style scoped>
.aside-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #072c48;
  height: 100%;
}

.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 22px 20px 47px;
}

.user-profile-foto {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.user-profile-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}
.user-profile-title p {
  color: #fff;
}
.profile-functions {
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 0 20px 24px;
}
.profile-function-link {
  border: 1px solid #fff;
  border-radius: 4px;
  text-align: center;
  padding: 10px 12px;
  color: #fff;
}
.profile-function-link:hover {
  background: rgba(255, 255, 255, 0.54);
}
.profile-statistics {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 20px 0;
  border-top: 1px solid rgb(255, 255, 255, 0.4);
  height: 100%;
}
.profile-statistics p {
  color: #fff;
}
.profile-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile-subscribers {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
