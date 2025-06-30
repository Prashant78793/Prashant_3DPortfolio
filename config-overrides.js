const webpack = require('webpack');

module.exports = function override(config, env) {
  // Ignore the BatchedMesh error
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    path: false,
  };

  // Add ignore warnings for specific modules
  config.ignoreWarnings = [
    /Failed to parse source map/,
    /three-mesh-bvh/,
    /BatchedMesh/,
    /@mediapipe/,
  ];

  // Add a plugin to ignore the specific error
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /three-mesh-bvh/,
    })
  );

  return config;
}; 