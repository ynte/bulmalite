import js from '@eslint/js';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
    {
        ignores: ['dist/**', 'types/**'],
    },
    js.configs.recommended,
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
    skipFormatting,
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        files: ['collect-vue.mjs'],
        languageOptions: {
            globals: {
                console: 'readonly',
                process: 'readonly',
            },
        },
    }
);
