package models

type Entry struct {
	ID          uint    `json:"id" gorm:"primaryKey"`
	Type        string  `json:"type"`
	Amount      float64 `json:"amount"`
	Description string  `json:"description"`
	UserID      string  `json:"userId"`
}
