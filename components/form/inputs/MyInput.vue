<template>
    <div class="input" :style="{ '--input-width': width }">
        <input
            :value="inputValue"
            @input="updateValue($event.target.value)"
            :type="type"
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
    name: "MyInput",
    props: {
        value: {
            type: [String, Number],
        },
        placeholder: {
            type: String,
            default: "Ввидите текст...",
        },
        type: {
            type: String,
            default: "text",
        },
        width: {
            type: String,
            default: "100%",
        },
    },
    data() {
        return {
            inputValue: this.value,
        };
    },
    methods: {
        updateValue(value) {
            this.inputValue = value;
            this.$emit("input", value);
        },
    },
};
</script>

<style lang="scss" scoped>
.input {
    width: 100%;
    input {
        width: var(--input-width);
        padding: 9px 20px;
        border-radius: 10px;
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border: 1px solid transparent;
        color: var(--text-black);
        outline: none;
        background: var(--blue);
        transition: 0.3s ease;
        &:focus {
            border: 1px solid var(--main);
        }
    }
}
</style>
