<template>
  <div class="social-media">
    <div class="social-media__item">
      <a href="https://twitter.com/hulmed" title="Twitter">
        <img src="/social-images/twitter.svg" alt="Twitter" />
        <p>@hulmed</p>
      </a>
    </div>
    <div class="social-media__item">
      <a href="https://github.com/dhulme" title="Github">
        <img src="/social-images/github-circle.svg" alt="Github" />
        <p>dhulme</p>
      </a>
    </div>
    <div class="social-media__item">
      <a href="https://www.linkedin.com/in/dhulme/" title="LinkedIn">
        <img src="/social-images/linkedin-box.svg" alt="LinkedIn" />
        <p>dhulme</p>
      </a>
    </div>
    <div class="social-media__item">
      <a href="https://youtube.com/user/dhulme2" title="YouTube">
        <img src="/social-images/youtube.svg" alt="YouTube" />
        <p>dhulme2</p>
      </a>
    </div>
    <div class="social-media__item">
      <a href="https://instagram.com/davhulme">
        <img src="/social-images/instagram.svg" alt="Instagram" />
        <p>davhulme</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .social-media {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    text-align: center;

    .social-media__item {
      flex-grow: 1;
      flex-basis: 20%;
      max-width: 20%;

      h2 {
        font-size: 1.4rem;
        font-weight: 500;
        border-bottom: none;
        padding-bottom: 0;
        color: lighten($textColor, 10%);
      }

      a p {
        color: #3eaf7c;
      }

      img {
        height: 50px;
        width: 50px;
      }
    }
  }
</style>