package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Image {
    private int imageId;
    private int userId;
    private String creationDate;
    private String file;
    private int animalId;
    private String type;

}
