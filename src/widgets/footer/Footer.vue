<script setup>
import Contacts from '@/shared/ui/contacts/Contacts.vue';
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
        <Contacts base-class="footer__contacts" />
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
}
</style>
