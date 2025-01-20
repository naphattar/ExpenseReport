package main

import (
	"api-gateway/internal/config"
	"api-gateway/internal/routes"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadConfig()

	router := gin.Default()

	routes.RegisterUserRoutes(router)
	routes.RegisterEntryRoutes(router)

	log.Printf("API Gateway is running on port %s", config.AppConfig.Port)
	if err := router.Run(":" + config.AppConfig.Port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
