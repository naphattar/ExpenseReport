package main

import(
    "log"
    "api-gateway/internal/config"
    "github.com/gin-gonic/gin"
)

func main(){
    config.LoadConfig()

    router := gin.Default()

    log.Printf("API Gateway is running on port %s" , config.AppConfig.Port)
    if err := router.Run(":" + config.AppConfig.Port); err != nil{
        log.Fatalf("Failed to start server: %v",err)
    }
}