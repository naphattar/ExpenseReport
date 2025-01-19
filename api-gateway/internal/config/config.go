package config

import(
	"log"
	"os"
	"github.com/joho/godotenv"
)

type Config struct {
	Port     string
	JWTSecret string
	EntryServiceURL string
	UserServiceURL string
}

var AppConfig Config

func LoadConfig() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using environment variables only")
	}

	AppConfig = Config{
		Port:     os.Getenv("PORT"),
		JWTSecret: os.Getenv("JWT_SECRET"),
		EntryServiceURL: os.Getenv("ENTRY_SERVICE_URL"),
		UserServiceURL: os.Getenv("USER_SERVICE_URL"),
	}
}