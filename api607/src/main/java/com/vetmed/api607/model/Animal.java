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
    private String animal_type;
    private Double weight;
    private Integer tattoo;
    private String city_tattoo;
    private Date bod;
    private String bread;
    private String sex;
    private Long rfid;
    private Long microchip;
    private String animal_status;
    private String draught;
    private String meat;
    private String region;
    private String subspecies;
    private String distinguishing;
    private String features;
    private String color;

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
