const { getDefaultConfig } = require('@expo/metro-config');
const exclusionList = require('@expo/metro/metro-config/defaults/exclusionList');

const config = getDefaultConfig(__dirname);
config.resolver.blockList = [
  exclusionList([/expo-env\.d\.ts$/]),
  ...(config.resolver.blockList || []),
];

module.exports = config;
