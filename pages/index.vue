<template>
    <main>
        <section class="default currentDay" v-if="this.$store.state.isFounded">
            <div class="container">
                <div class="currentDay__wrapper">
                    <div
                        class="currentDay__wrapper_item currentDay__wrapper_item-info"
                    >
                        <current-day-info />
                    </div>
                    <div
                        class="currentDay__wrapper_item currentDay__wrapper_item-moreInfo"
                    >
                        <current-day-more-info />
                    </div>
                </div>
            </div>
        </section>
        <section class="default dayList" v-if="this.$store.state.isFounded">
            <div class="container">
                <ul class="dayList__wrapper">
                    <li class="dayList__item" v-for="day in days" :key="day.id">
                        <day-list-card :data="day" />
                    </li>
                </ul>
            </div>
        </section>
        <div class="notFound" v-if="!this.$store.state.isFounded">
            <h1>Ничего не найдено</h1>
        </div>
        <div class="loader" v-if="this.$store.state.isLoaded">
            <div class="spinner"></div>
        </div>
    </main>
</template>

<script>
export default {
    name: "IndexPage",
    computed: {
        days() {
            return this.$store.state.days;
        },
    },
    watch: {
        days() {
            const currentDay = this.days[0].datetime;
            this.$store.commit("setCurrentDayInfo", currentDay);
        },
        deep: true,
    },
    methods: {
        async getDays() {
            this.$store.dispatch("fetchDays", this.$store.state.city);
        },
    },
    mounted() {
        this.getDays();
    },
};
</script>

<style lang="scss" scoped>
@import "assets/css/mixins.scss";
.loader {
    @include size(100%);
    position: fixed;
    inset: 0;
    background: var(--bg);
    @include flex(flex, center, center);
    .spinner {
        @include size(50px);
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: var(--main);
        animation: rotate 1s linear infinite;
    }
    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
}
.notFound {
    @include flex(flex, center, center);
    @include size(100%);
    h1 {
        color: var(--text-grey);
    }
}
.currentDay {
    &__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        &_item {
            flex: 1;
            &-info {
                max-width: 400px;
            }
        }
    }
}

.dayList {
    --items: 7;
    &__wrapper {
        @include defaultBlock(20px);
        display: grid;
        grid-template-columns: repeat(var(--items), 1fr);
        gap: 20px;
        padding: 20px;
    }
}

@media (max-width: 1024px) {
    .currentDay {
        &__wrapper {
            flex-direction: column;
            gap: 30px;
            &_item {
                &-info {
                    max-width: 100%;
                }
            }
        }
    }
    .dayList {
        --items: 4;
    }
}

@media (max-width: 767.98px) {
    .dayList {
        --items: 3;
    }
}
@media (max-width: 575.98px) {
    .dayList {
        --items: 2;
    }
}
</style>
