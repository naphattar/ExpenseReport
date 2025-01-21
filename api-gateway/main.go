package main

import (
	"api-gateway/internal/config"
	"api-gateway/internal/routes"
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadConfig()

	router := gin.Default()

	coreConfig := cors.DefaultConfig()
	coreConfig.AllowOrigins = []string{config.AppConfig.FrontendURL}
	coreConfig.AllowMethods = []string{"POST", "GET", "PUT", "OPTIONS"}
	coreConfig.AllowHeaders = []string{
		"Origin",
		"Content-Type",
		"Authorization",
		"Accept",
		"User-Agent",
		"Cache-Control",
		"Pragma",
	}
	coreConfig.ExposeHeaders = []string{"Content-Length"}
	coreConfig.AllowCredentials = true
	coreConfig.MaxAge = 12 * time.Hour

	router.Use(cors.New(coreConfig))

	routes.RegisterUserRoutes(router)
	routes.RegisterEntryRoutes(router)

	log.Printf("API Gateway is running on port %s", config.AppConfig.Port)
	if err := router.Run(":" + config.AppConfig.Port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
