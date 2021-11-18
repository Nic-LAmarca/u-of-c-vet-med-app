package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Animal
{
    private Integer id;
    private String type;
    private Double weight;
    private Integer tattoo;
    private String city_tattoo;
    private String dob;
    private String breed;
    private String sex;
    private Long rfid;
    private Long microchip;
    private String status;
    private String draught;
    private String meat;
    private String region;
    private String subspecies;
    private String distinguishing_features;
    private String color;

}
