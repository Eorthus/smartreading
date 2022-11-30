<template>
  <div>
    <div class="content description">
        <TheDescription :item-data="description"/>
    </div>
    <div class="content preferences">
        <ThePreferences :item-data="preferences"/>
    </div>
    <div class="content gain">
        <TheGain :item-data="gain"/>
    </div>
    <div class="content books">
        <TheBooks :item-data="books"/>
    </div>
    <div class="content slider js-slider" v-if="!isMobile">
        <TheSlider :item-data="slider"/>
    </div>
    <div class="content mobslider" v-if="isMobile">
        <TheMobSlider :item-data="slider"/>
    </div>
    <div class="content feedback">
        <TheFeedback :item-data="feedback"/>
    </div>
    <div class="price">
        <ThePrice :item-data="price"
                  @price_counter="index_counter"
                  @price_actual="index_price"
        />
    </div>
    <teleport to="body">
        <div class="bin">
            <TheBin :item-data="bin"
                    @bin_delete="index_delete"
                    @bin_add="index_add"
                    @bin_info="index_info"
            />
        </div>
    </teleport>
  </div>
</template>

<script>
    import TheDescription from "../components/description/TheDescription";
    import ThePreferences from "../components/preferences/ThePreferences";
    import TheBooks from "../components/books/TheBooks";
    import TheSlider from "../components/slider/TheSlider";
    import TheMobSlider from "../components/mobslider/TheMobSlider";
    import TheFeedback from "../components/feedback/TheFeedback";
    import ThePrice from "../components/price/ThePrice";
    import TheGain from "../components/gain/TheGain";
    import TheBin from "../components/bin/TheBin";
    import {DeviceMixin} from "../mixins/deviceMixin";

    export default {
        components: {TheBin, TheGain, ThePrice, TheFeedback, TheSlider, TheMobSlider, TheBooks, ThePreferences, TheDescription},
        mixins: [
            DeviceMixin
        ],
        mounted() {
            this.initDevice();
            const me = this;
            window.addEventListener( 'resize' ,  function () {
                me.initDevice()
            }, true);
        },
        methods: {
            index_counter(price_counter) {
                this.bin.order.count = price_counter
                this.price.count = price_counter
            },
            index_price(price_actual) {
                this.bin.order.price = price_actual
            },
            index_delete(bin_counter) {
                this.bin.order.count = bin_counter
                this.price.count = bin_counter
            },
            index_add(bin_counter) {
                this.bin.order.count = bin_counter
                this.price.count = bin_counter
            },
            index_info(bin_info) {
                this.order = bin_info
            }
        },

        data() {
            return {
                description: {
                    title: 'All the soft skills you need for success and happiness in one visual book.',
                    text: 'Learn visually. Learn more easily. Learn more quickly.',
                    img: '/img/book.png',
                    flag: 'e-book',
                    logo: '/img/logo.png',
                    cart: '/img/cart.png',
                    cart_hover: '/img/cart_hover.png',
                    rating_empty: '/img/EmptyStar.svg',
                    rating_full: '/img/FullStar.svg',
                    rating: '4.5',
                    percent: '94',
                },
                preferences: [
                    {
                        img: '/img/mark.png',
                        text: 'All the self-development tools you need.\nIn one visual book!'
                    },
                    {
                        img: '/img/key.png',
                        text: '10 key insights from every bestseller'
                    },
                    {
                        img: '/img/eye.png',
                        text: '500+ insights in one book'
                    },
                    {
                        img: '/img/clock.png',
                        text: 'Save 300 hours of reading'
                    },
                ],
                gain: {
                    title: 'What you gain from this book:',
                    slider: [
                        {
                            img: '/img/slide1.jpg',
                        },
                        {
                            img: '/img/slide2.jpg',
                        },
                        {
                            img: '/img/slide3.jpg',
                        },
                        {
                            img: '/img/slide4.jpg',
                        },
                        {
                            img: '/img/slide5.jpg',
                        },
                        {
                            img: '/img/slide6.jpg',
                        },
                    ],
                    mobslider:[
                        {
                            img: '/img/mobslide1.png',
                        },
                        {
                            img: '/img/mobslide2.png',
                        },
                    ],
                    arrows: {
                        right: '/img/right.png',
                        left: '/img/left.png'
                    },
                    preferences: [
                        {
                            title: '300',
                            text: 'hours \n saved',
                        },
                        {
                            title: '15',
                            text: 'min per \n book',
                        },
                        {
                            title: '500+',
                            text: 'key \n insights',
                        },
                        {
                            title: '50',
                            text: 'books \n in one',
                        },
                    ]
                },

                books: {
                    title: '50 exceptional books contained in one visual one:',
                    subtitle: 'We include on the top-rated books to compile our infographics',
                    list: [
                        {
                            img: '/img/book1.jpg',
                            tag: 'Business',
                            title: 'Grit. The power of passion and perseverance',
                            author: 'Angela Duckworth',
                        },
                        {
                            img: '/img/book2.jpg',
                            tag: 'Business',
                            title: 'The innovator\'s DNA. Mastering the five skills of disruptive innovators',
                            author: 'Jeff Dyer',
                        },
                        {
                            img: '/img/book3.jpg',
                            tag: 'Business',
                            title: 'Mindset.\nThe new psychology of success',
                            author: 'Carol S. Dweck',
                        },
                        {
                            img: '/img/book4.jpg',
                            tag: 'Business',
                            title: 'Emotional Intelligence. Why it can matter more than IQ',
                            author: 'Daniel Goleman',
                        },
                    ],
                    modal_img: '/img/list.jpg',
                    mobile_img:'/img/mobbooks.png',
                    cross: '/img/cross.png',
                    modal_title: 'List of all books'
                },
                slider: {
                    title: 'Visuals are a great\nway to learn',
                    img: '/img/slider.png',
                    mob_img:'/img/mobslider.png',
                    text: [
                        {
                            title: 'You\nunderstand\nit more\neasily',
                            subtitle: 'It increases retention\nby 29-42%',
                        },
                        {
                            title: 'It will stay\nwith you\nlonger',
                            subtitle: 'It gets stored in your\nlong-term memory',
                        },
                        {
                            title: 'It improves\nmotivation to\nlearn',
                            subtitle: 'It’s fun to read AND give\nyou a sense of\nsatisfaction from\ncompleting something',
                        },
                    ]
                },
                feedback:{
                    title:'Feedback from our customers:',
                    messages:[
                        {
                            text:'I love it. Infographics are indeed a fresh find for me. But, beware of the side effects: you’ll want to read all 50 originals!',
                            author:'Max O.',
                        },
                        {
                            text:'This book is the best gift I could have given myself. If you truly want to learn something, but don’t have time – this book is for you.',
                            author:'Christa N.',
                        },
                        {
                            text:'I like to look through it during breaks to refresh my memory on ideas I got from books I read years ago.',
                            author:'Jennifer Payou',
                        },
                        {
                            text:'Infographics, really? There was no way of knowing I’d find this useful. They capture your attention and hold on tight. This is one of my favorite books now.',
                            author:'Brad D.',
                        },
                    ],
                    img_face: '/img/face.png',
                    img_hand: '/img/hand.png',
                    term:'Term of use',
                    term_link:'https://www.dropbox.com/s/4w38v8tyzsn6mrp/TERMS%20AND%20CONDITIONS%20OF%20USE.pdf?dl=0',
                    mail:'hello@ivigreen.com',
                    faq_title:'FAQ',
                    questions:[
                        {
                            title:'How soon will I get my e-book after I place my order?',
                            description:'Your e-book is sent to your email inbox right after placing the order. Sometimes, it goes to Spam, so make sure to check it too.',
                        },
                        {
                            title: 'How long is my access to the e-book good for?',
                            description:'Your access is not limited by any deadlines. All the insights will stay with you forever!',
                        },
                        {
                            title:'How do I use your e-book?',
                            description:'The e-book is available in PDF format, so you can read it on your devices or print it out.',
                        },
                    ]
                },
                price: {
                    old_price: '50.00',
                    new_price: '24.99',
                    percent: '50',
                    minutes: 10,
                    button: 'buy',
                    count: 0,
                },
                bin: {
                    empty_title: 'Cart is empty',
                    full_title: ' Cart',
                    btn: ' Check out',
                    href: '#',
                    order: {
                        //вопрос
                        img: '/img/book.png',
                        title: 'Personal development: 50 bestsellers in infographics. $0.49 x 50 books',
                        price: '24.99',
                        count: 0,
                    }
                },
                order: {}
            }
        },
    }
</script>

<style lang="scss" src="./index.scss"></style>
