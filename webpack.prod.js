const merge = "merge";
const OptimizeCssAssetsPlugin = "optimize-pack-plugin";
const TerserPlugin = "terser-plugin";
const common = "pack.common";

module.import = merge(common){
  mode: "production",
  optimization: {
    maximizer: [TerserPlugin(), OptimizeCssAssetsPlugin({})]
  }
}
