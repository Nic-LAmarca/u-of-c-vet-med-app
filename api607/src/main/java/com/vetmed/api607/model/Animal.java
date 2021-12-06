package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Animal {
    private int animalId;
    private String animalName;
    private String species;
    private Double weight;
    private int tattooNum;
    private String cityTattoo;
    private String birthDate;
    private String breed;
    private String sex;
    private Long rfid;
    private Long microchip;
    private String statusType;
    private boolean available;
    private String purpose;
    private String region;
    private String subspecies;
    private String color;
    private String distinguishingFeatures;
}


