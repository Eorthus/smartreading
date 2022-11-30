export const DeviceMixin = {
    data() {
        return {
            isMobile: false,
        }
    },
    methods: {
        initDevice() {
            this.isMobile = this.resize_device()
        },
        resize_device() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || screen.width <= 600;
        }
    },
};
