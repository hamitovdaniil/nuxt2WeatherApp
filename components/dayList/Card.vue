<template>
    <div class="card" @click="selectDay(data.datetime)">
        <div class="card__day">{{ checkDay(data.datetime) }}</div>
        <div class="card__date">{{ formatDate(data.datetime) }}</div>
        <div class="card__icon">
            <component :is="getWeatherIcon(data.weather.code)"></component>
        </div>
        <div class="card__atDay">{{ mathFloor(data.max_temp) }}°</div>
        <div class="card__atNight">{{ mathFloor(data.min_temp) }}°</div>
        <div class="card__description">
            {{ data.weather.description }}
        </div>
    </div>
</template>

<script>
import { mixins } from "@/mixins/index.js";
export default {
    name: "Card",
    mixins: [mixins],
    props: {
        data: {
            type: Object,
        },
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleString("ru", {
                day: "numeric",
                month: "short",
            });
        },
        mathFloor(value) {
            return Math.floor(value);
        },
        selectDay(date) {
            this.$store.commit("setCurrentDayInfo", date);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "assets/css/mixins.scss";
.card {
    border-radius: 10px;
    background: var(--blue);
    padding: 11px;
    color: var(--text-grey);
    cursor: pointer;
    height: 100%;
    &__day {
        color: var(--text-black);
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 7px;
    }
    &__date {
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 12px;
    }
    &__icon {
        margin-bottom: 13px;
        svg {
            @include size(48px);
        }
    }
    &__atDay {
        color: var(--text-black);
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    &__atNight {
        font-size: 0.65rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    &__description {
        font-size: 0.65rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 6px;
    }
    transition: 0.3s ease;
    &:hover {
        box-shadow: 0px 3px 20px rgba(147, 144, 144, 0.28);
    }
}

@media (max-width: 575.98px) {
    .card {
        padding: 8px;
        &__day {
            font-size: 0.7rem;
        }
        &__date {
            font-size: 0.65rem;
        }
        &__icon {
            svg {
                @include size(38px);
            }
        }
        &__atDay {
            font-size: 0.7rem;
        }
        &__atNight {
            font-size: 0.65rem;
        }
        &__description {
            font-size: 0.6rem;
        }
    }
}
</style>
