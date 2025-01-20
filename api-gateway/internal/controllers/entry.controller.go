package controllers

import (
	"api-gateway/internal/config"
	"api-gateway/internal/utils"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllEntriesHandler(c *gin.Context) {

	userid, exists := c.Get("userid")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	entryType := c.Query("type")

	getAllEntriesEndpoint := config.AppConfig.EntryServiceURL + "/entries"
	queryParams := "?userId=" + userid.(string)
	if entryType != "" {
		queryParams += "&type=" + entryType
	}
	fullURL := getAllEntriesEndpoint + queryParams

	resp, err := utils.ForwardRequest(c, http.MethodGet, fullURL)
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
