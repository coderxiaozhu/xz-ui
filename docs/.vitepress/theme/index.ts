import Theme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css"
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/Test'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';

export default {
    ...Theme,
    enhanceApp(ctx) {
        Theme.enhanceApp(ctx);
        ctx.app.component('HelloWorld', HelloWorld)
        ctx.app.component('Test', Test)
        ctx.app.component('DemoBlock', DemoBlock)
        ctx.app.component('Demo', Demo)
    }
}