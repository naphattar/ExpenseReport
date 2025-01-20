package routes

import (
	"api-gateway/internal/controllers"
	"api-gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

func RegisterEntryRoutes(router *gin.Engine) {
	entryRoutes := router.Group("/entries")
	{
		entryRoutes.Use(middleware.AuthMiddleware())
		entryRoutes.GET("/", controllers.GetAllEntriesHandler)
	}
}
