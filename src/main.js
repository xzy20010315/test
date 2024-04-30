
import App from './App.vue'

// import Test from './Test.vue'

// import { Vue } from 'vue'
// export const EventBus = new Vue()
// Vue.prototype.$EventBus = new Vue()


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { createApp } from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';


import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';
// import http from './http.js'

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

VMdPreview.use(vuepressTheme, {
  Prism,
});

const app = createApp(App);

// const test = createApp(Test)

app.use(VueMarkdownEditor);
app.use(VMdPreview);

app.use(ElementPlus)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')
// test.mount('#app')



