package controllers

import (
	"net/http"
	"user-service/internal/models"
	"user-service/internal/services"

	"github.com/gin-gonic/gin"
)

func RegisterHandler(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := services.RegisterUser(&user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "User registered successfully"})
}

func LoginHandler(c *gin.Context) {
	var loginRequest struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	if err := c.ShouldBindJSON(&loginRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	token, err := services.LoginUser(loginRequest.Username, loginRequest.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	c.SetCookie(
		"auth",   		// Name of the cookie
		token,          // Value of the cookie (JWT token)
		3600,           // Max age in seconds (1 hour)
		"/",            // Path (accessible site-wide)
		"",             // Domain (default to current domain)
		false,          // Secure flag (set to true for HTTPS)
		true,           // HttpOnly flag (prevents JS access to cookie)
	)

	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
}

func GetProfileHandler(c *gin.Context) {

	username, exists := c.Get("username")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Profile data", "username": username})
}

func LogoutHandler(c *gin.Context) {
	c.SetCookie(
		"auth", // Name of the cookie
		"",           // Empty value
		-1,           // Expire now
		"/",          // Path
		"",           // Domain
		false,        // Secure flag
		true,         // HttpOnly flag
	)

	c.JSON(http.StatusOK, gin.H{"message": "Logout successful"})
}

