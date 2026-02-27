module.exports = {
  apps: [
    {
      name: "kee-alive-bot",
      script: "npm",
      args: "run start",

      max_memory_restart: "50M",
      exp_backoff_restart_delay: 10000,

      max_restarts: 3,
      min_uptime: 60000,
    },
  ],
};
