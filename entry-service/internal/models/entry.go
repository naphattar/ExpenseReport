package models

import (
	"gorm.io/gorm"
	"errors"
)
	

type Entry struct {
	gorm.Model
	Type        string  `json:"type" gorm:"type:varchar(20);not null"`
	Amount      float64 `json:"amount" gorm:"not null"`
	Description string  `json:"description" gorm:"type:text"`
	UserID      string  `json:"userId" gorm:"type:varchar(100);not null"`
}

func (e *Entry) Validate() error {
	if e.Type != "Income" && e.Type != "Expense" {
		return errors.New("type must be 'Income' or 'Expense'")
	}
	return nil
}
