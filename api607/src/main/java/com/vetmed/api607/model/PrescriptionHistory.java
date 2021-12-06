package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrescriptionHistory {
    private int prescriptionId;
    private int userId;
    private int animalId;
    private String date;
    private String drugName;
    private String instructions;
    private double dosage;
    private String deliveryMethod;
}
