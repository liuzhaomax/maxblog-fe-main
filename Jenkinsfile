//#!groovy

// String buildShell = "${env.buildShell}"

pipeline {
    // 指定集群节点
    agent any
    // 选项
    options {
        timestamps() //日志会有时间
        skipDefaultCheckout() //删除隐式checkout scm语句
        disableConcurrentBuilds() //禁止并行
        timeout(time: 1, unit: 'HOURS') //流水线超市设置1h
    }
    // 声明全局变量
    environment {
        harborUsername = "admin"
        harborPassword = "Harbor12345"
        harborAddress = "10.192.0.4:9002"
        harborRepo = "repo"
    }
    // 流水线阶段
    stages {
        // 拉取代码
        stage('Checkout') {
            steps {
                echo '--------------------- Checkout Start ---------------------'
                timeout(time: 5, unit: "MINUTES"){
                    checkout([$class: 'GitSCM', branches: [[name: '${tag}']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/liuzhaomax/maxblog-fe-main.git']]])
                }
                echo '--------------------- Checkout End ---------------------'
            }
        }
//         // 本地github会用到
//         stage('Update GitHub') {
//             steps {
//                 echo '--------------------- Update GitHub Start ---------------------'
//                 script {
//                     timeout(time: 20, unit: "MINUTES"){
//                         sh """
//                             git config --get remote.origin.url
//                             tr -d
//                             git rev-parse HEAD
//                         """
//                         // setting commit status
//                     }
//                 }
//                 echo '--------------------- Update GitHub End ---------------------'
//             }
//         }
        // 检查App版本
        stage('Version') {
//             when {
//                 buildingTag()
//             }
            steps {
                echo '--------------------- Version Start ---------------------'
                echo 'App Version: ' + "${tag}"
                script {
                    npmHome = tool "npm"
                    sh """
                        export NODE_HOME=${npmHome}
                        export PATH=\$NODE_HOME/bin:\$PATH
                        rm -rf server/build
                        rm -rf node_modules package-lock.json server/node_modules server/package-lock.json
                        ${npmHome}/bin/npm cache clear --force
                        ${npmHome}/bin/node --version
                        ${npmHome}/bin/npm --version
                    """
                    // grep "^go .*" go.mod
                    // cut -f 2 -d
                    // echo go version
                    // 赋予go env sh 执行权限
                    // run set go env sh
                }
                echo '--------------------- Version End ---------------------'
            }
        }
//         // 语法格式检查
//         stage('Lint') {
//             steps {
//                 echo '--------------------- Lint Start ---------------------'
//                 script {
//                     timeout(time: 30, unit: "MINUTES"){
//                         npmHome = tool "npm"
//                         sh """
//                             # ${npmHome}/bin/npm install
//                             ${npmHome}/bin/npm install --save-dev eslint
//                             # ${npmHome}/bin/npm install --save-dev eslint-plugin-react
//                             ${npmHome}/bin/npm run lint
//                             ${npmHome}/bin/npm run lint:report
//                         """
//                     }
//                 }
//                 echo '--------------------- Lint End ---------------------'
//             }
//         }
//         // 构建
//         stage('Build') {
//             steps {
//                 echo '--------------------- Build Start ---------------------'
//                 script {
//                     timeout(time: 20, unit: "MINUTES"){
//                         npmHome = tool "npm" //变量名npm在jenkins全局工具里定义的
//                         sh """
//                             export NODE_HOME=${npmHome}
//                             export PATH=\$NODE_HOME/bin:\$PATH
//                             ${npmHome}/bin/npm run build
//                             # ${npmHome}/bin/npm test
//                             cd server
//                             ${npmHome}/bin/npm install
//                             cd ..
//                         """
//                         // tar -zcvf 文件名.tar.gz 打包
//                         // cd到别处
//                         // rm -rf *
//                         // mv 路径/server/文件名.tar.gz ./
//                         // tar -zxvf 文件名.tar.gz -C ./  解压缩
//                         // rm -rf 文件名.tar.gz  删除压缩包
//                     }
//                 }
//                 echo '--------------------- Build End ---------------------'
//             }
//         }
//         // 静态代码分析SonarQube
//         stage('SonarQube') {
//             steps {
//                 echo '--------------------- SonarQube Start ---------------------'
//                 script {
//                     timeout(time: 20, unit: "MINUTES"){
//                         sonarScannerHome = tool "sonar-scanner"
//                         sh """
//                             ${sonarScannerHome}/bin/sonar-scanner \
//                                 -Dsonar.sources=./ \
//                                 -Dsonar.projectname=${JOB_NAME} \
//                                 -Dsonar.login=8ed4baf9ba0204179095df34597c503c4b857b8a \
//                                 -Dsonar.projectKey=${JOB_NAME} \
//                                 -Dsonar.nodejs.executable=/usr/bin/node \
//                                 -Dsonar.inclusions=src/**/*.js,src/**/*.jsx \
//                                 -Dsonar.coverage.exclusions=node_modules/**/*,server/build/**/*,config/**/*,scripts/**/*,public/**/*,src/config/**/* \
//                                 -Dsonar.qualitygate.wait=true
//                         """
//                     }
//                 }
//                 echo '--------------------- SonarQube End ---------------------'
//             }
//         }
// //         // 安全漏洞扫描Nessus
// //         stage('Checkmarx') {
// //             steps {
// //                 echo '--------------------- Checkmarx Start ---------------------'
// //                 echo 'Checkmarx - SUCCESS'
// //                 echo '--------------------- Checkmarx End ---------------------'
// //             }
// //         }
//         // 构建镜像
//         stage('Build Image') {
//             when {
//                 buildingTag()
//             }
//             steps {
//                 echo '--------------------- Build Image Start ---------------------'
//                 timeout(time: 10, unit: "MINUTES"){
//                     sh """
//                         cd server
//                         docker build -t ${JOB_NAME}:${tag} .
//                         cd ..
//                     """
//                 }
//                 echo '--------------------- Build Image End ---------------------'
//             }
//         }
//         // 推送镜像到Harbor
//         stage('Push to Harbor') {
//             when {
//                 buildingTag()
//             }
//             steps {
//                 echo '--------------------- Push to Harbor Start ---------------------'
//                 timeout(time: 10, unit: "MINUTES"){
//                     sh """
//                         docker login -u ${harborUsername} -p ${harborPassword} ${harborAddress}
//                         docker tag ${JOB_NAME}:${tag} ${harborAddress}/${harborRepo}/${JOB_NAME}:${tag}
//                         docker push ${harborAddress}/${harborRepo}/${JOB_NAME}:${tag}
//                     """
//                 }
//                 echo '--------------------- Push to Harbor End ---------------------'
//             }
//         }
//         // 部署容器
//         stage('Deploy') {
//             when {
//                 buildingTag()
//             }
//             steps {
//                 echo '--------------------- Deploy Start ---------------------'
//                 timeout(time: 10, unit: "MINUTES"){
//                     sshPublisher(publishers: [sshPublisherDesc(configName: 'test', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: "sudo deploy.sh $harborAddress $harborRepo $JOB_NAME $tag $container_port $host_port", execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
//                 }
//                 echo '--------------------- Deploy End ---------------------'
//             }
//         }
    }
    // 构建后的操作
    post {
        always {
            echo '********************************************************************'
            echo '********************************************************************'
            echo '********************* Pipeline about to Finish *********************'
            echo '********************************************************************'
            echo '********************************************************************'
            sh "rm -rf ${JOB_NAME} ${JOB_NAME}@tmp"
        }

        success {
            echo 'SUCCESS 成功'
            sh "docker image prune -f"
        }

        failure {
            echo 'FAILURE 失败'
            error "错误发生，流水线失败"
        }

        aborted {
            echo 'ABORTED 取消'
            error "流水线被终止"
        }
    }
}