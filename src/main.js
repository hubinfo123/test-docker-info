// import module
import Vue from 'vue';
import Store from './config/store.js';
import {DevelopMode} from './config/config.js';
import App from './App.vue';
import '@/assets/scss/bootstrap.scss';
import '@/assets/scss/style.scss';

Vue.config.productionTip = true;

Vue.mixin(require('@/components/abstract/pea-rule.vue'));

new Vue({
    store :Store,
    el :'#app',
    render :CE => CE(App),
});



if(!DevelopMode)console.log(`%c\
_______________#########_______________________
______________############_____________________
______________#############____________________
_____________##__###########___________________
____________###___#####_#####__________________
____________###_#######___####_________________
___________###__##########_####________________
__________####__###########_####_______________
________#####___###########__#####_____________
_______######___###_########___#####___________
_______#####___###___########___######_________
______######___###__###########___######_______
_____######___####_##############__######______
____#######__#####################_#######_____
____#######__##############################____
___#######__######_#################_#######___
___#######__######_######_#########___######___
___#######____##__######___######_____######___
___#######________######____#####_____#####____
____######________#####_____#####_____####_____
_____#####________####______#####_____###______
______#####______;###________###______#________
________##_______####________####______________
`,'background-color:#39C5BB;color:#39C5BB');
