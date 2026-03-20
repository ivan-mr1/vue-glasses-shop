<template>
  <div data-favorite class="header__action header__favorite favorite">
    <button
      data-favorite-btn
      type="button"
      class="favorite-btn counter-icon"
      aria-label="Open favorite"
      title="Open favorite"
    >
      <span class="counter-icon__inner">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 29">
          <path
            fill="#ffa501"
            d="M16 29c-.5 0-1-.2-1.4-.5C11.2 25.5 0 15.2 0 8.9 0 4 3.9 0 8.6 0c3.1 0 5.9 1.7 7.4 4.3C17.5 1.7 20.3 0 23.4 0 28.1 0 32 4 32 8.9c0 6.3-11.2 16.6-14.6 19.6-.4.3-.9.5-1.4.5M8.6 2C5 2 2 5.1 2 8.9 2 13.3 9.5 21.4 15.9 27h.1c6.5-5.6 14-13.7 14-18.1C30 5.1 27 2 23.4 2c-2.7 0-5.1 1.7-6.1 4.3-.2.3-.5.7-1.3.7-.7 0-1.1-.2-1.3-.7-1-2.6-3.4-4.3-6.1-4.3"
          ></path>
        </svg>
        <span data-favorite-counter class="counter-icon__count">0</span>
      </span>
    </button>
    <div class="favorite__content">
      <ul data-favorite-list class="favorite__list"></ul>
      <div class="favorite__bottom">
        <div class="favorite__fullprice-inner">
          <span>Разом:</span>
          <span class="favorite__fullprice">0 грн</span>
        </div>
        <a href="cart.html" target="_blank" rel="noopener" class="favorite__btn button button--min">
          Кошик
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.favorite {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &__content {
    position: absolute;
    z-index: var(--z-index-dropdown);
    top: 100%;
    right: 0;
    width: fluid(450, 300);
    margin-top: 15px;
    background-color: var(--color-white);
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    visibility: hidden;
    opacity: 0;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease,
      visibility 0.3s;
    transform: translateY(10px);
    pointer-events: none;
    will-change: opacity, transform;

    @media (max-width: em(767.98)) {
      position: fixed;
      top: var(--header-height);
      right: 10px;
      left: 10px;
      width: auto;
      transform: translateY(10px);
    }

    .favorite.is-active & {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }

  &__empty {
    text-align: center;
  }

  &__list {
    overflow-y: auto;
    max-height: 400px;
    padding: 10px 0;

    // Стилизация скроллбара
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-orange);
      border-radius: 10px;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #f9f9f9;
    border-top: 1px solid #eaeaea;
    border-radius: 0 0 8px 8px;
  }

  &__fullprice-inner {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    color: #888888;
  }

  &__fullprice {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-dark);
  }
}
</style>
