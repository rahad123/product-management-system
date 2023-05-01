const config = {
    app: {
      name: process.env.APP_NAME ?? 'product_management',
      port: process.env.PORT ?? 3000,
      environment: process.env.NODE_ENV ?? 'dev',
      host: process.env.HOST ?? 'localhost',
    },
    db: {
      mysql_user_name: process.env.MYSQL_USER_NAME,
      mysql_password: process.env.MYSQL_PASSWORD,
    },
  };

export { config }