package routes

import (
	"entry-service/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {
	entryRoutes := router.Group("/entries")
	{
		entryRoutes.POST("", controllers.CreateEntryHandler)
		entryRoutes.GET("", controllers.GetAllEntriesHandler)
		entryRoutes.GET("/:id", controllers.GetEntryHandler)
		entryRoutes.PUT("/:id", controllers.UpdateEntryHandler)
		entryRoutes.DELETE("/:id", controllers.DeleteEntryHandler)
	}
}
