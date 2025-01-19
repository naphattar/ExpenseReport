package routes

import(
	"api-gateway/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterUserRoutes(router *gin.Engine) {
	userRoutes := router.Group("/user")
	{
		userRoutes.POST("/register",controllers.RegisterHandler)
		userRoutes.POST("/login",controllers.LoginHandler)
		// entryRoutes.GET("", controllers.GetAllEntriesHandler)
		// entryRoutes.GET("/:id", controllers.GetEntryHandler)
		// entryRoutes.PUT("/:id", controllers.UpdateEntryHandler)
		// entryRoutes.DELETE("/:id", controllers.DeleteEntryHandler)
	}
}