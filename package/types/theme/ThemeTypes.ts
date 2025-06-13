export type ThemeTypes = {
    name: string;
    dark: boolean;
    variables?: object;
    colors: {
        primary?: string;
        secondary?:string;
        gray?:string;
        white?:string;
        muted?:string;
    };
};
