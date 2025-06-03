import container from './container/index.vue';
import header from './header/index.vue';
import footer from './footer/index.vue';
import section from './section/index.vue';
import icons from './icons/index.vue';

export default [
  { name: 'container', component: container },
  { name: 'headerUI', component: header },
  { name: 'footerUI', component: footer },
  { name: 'sectionUI', component: section },
  { name: 'icons', component: icons },
];
