package routes

import (
	"user-service/internal/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoutes(router *gin.Engine) {
	user := router.Group("/user")
	{
		user.POST("/register", controllers.RegisterHandler)
		user.POST("/login", controllers.LoginHandler)
		user.POST("/logout",controllers.LogoutHandler)

		user.Use(middleware.AuthMiddleware())
		user.GET("/profile", controllers.GetProfileHandler) 
	}
}

