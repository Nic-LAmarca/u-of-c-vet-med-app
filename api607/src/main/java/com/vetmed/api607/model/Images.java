package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Images {
    private Integer id;
    private String user_id;
    private String createdate;
    private String address;
    private String animal_id;
    private String image_type;

}
