<template>
    <div class="toggleTheme" @click="toggleTheme">
        <icons-theme />
    </div>
</template>

<script>
export default {
    name: "ToggleTheme",
    data() {
        return {
            isThemeLight: true,
            theme: "light",
        };
    },
    methods: {
        toggleTheme() {
            this.isThemeLight = !this.isThemeLight;
        },
    },
    watch: {
        isThemeLight() {
            this.theme = this.isThemeLight ? "light-mode" : "dark-mode";
        },
    },
    computed: {
        htmlAttrs() {
            return {
                class: this.theme,
            };
        },
    },  
    head() {
        return {
            htmlAttrs: this.htmlAttrs,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "assets/css/mixins.scss";
.toggleTheme {
    cursor: pointer;
    @include flex(flex, center, center);
}
</style>
