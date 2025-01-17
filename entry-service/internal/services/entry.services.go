package services

import (
	"gorm.io/gorm"
	"errors"
	"entry-service/internal/database"
	"entry-service/internal/models"
)

func CreateEntry(entry *models.Entry) (*models.Entry, error) {
	result := database.DB.Create(entry)
	if result.Error != nil {
		return nil, result.Error
	}
	return entry, nil
}

func GetEntry(id uint) (*models.Entry, error) {
	var entry models.Entry
	result := database.DB.First(&entry, id)
	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, errors.New("entry not found")
		}
		return nil, result.Error
	}
	return &entry, nil
}

func GetAllEntries(userId, entryType string) ([]models.Entry, error) {
    var entries []models.Entry

    query := map[string]interface{}{}
    if userId != "" {
        query["user_id"] = userId
    }
    if entryType != "" {
        query["type"] = entryType
    }

    result := database.DB.Where(query).Find(&entries)
    if result.Error != nil {
        return nil, result.Error
    }

    return entries, nil
}
func UpdateEntry(id uint, updatedEntry *models.Entry) (*models.Entry, error) {
	var entry models.Entry
	result := database.DB.First(&entry, id)
	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, errors.New("entry not found")
		}
		return nil, result.Error
	}

	result = database.DB.Model(&entry).Updates(updatedEntry)
	if result.Error != nil {
		return nil, result.Error
	}
	return &entry, nil
}

func DeleteEntry(id uint) error {
	result := database.DB.Delete(&models.Entry{}, id)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
