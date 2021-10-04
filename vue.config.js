module.exports = {
	publicPath: './',
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/components/common',
				'views': '@/views'
			}
		}
	},
	devServer: {
		proxy: {
			'/api': {
				  target: 'http://127.0.0.1:8000',
				//target: 'http://www.baidu.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}