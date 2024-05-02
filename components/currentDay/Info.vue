<template>
    <div class="info">
        <div class="temperature">
            <div class="temperature__info">
                <p class="temperature__info_degree">{{ currentDay.temp }}°</p>
                <div class="temperature__icon">
                    <component :is="getWeatherIcon(currentDay.icon)" />
                </div>
            </div>
            <p class="temperature__info_text">
                {{ checkDay(currentDay.datetime) }}
            </p>
        </div>
        <div class="info__content">
            <p class="info__content_item info__content_item-time">
                Время: {{ getTime() }}
            </p>
            <p class="info__content_item info__content_item-city">
                Город: {{ currentDay.city }}
            </p>
        </div>
    </div>
</template>

<script>
import { mixins } from "@/mixins/index.js";
export default {
    name: "Info",
    mixins: [mixins],
    computed: {
        currentDay() {
            return this.$store.state.currentDayInfo;
        },
    },
    methods: {
        getTime() {
            const currentDate = new Date();
            const currentHours = currentDate.getHours();
            const currentMinutes = currentDate.getMinutes();
            return `${currentHours}:${currentMinutes}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "assets/css/mixins.scss";
.info {
    width: 100%;
    @include defaultBlock(20px);
    @include flex(flex, center, flex-start);
    flex-direction: column;
    padding: 20px;
    height: 100%;
    .temperature {
        @include flex(flex, flex-start, flex-start);
        flex-direction: column;
        width: 100%;
        margin-bottom: 30px;
        &__info {
            @include flex(flex, space-between, flex-start);
            width: 100%;
            &_degree {
                color: var(--main);
                font-size: 4.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            &_text {
                font-size: 2rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
        &__icon {
            svg {
                @include size(119px);
            }
        }
    }
    &__content {
        @include flex(flex, flex-start, flex-start);
        flex-direction: column;
        gap: 14px;
        &_item {
            color: var(--text-grey);
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
}

@media (max-width: 575.98px) {
    .info {
        .temperature {
            margin-bottom: 25px;
            &__info {
                &_degree {
                    font-size: 4rem;
                }
                &_text {
                    font-size: 1.8rem;
                }
            }
            &__icon {
                svg {
                    @include size(100px);
                }
            }
        }
        &__content {
            &_item {
                font-size: 1rem;
            }
        }
    }
}
</style>
