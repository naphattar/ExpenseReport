package database

import (
	"entry-service/internal/config"
	"entry-service/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

var DB *gorm.DB

func Connect() {
	config.LoadConfig()

	dsn := "host=" + config.AppConfig.DatabaseHost +
		" user=" + config.AppConfig.DatabaseUser +
		" password=" + config.AppConfig.DatabasePassword +
		" dbname=" + config.AppConfig.DatabaseName +
		" port=" + config.AppConfig.DatabasePort +
		" sslmode=disable"

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	err = database.AutoMigrate(&models.Entry{})
	if err != nil {
		log.Fatalf("Failed to migrate database: %v", err)
	}

	log.Println("Database connected and migrated successfully.")
	DB = database
}
