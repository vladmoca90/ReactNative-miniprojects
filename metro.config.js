const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.blockList = [
  ...(config.resolver.blockList || []),
  /expo-env\.d\.ts$/,
];

module.exports = config;