import {resolve} from 'node:path';
export default {base:'./',build:{rollupOptions:{input:Object.fromEntries(['index','menu','gallery','studio','planner','visit','dashboard'].map(p=>[p,resolve(import.meta.dirname,p+'.html')]))}}};
