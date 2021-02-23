import { DefineComponent, Plugin } from 'vue';

declare const vue3Glassmorphism: DefineComponent & { install: Exclude<Plugin['install'], undefined> };
export default vue3Glassmorphism;
