<template>
  <main>
    <div class="main-wrapper">
      <div class="publication-title">
        <div class="my-publication-title">
          <h3>My publication</h3>
        </div>
        <div class="add-publication-title">
          <h3>Add publication</h3>
          <a href="#">
            <img src="/src/assets/icons/cross.svg" alt="Cross" width="34.5" />
          </a>
        </div>
      </div>
      <div class="publication-img">
        <div class="block-publication-img">
          <a href="#">
            <img src="/src/assets/img/Rectangle 7.jpg" alt="Foto" width="280" />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
        <div class="block-publication-img">
          <a href="#">
            <img src="/src/assets/img/Rectangle 8.jpg" alt="Foto" width="280" />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
        <div class="block-publication-img">
          <a href="#">
            <img src="/src/assets/img/Rectangle 9.jpg" alt="Foto" width="280" />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
        <div class="block-publication-img">
          <a href="#">
            <img
              src="/src/assets/img/Rectangle 12.jpg"
              alt="Foto"
              width="280"
            />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
        <div class="block-publication-img">
          <a href="#">
            <img
              src="/src/assets/img/Rectangle 13.jpg"
              alt="Foto"
              width="280"
            />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
        <div class="block-publication-img">
          <a href="#">
            <img
              src="/src/assets/img/Rectangle 14.jpg"
              alt="Foto"
              width="280"
            />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
        <div class="block-publication-img">
          <a href="#">
            <img
              src="/src/assets/img/Rectangle 13.jpg"
              alt="Foto"
              width="280"
            />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
        <div class="block-publication-img">
          <a href="#">
            <img
              src="/src/assets/img/Rectangle 14.jpg"
              alt="Foto"
              width="280"
            />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
        <div class="block-publication-img">
          <a href="#">
            <img
              src="/src/assets/img/Rectangle 15.jpg"
              alt="Foto"
              width="280"
            />
          </a>
          <div class="published">
            <h4>Cat Doctor On line clinik</h4>
            <div class="published-date">
              <p>published</p>
              <p>18.01.20022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "gallery",
};
</script>
<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.publication-title {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: auto auto;
}
.add-publication-title {
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-column-gap: 73px;
}
.publication-img {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 72px;
  grid-row-gap: 46px;
}
.publication-img img {
  width: 100%;
}
.block-publication-img {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.published {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.published-date {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
