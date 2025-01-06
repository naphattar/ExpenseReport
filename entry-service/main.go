package main

import (
    "github.com/gin-gonic/gin"
	"entry-service/internal/config"
    "entry-service/internal/database"
	"entry-service/internal/routes"
)

func main() {

	config.LoadConfig()

    database.Connect()

    router := gin.Default()

	routes.RegisterRoutes(router)

    router.Run(":" + config.AppConfig.Port)
}
