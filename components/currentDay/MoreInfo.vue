<template>
    <div class="moreInfo">
        <ul class="moreInfo__list">
            <li class="moreInfo__item" v-for="item in items" :key="item.text">
                <current-day-more-info-item
                    :icon="item.icon"
                    :text="item.text"
                    :info="item.info"
                />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MoreInfo",
    data() {
        return {
            items: [],
            pop: 0,
        };
    },
    computed: {
        currentDayMoreInfo() {
            return this.$store.state.currentDayMoreInfo;
        },
    },
    watch: {
        currentDayMoreInfo: {
            handler(newVal, oldVal) {
                this.updateItems(newVal);
            },
            deep: true,
        },
    },
    methods: {
        updateItems(newVal) {
            const windDescriptions = {
                0: "штиль",
                1: "легкий ветер",
                5: "легкий ветер",
                11: "слабый ветер",
                19: "умеренный ветер",
                28: "свежий ветер",
                38: "сильный ветер",
                49: "очень сильный ветер",
                Infinity: "ураганный ветер",
            };

            const windSpeed = newVal.wideSpeed;
            let windDescription = "неизвестно";
            for (const speed in windDescriptions) {
                if (windSpeed <= speed) {
                    windDescription = windDescriptions[speed];
                    break;
                }
            }
            if (newVal.presep > 0) {
                this.pop = newVal.presep + "%";
            } else {
                this.pop = "Без осадков";
            }

            const pressureDescriptions = {
                0: "очень низкое",
                720: "низкое",
                751: "нормальное",
                771: "высокое",
                791: "очень высокое",
                Infinity: "экстремальное",
            };

            const pressure = newVal.pressure;
            let pressureDescription = "неизвестно";
            for (const p in pressureDescriptions) {
                if (pressure <= p) {
                    pressureDescription = pressureDescriptions[p];
                    break;
                }
            }

            this.items = [
                {
                    icon: "icons-temperature",
                    text: "Температура",
                    info: `${newVal.temp}° - ощущается как ${newVal.temp_like}°`,
                },
                {
                    icon: "icons-pressure",
                    text: "Давление",
                    info: `${newVal.pressure} мм ртутного столба - ${pressureDescription}`,
                },
                {
                    icon: "icons-precipitation",
                    text: "Осадки",
                    info: this.pop,
                },
                {
                    icon: "icons-wind",
                    text: "Ветер",
                    info: `${newVal.wideSpeed} м/с ${newVal.wideDir} - ${windDescription}`,
                },
            ];
        },
    },
};
</script>

<style lang="scss" scoped>
@import "assets/css/mixins.scss";
.moreInfo {
    @include defaultBlock(20px);
    padding: 42px 32px;
    height: 100%;
    background-image: url("assets/images/cloude.png");
    background-repeat: no-repeat;
    background-size: 660px;
    background-position: right top;
    &__list {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}
@media (max-width: 1024px) {
    .moreInfo {
        padding: 30px 20px;
        &__list {
            gap: 20px;
        }
    }
}

@media (max-width: 575.98px) {
    .moreInfo {
        background-size: 300px;
    }
}
</style>
