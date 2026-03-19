<script setup></script>
<template>
  <section class="parent-video-fon page__hero hero" aria-labelledby="hero-title">
    <div class="hero__container">
      <div class="hero__body">
        <div class="hero__subtitle">
          <p>
            Завітайте до нашого магазину — ми допоможемо підібрати ідеальні окуляри та надамо
            безкоштовну консультацію
          </p>
        </div>
        <h1 class="hero__title" id="hero-title">Ми допоможемо вам побачити світ по-новому.</h1>
        <div class="hero__buttons">
          <a href="#about" class="hero__button button">ПРО НАС</a>
          <a href="#products" class="hero__button button">ПРОДУКТИ</a>
        </div>
      </div>
    </div>
    <video class="video-fon" autoplay muted loop>
      <source type="video/mp4" src="@/shared/assets/video/10.mp4" />
    </video>
    <button
      type="button"
      class="scroll-down-btn"
      data-goto=".about"
      title="scroll down"
      aria-label="scroll-down"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" viewBox="0 0 50 80">
        <path
          class="first-path"
          fill="#FFFFFF"
          d="M24.752,79.182c-0.397,0-0.752-0.154-1.06-0.463L2.207,57.234c-0.306-0.305-0.458-0.656-0.458-1.057
        s0.152-0.752,0.458-1.059l2.305-2.305c0.309-0.309,0.663-0.461,1.06-0.461c0.398,0,0.752,0.152,1.061,0.461l18.119,18.119
        l18.122-18.119c0.306-0.309,0.657-0.461,1.057-0.461c0.402,0,0.753,0.152,1.059,0.461l2.306,2.305
        c0.308,0.307,0.461,0.658,0.461,1.059s-0.153,0.752-0.461,1.057L25.813,78.719C25.504,79.027,25.15,79.182,24.752,79.182z"
        ></path>
        <path
          class="second-path"
          fill="#FFFFFF"
          d="M24.752,58.25c-0.397,0-0.752-0.154-1.06-0.463L2.207,36.303c-0.306-0.304-0.458-0.655-0.458-1.057
        c0-0.4,0.152-0.752,0.458-1.058l2.305-2.305c0.309-0.308,0.663-0.461,1.06-0.461c0.398,0,0.752,0.153,1.061,0.461l18.119,18.12
        l18.122-18.12c0.306-0.308,0.657-0.461,1.057-0.461c0.402,0,0.753,0.153,1.059,0.461l2.306,2.305
        c0.308,0.306,0.461,0.657,0.461,1.058c0,0.401-0.153,0.753-0.461,1.057L25.813,57.787C25.504,58.096,25.15,58.25,24.752,58.25z"
        ></path>
      </svg>
    </button>
  </section>
</template>
<style scoped lang="scss">
@use '@helpers' as *;

.parent-video-fon {
  position: relative;
  overflow: hidden;
  background-color: #000000;
}

.video-fon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
}

.hero {
  position: relative;
  display: flex;
  min-height: 100vh;
  padding-top: 0;

  &__container {
    flex: 1 1 auto;
    position: relative;
    z-index: 2;
    padding-top: fluid(200, 90);
    padding-bottom: fluid(200, 40);
  }

  &__body {
    max-width: rem(550);
    color: var(--color-light);

    @media (max-width: em(500)) {
      max-width: 100%;
    }
  }

  &__subtitle {
    font-size: rem(18);
    font-weight: 600;
    line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: rem(10);
    }
  }

  &__title {
    font-weight: 600;
    line-height: 1.2;

    @include adaptive-clamp('font-size', 48, 25);

    &:not(:last-child) {
      margin-bottom: rem(25);
    }
  }

  &__buttons {
    display: flex;
    row-gap: rem(20);

    @include adaptive-clamp('column-gap', 45, 20);

    @media (max-width: em(500)) {
      flex-direction: column;
    }
  }

  &__button {
    @media (max-width: em(500)) {
      width: 100%;
    }
  }
}
</style>
