package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Status {
    private int statusId;
    private int animalId;
    private String date;
    private String description;
    private String location;
    private String statusType;
    private int imageId;
}
