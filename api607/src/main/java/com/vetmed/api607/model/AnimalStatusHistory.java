package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class AnimalStatusHistory
{
    private Integer id;
    private String date_time;
    private String status_description;
    private String location;
    private String animal_status;
    private Integer animal_id;
}
