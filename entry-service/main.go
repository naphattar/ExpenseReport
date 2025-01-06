package main

import (
    "github.com/gin-gonic/gin"
	"entry-service/internal/config"
    "entry-service/internal/database"
)

func main() {

	config.LoadConfig()

    database.Connect()

    router := gin.Default()

    router.Run(":" + config.AppConfig.Port)
}
