<script setup>
import Social from '@/shared/ui/social/Social.vue';
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer__container">
      <div class="footer__header">
        <h2 class="footer__title">Будемо раді вашому зверненню</h2>
        <div class="footer__text">Звʼяжіться з нами будь-яким зручним для вас способом:</div>
      </div>
      <div class="footer__wrapper">
        <Social base-class="footer__soc1al" />

        <ul class="footer__contacts contacts">
          <li class="footer__item">
            <div class="footer__link-icon">
              <svg
                class="svg svg--20 footer__link-img"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.43 11.067l-.515.773c-.103.154-.239.286-.418.334-.588.155-2.147.225-4.521-2.15C3.6 7.65 3.67 6.09 3.826 5.503c.048-.18.18-.315.334-.418l.773-.516a1.253 1.253 0 00.348-1.737L3.82.642A1.253 1.253 0 002.283.184l-.659.282c-.5.215-.908.6-1.152 1.086-.203.407-.36.836-.382 1.29-.068 1.432.246 4.96 4.176 8.89 3.93 3.93 7.458 4.243 8.89 4.176.454-.021.883-.179 1.29-.382a2.302 2.302 0 001.086-1.152l.282-.66c.238-.554.046-1.2-.456-1.535l-2.191-1.46a1.253 1.253 0 00-1.737.347z"
                  fill="#898989"
                ></path>
              </svg>
            </div>
            <a href="tel:+380974501872" class="footer__link"
              ><span class="hover-link">+38(097) 450 18 72</span></a
            >
          </li>
          <li class="footer__item">
            <div class="footer__link-icon">
              <svg
                class="svg svg--20 footer__link-img"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.43 11.067l-.515.773c-.103.154-.239.286-.418.334-.588.155-2.147.225-4.521-2.15C3.6 7.65 3.67 6.09 3.826 5.503c.048-.18.18-.315.334-.418l.773-.516a1.253 1.253 0 00.348-1.737L3.82.642A1.253 1.253 0 002.283.184l-.659.282c-.5.215-.908.6-1.152 1.086-.203.407-.36.836-.382 1.29-.068 1.432.246 4.96 4.176 8.89 3.93 3.93 7.458 4.243 8.89 4.176.454-.021.883-.179 1.29-.382a2.302 2.302 0 001.086-1.152l.282-.66c.238-.554.046-1.2-.456-1.535l-2.191-1.46a1.253 1.253 0 00-1.737.347z"
                  fill="#898989"
                ></path>
              </svg>
            </div>
            <a href="tel:+380662303368" class="footer__link"
              ><span class="hover-link">+38(066) 230 33 68</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.footer {
  @include adaptive-clamp('padding-top', 70, 25);
  @include adaptive-clamp('padding-bottom', 70, 25);

  &__header {
    text-align: center;

    &:not(:last-child) {
      margin-bottom: rem(25);
    }
  }

  &__title {
    font-size: rem(24);
    font-weight: 600;

    &:not(:last-child) {
      margin-bottom: rem(10);
    }
  }

  &__text {
    font-size: rem(18);
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: rem(25);

    @media (max-width: em(479)) {
      flex-direction: column;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: rem(13);

    &:not(:last-child) {
      margin-bottom: rem(20);
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    height: 30px;
  }
}
</style>
