package config

import (
	"log"
	"os"
	"github.com/joho/godotenv"
)

type Config struct {
	Port     string
	MongoURI string
	JWTSecret string
	DBName   string
}

var AppConfig Config

func LoadConfig() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using environment variables only")
	}

	AppConfig = Config{
		Port:     os.Getenv("PORT"),
		MongoURI: os.Getenv("MONGO_URI"),
		JWTSecret: os.Getenv("JWT_SECRET"),
		DBName:   os.Getenv("DB_NAME"),
	}
}
