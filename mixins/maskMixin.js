export const MaskMixin = {
    methods: {
        // mask = '9999.9999.9999.9999'
        bankAccountMask(x) {
            if (!x) {
                return 0
            }
            return x.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ".");
        },

        bankAccountHideMask(x) {
            return '** ' + x.slice(16)
        },

        // mask = '999 999 999 999'
        numberWithSpaces(x) {
            if (!x) {
                return 0
            }
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },

        // mask = '9,999.99'
        fractionalPrice(x) {
            if (!x) {
                return 0
            }
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
};
