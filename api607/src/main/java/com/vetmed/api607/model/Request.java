package com.vetmed.api607.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Request {
    private int requestId;
    private int animalId;
    private int userId;
    private boolean newStatus;
    private boolean adminApproved;
    private boolean technicianApproved;
    private boolean requestComplete;
    private boolean requestSuccessful;

}
