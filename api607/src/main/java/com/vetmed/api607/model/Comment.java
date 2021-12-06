package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment
{
    private Integer commentId;
    private Integer userId;
    private Integer animalId;
    private String description;
    private String date;
}
