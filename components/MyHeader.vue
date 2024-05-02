<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__wrapper_item header__wrapper_item-logo">
                    <nuxt-link to="/" class="header__logo">
                        <header-logo />
                    </nuxt-link>
                </div>
                <div class="header__wrapper_item header__wrapper_item-content">
                    <div class="header__content">
                        <header-toggle-theme />
                        <form @submit.prevent="searchCity" class="inputSearch">
                            <form-inputs-my-input
                                placeholder="Поиск..."
                                width="194px"
                                v-model.trim="search"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            search: "",
        };
    },
    methods: {
        searchCity() {
            if (!this.search) return;
            this.$store.dispatch("fetchDays", this.search);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "assets/css/mixins.scss";
.header {
    width: 100%;
    padding: 20px 0 30px;
    &__wrapper {
        @include flex(flex, space-between, center);
        width: 100%;
        gap: 20px;
        flex-wrap: wrap;
        &_item {
            flex: 1;
            @include flex(flex, center, center);
            &-logo {
                justify-content: flex-start;
            }
            &-content {
                justify-content: flex-end;
            }
        }
    }
    &__content {
        @include flex(flex, center, center);
        gap: 20px;
    }
}

@media (max-width: 575.98px) {
    .header {
        &__wrapper {
            &_item {
                &-logo {
                    justify-content: center;
                }
                &-content {
                    justify-content: center;
                }
            }
        }
    }
}
</style>
