export const mixins = {
    methods: {
        getWeatherIcon(code) {
            if (code === "800") {
                return "icons-sun";
            } else if (code === "501") {
                return "icons-small-rain";
            } else if (code >= 501 && code <= 522) {
                return "icons-rain";
            } else {
                return "icons-cloudly";
            }
        },
        checkDay(dateString) {
            const date = new Date(dateString);
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            if (date.toDateString() === today.toDateString()) {
                return "Сегодня";
            } else if (date.toDateString() === tomorrow.toDateString()) {
                return "Завтра";
            } else {
                const daysOfWeek = [
                    "Воскресенье",
                    "Понедельник",
                    "Вторник",
                    "Среда",
                    "Четверг",
                    "Пятница",
                    "Суббота",
                ];
                return daysOfWeek[date.getDay()];
            }
        },
    },
};
