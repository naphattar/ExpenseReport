package controllers

import (
	"api-gateway/internal/config"
	"api-gateway/internal/utils"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterHandler(c *gin.Context) {
	registerEndpoint := config.AppConfig.UserServiceURL + "/user/register"
	resp, err := utils.ForwardRequest(c, http.MethodPost, registerEndpoint)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read response body"})
		return
	}

	c.Data(resp.StatusCode, resp.Header.Get("Content-Type"), bodyBytes)
}

func LoginHandler(c *gin.Context) {
	loginEndpoint := config.AppConfig.UserServiceURL + "/user/login"
	resp, err := utils.ForwardRequest(c, http.MethodPost, loginEndpoint)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read response body"})
		return
	}
	c.Data(resp.StatusCode, resp.Header.Get("Content-Type"), bodyBytes)
}

func LogoutHandler(c *gin.Context) {
	logoutEndpoint := config.AppConfig.UserServiceURL + "/user/logout"
	resp, err := utils.ForwardRequest(c, http.MethodPost, logoutEndpoint)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read response body"})
		return
	}
	c.Data(resp.StatusCode, resp.Header.Get("Content-Type"), bodyBytes)
}

func GetProfileHandler(c *gin.Context) {
	getProfileEndpoint := config.AppConfig.UserServiceURL + "/user/profile"
	resp, err := utils.ForwardRequest(c, http.MethodGet, getProfileEndpoint)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read response body"})
		return
	}
	c.Data(resp.StatusCode, resp.Header.Get("Content-Type"), bodyBytes)
}
