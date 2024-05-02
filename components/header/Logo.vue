<template>
    <div class="logo">
        <div class="logo__img">
            <icons-logo />
        </div>
        <div class="logo__text">vue weather</div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/css/mixins.scss";
.logo {
    @include flex(flex, center, center);
    gap: 20px;
    cursor: pointer;
    &__text {
        color: var(--main);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }
}
</style>
