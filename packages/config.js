export const Utils = {
  config: {
    dev: {
      apiUrl: 'https://test02.2boss.cn/'
    },
    test: {
      apiUrl: 'https://test02.2boss.cn/'
    },
    pro: {
      apiUrl: 'https://ta.2boss.cn/'
    }
  }
}

export const baseUrl = process.env.NODE_ENV === 'production' ? Utils.config.product : process.env.NODE_ENV === 'testing' ? Utils.config.test : Utils.config.dev
