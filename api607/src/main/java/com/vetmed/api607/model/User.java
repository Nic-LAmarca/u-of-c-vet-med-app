package com.vetmed.api607.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private int userId;
    private String fName;
    private String lName;
    private String email;
    private String activationDate;
    private String userType;
}


