package controllers

import(
	"net/http"
	"io"
	"api-gateway/internal/config"
	"api-gateway/internal/utils"
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


func LoginHandler(c *gin.Context){
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
