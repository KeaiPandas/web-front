module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    },
  },
  lintOnSave:false,

    //方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  devServer: {
    proxy: {
      'api': {
        tar
      }
    }
  }
}