package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicalRecordHistory {
    private int medicalRecordHistoryId;
    private int medicalRecordId;
    private int animalId;
    private String date;
}
