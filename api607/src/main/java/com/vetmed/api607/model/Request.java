package com.vetmed.api607.model;
import lombok.Data;

@Data
public class Request
{
    int requestId;
    int  animalId;
    int  userId;
    boolean newStatus;
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

    public Request(int userId, int animalId, int requestId) {

        setRequestId(requestId);
        setUserId(userId);
        setAnimalId(animal);
        setNewStatus(true);
        setAdminApproved(false);
        setTechnicianApproved(false);
        setRequestComplete(false);
        setRequestSuccessful(false);

    }
}
