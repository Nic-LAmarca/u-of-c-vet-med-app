package com.vetmed.api607.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimalStatusImage
{
    private Integer id;
    private Integer status_history;
    private Integer image;
}
