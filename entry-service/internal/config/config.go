package config

import (
    "github.com/spf13/viper"
    "log"
)

type Config struct {
    Port     string `mapstructure:"PORT"`
    DatabaseHost string `mapstructure:"DATABASE_HOST"`
	DatabaseUser string `mapstructure:"DATABASE_USER"`
	DatabasePassword string `mapstructure:"DATABASE_PASSWORD"`
	DatabaseName string `mapstructure:"DATABASE_NAME"`
	DatabasePort string `mapstructure:"DATABASE_PORT"`
}

var AppConfig Config

func LoadConfig() {
    viper.SetConfigFile(".env")
    viper.SetConfigType("env")
    viper.AutomaticEnv()

    if err := viper.ReadInConfig(); err != nil {
        log.Println("No .env file found, using environment variables only")
    }

    if err := viper.Unmarshal(&AppConfig); err != nil {
        log.Fatalf("Failed to load configuration: %v", err)
    }
}
