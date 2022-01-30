pipeline {
    agent any
    stages {
            stage('Cloning') {
                steps {
                        bat  '''cd ./web_app_exercice_data_eng && git pull'''
                    }
            }
            stage('Building Docker Image') {
                steps {
                        bat  '''docker build -t exercice ./web_app_exercice_data_eng'''
                    }
            }
            stage('Running Docker Image') {
                steps {
                        bat '''docker run -dp 3000:3000 exercice'''
                    }
            }

        }
    }