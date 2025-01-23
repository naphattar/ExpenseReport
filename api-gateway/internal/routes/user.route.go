package routes

import (
	"api-gateway/internal/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterUserRoutes(router *gin.Engine) {
	userRoutes := router.Group("/user")
	{
		userRoutes.GET("/profile", controllers.GetProfileHandler)
		userRoutes.POST("/register", controllers.RegisterHandler)
		userRoutes.POST("/login", controllers.LoginHandler)
		userRoutes.POST("/logout", controllers.LogoutHandler)
	}
}
