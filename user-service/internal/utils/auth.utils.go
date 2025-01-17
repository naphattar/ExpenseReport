package utils

import (
	"time"
	"errors"
	"github.com/dgrijalva/jwt-go"
	"user-service/internal/config"
)

type Claims struct {
	Username string `json:"username"`
	UserId string `json:"userid"`
	jwt.StandardClaims
}

func GenerateToken(username string , userId string) (string, error) {
	claims := Claims{
		Username: username,
		UserId: userId,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(24 * time.Hour).Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte(config.AppConfig.JWTSecret))
}

func ValidateToken(token string) (*Claims, error) {
	parsedToken, err := jwt.ParseWithClaims(token, &Claims{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(config.AppConfig.JWTSecret), nil
	})

	if err != nil {
		return nil, err
	}

	claims, ok := parsedToken.Claims.(*Claims)
	if !ok || !parsedToken.Valid {
		return nil, errors.New("invalid token")
	}

	return claims, nil
}
