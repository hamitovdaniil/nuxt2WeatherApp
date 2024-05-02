<template>
    <div class="moreInfoItem">
        <div class="moreInfoItem__item">
            <div class="moreInfoItem__item_icon">
                <component :is="icon" />
            </div>
            <p class="moreInfoItem__item_text">{{ text }}</p>
        </div>
        <div class="moreInfoItem__content">
            <p>{{ info }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoreInfoItem",
    props: {
        icon: {
            type: String,
            default: "icons-sun",
        },
        text: {
            type: String,
        },
        info: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
@import "assets/css/mixins.scss";
.moreInfoItem {
    @include flex(flex, flex-start, center);
    gap: 20px;
    &__item {
        @include flex(flex, flex-start, center);
        gap: 20px;
        min-width: 150px;
        &_icon {
            @include size(38px);
            background: var(--bg);
            filter: drop-shadow(1px 4px 10px rgba(71, 147, 255, 0.2));
            @include flex(flex, center, center);
            border-radius: 50%;
            min-width: 38px;
            svg {
                @include size(25px);
            }
        }
        &_text {
            color: var(--text-grey);
            font-size: 0.7rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
    &__content {
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}

@media (max-width: 575.98px) {
    .moreInfoItem {
        &__item {
            min-width: 100px;
            &_icon {
                display: none;
            }
        }
    }
}
</style>
