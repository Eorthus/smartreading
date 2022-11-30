export const StringMixin = {
    methods: {
        clear_br(text) {
            return text.replace(/(?:<br>)/g, '');
        }
    },
};
