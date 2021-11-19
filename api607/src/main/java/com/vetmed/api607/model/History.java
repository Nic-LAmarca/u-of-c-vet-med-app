package com.vetmed.api607.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class History {
    private Integer id;
    private String history_date;
    private String history_type;
    private String history_value;
    private String user_id;
    private String animal_id;
}
