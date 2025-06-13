import type { ThemeTypes } from '@/types/theme/ThemeTypes';

const DARK_THEME: ThemeTypes = {
    name: 'DARK_THEME',
    dark: true,
    variables: {
        'border-color': '#e0e6eb',
        'border-opacity': 1
    },
    colors: {
        primary: '#C1FF72',
        secondary: '#1f2a2e',
        muted:'#1f2a2eb3',
        white:'#ffffff',
    }
};

export { DARK_THEME };
