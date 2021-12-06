package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TreatmentMethod {
    private int treatmentId;
    private String treatmentType;
}
