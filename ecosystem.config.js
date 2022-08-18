module.exports = {
    apps : [
        {
          name: "lw",
          script: "./lw.js",
          watch: true,
          env: {
              "PORT": 9003,
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 9003,
              "NODE_ENV": "production",
          }
        }
    ]
  }