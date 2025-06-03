import { defineStore } from 'pinia';
import type { settingsState, themes } from '@/stores/settings/types';

export const useSettingsStore = defineStore('useSettings', {
  state: (): settingsState => ({
    theme: 'dark',
  }),
  actions: {
    changeTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
    },
    setupTheme(theme: themes) {
      this.theme = theme;
      document.body.classList.add('dark');
    },
    isSystemDark() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
  },
});
