declare module '*.css';
declare module '*.scss';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

interface ImportMetaEnv {
  readonly VITE_APP_ENV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
