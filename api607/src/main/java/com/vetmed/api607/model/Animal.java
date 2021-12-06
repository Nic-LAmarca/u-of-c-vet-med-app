package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Animal
{
    private Integer id;
    private String animalName;
    private String species;
    private Double weight;
    private Integer tattooNum;
    private String cityTattoo;
    private Date birthDate;
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

    //TODO figure out what to keep here and use for database
//    private Integer id;
//    private String animal_type;
//    private String name;
//    private boolean available;
//
//    public Animal(int id, String type, String name)
//    {
//        setAnimal_type(type);
//        setId(id);
//        setName(name);
//        setAvailable(true);
//    }
//
}
