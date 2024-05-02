export const state = () => ({
    days: [],
    city: "Ташкент",
    daysCount: 7,
    oneMm: 1.33322,
    currentDayInfo: {
        temp: 0,
        icon: 0,
        city: "",
        presep: 0,
        datetime: "",
    },
    currentDayMoreInfo: {
        temp: 0,
        temp_like: 0,
        pressure: 0,
        wideSpeed: 0,
        wideDir: 0,
    },
    isFounded: true,
    isLoaded: true,
});

export const mutations = {
    setDays(state, days) {
        state.days = days;
    },
    setCurrentDayInfo(state, date) {
        const day = state.days.find((day) => day.datetime === date);
        if (day) {
            state.currentDayInfo = {
                temp: Math.floor(day.max_temp),
                icon: day.weather.code,
                city: state.city,
                datetime: day.datetime,
            };
            state.currentDayMoreInfo = {
                temp: Math.floor(day.max_temp),
                temp_like: Math.floor(day.app_max_temp),
                pressure: Math.floor(day.pres / state.oneMm),
                presep: day.pop,
                wideSpeed: Math.floor(day.wind_spd),
                wideDir: day.wind_cdir_full,
            };
        } else {
            console.log("error");
        }
    },
    setSearchCity(state, city) {
        state.city = city;
    },
    notIsFoundede(state, value) {
        state.isFounded = value;
    },
    setLoaded(state, value) {
        state.isLoaded = value;
    },
};

export const actions = {
    async fetchDays(context, city) {
        context.commit("setLoaded", true);
        this.$axios
            .get("https://api.weatherbit.io/v2.0/forecast/daily", {
                params: {
                    days: context.state.daysCount,
                    key: "a160d46545db4021b25f35fb06072f4f",
                    city: city,
                    lang: "ru",
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    context.commit("setDays", response.data.data);
                    context.commit("setSearchCity", response.data.city_name);
                    context.commit("setLoaded", false);
                    context.commit("notIsFoundede", true);
                } else {
                    context.commit("setLoaded", false);
                    context.commit("notIsFoundede", false);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    },
};
