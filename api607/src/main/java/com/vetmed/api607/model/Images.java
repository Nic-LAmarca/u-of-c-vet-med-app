package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Images {
    private Integer id;
    private String user_name;
    private String user_type;
    private String email;
    private String activation_date;
}
