package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment
{
    private Integer id;
    private Integer user_id;
    private Integer animal_id;
    private String description;
}
