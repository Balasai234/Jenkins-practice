pipeline {
    agent { label 'AGENT-1' }
    environment{
        DB_URL=credentials('db-url')
        APP_ENV="dev"
    }
    stages {
        stage('Run App') {
            steps {
                sh '''
                    echo "Environment: $APP_ENV"
                    node app.js
                '''
            }
        }
    }
}
