package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TreatmentHistory {
    private int treatmentHistoryId;
    private int treatmentId;
    private int animalId;
    private String date;
    private int requestedBy;
    private int acceptedBy;
}
