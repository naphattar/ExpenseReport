package database

import (
	"fmt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"entry-service/internal/config"
)

var DB *gorm.DB

func Connect() {

	config.LoadConfig()

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		config.AppConfig.DatabaseHost,
		config.AppConfig.DatabaseUser,
		config.AppConfig.DatabasePassword,
		config.AppConfig.DatabaseName,
		config.AppConfig.DatabasePort,
	)

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(fmt.Sprintf("Failed to connect to database: %v", err))
	}
	DB = database
}
