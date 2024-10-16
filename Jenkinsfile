
pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS 14.x', type: 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository from GitHub
                git credentialsId: 'github-token', url: 'https://github.com/yourusername/your-react-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Use the NodeJS installation
                    withEnv(["PATH+NODE=${NODE_HOME}/bin"]) {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    withEnv(["PATH+NODE=${NODE_HOME}/bin"]) {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    withEnv(["PATH+NODE=${NODE_HOME}/bin"]) {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}
