let port = 1100

module.exports = {
	apps : [
		{
            name: 'tutor.mapbox',
            autorestart: true,
            instances: 1,
            max_memory_restart: '1G',
            namespace: 'tutor',
            script: 'index.js',
            watch: false,
            exec_mode: 'fork',
            env: {
                port: port++
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],

    deploy: {
        production: {
            user: 'xmer',
            host: 'xmer.pw',
            path: '/websites/tutor/mapbox',
            repo: 'git@github.com/Xmer-Tutor/Mapbox.git',
            ref: 'origin/master',
            'post-deploy': 'yarn install && yarn build && pm2 startOrRestart ecoSystem.config.js --env production',
            env: {
                NODE_ENV: 'production'
            }
        }
    }
};
