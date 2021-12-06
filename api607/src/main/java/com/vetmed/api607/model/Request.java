package com.vetmed.api607.model;
import lombok.Data;

@Data
public class Request
{
    Animal requestedAnimal;
    Users requestee;
    boolean newStatus;
    static  int requestCount = 0;
    int requestId;
    boolean adminApproved;
    boolean technicianApproved;
    boolean requestComplete;
    boolean requestSuccessful;

    public void setAdminApproved(boolean adminApproved) {
        this.adminApproved = adminApproved;
    }

    public void setTechnicianApproved(boolean technicianApproved) {
        this.technicianApproved = technicianApproved;
    }

    public boolean isAdminApproved() {
        return adminApproved;
    }

    public boolean isTechnicianApproved() {
        return technicianApproved;
    }

    public Request(Users user, Animal animal) {
        requestCount++;
        setRequestId(requestCount);
        setRequestee(user);
        setRequestedAnimal(animal);
        setNewStatus(true);
        setRequestComplete(false);
    }
}
