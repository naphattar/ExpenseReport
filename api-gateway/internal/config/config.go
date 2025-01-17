package config

import(
	"log"
	"os"
	"github.com/joho/godotenv"
)

type Config struct {
	Port     string
	ENTRY_SERVICE_URL string
	USER_SERVICE_URL string
}

func LoadConfig() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using environment variables only")
	}

	AppConfig = Config{
		Port:     os.Getenv("PORT"),
		ENTRY_SERVICE_URL: os.Getenv("ENTRY_SERVICE_URL"),
		USER_SERVICE_URL: os.Getenv("USER_SERVICE_URL"),
	}
}