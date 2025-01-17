package main

import (
	"log"
	"user-service/internal/config"
	"user-service/internal/database"
	"user-service/internal/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadConfig()
	database.Connect()

	router := gin.Default()
	routes.UserRoutes(router)

	log.Printf("User service is running on port %s", config.AppConfig.Port)
	if err := router.Run(":" + config.AppConfig.Port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
