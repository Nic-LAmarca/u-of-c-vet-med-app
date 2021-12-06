package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class History {
    private int historyId;
    private String date;
    private int animalId;
    private String measurement;
    private double value;
    private int userId;
}
