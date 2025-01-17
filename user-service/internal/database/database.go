package database

import (
	"context"
	"log"
	"time"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"user-service/internal/config"
)

var MongoClient *mongo.Client

func Connect() {
	client, err := mongo.NewClient(options.Client().ApplyURI(config.AppConfig.MongoURI))
	if err != nil {
		log.Fatalf("Failed to create MongoDB client: %v", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		log.Fatalf("Failed to connect to MongoDB: %v", err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("Failed to ping MongoDB: %v", err)
	}

	MongoClient = client
	log.Println("Connected to MongoDB")
}

func GetCollection(collectionName string) *mongo.Collection {
	return MongoClient.Database(config.AppConfig.DBName).Collection(collectionName)
}
