module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore the three-mesh-bvh error
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        fs: false,
        path: false,
      };
      
      // Add ignore warnings for specific modules
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/,
        /three-mesh-bvh/,
        /BatchedMesh/,
      ];
      
      return webpackConfig;
    },
  },
}; 