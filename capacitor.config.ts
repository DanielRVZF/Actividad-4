import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.uniminuto.app',
  appName: 'AppAndroid',
  webDir: 'dist/app-android',
  server: {
    androidScheme: 'https'
  }
};

export default config;
