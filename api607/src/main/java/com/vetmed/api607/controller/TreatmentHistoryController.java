package com.vetmed.api607.controller;

import com.vetmed.api607.model.TreatmentHistory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import javax.websocket.server.PathParam;
import java.util.ArrayList;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class TreatmentHistoryController {
    private DbController db = new DbController();

    @GetMapping("/animalTreatmentHistory{animalId}")
    public ArrayList<TreatmentHistory> getAnimalTreatmentHistory(@PathParam("animalId") int animalId)
    {
        return db.animalTreatmentHistory(animalId);
    }


    @GetMapping("/technicianTreatmentRequests")
    public ArrayList<TreatmentHistory> getTreatmentRequestList() {
        return db.getAllTreatmentHistories();
    }

    @PostMapping("/technicianTreatmentRequestApproval{userId, requestId}")
    public ArrayList<TreatmentHistory> acceptTreatmentRequest(@PathParam("userId") int userId, @PathParam("requestId") int requestId) {
        return db.acceptTreatmentRequest(userId, requestId);
    }

    @PostMapping("/attendantTreatmentRequest{userId, animalId, treatmentTypeId}")
    public void makeTreatmentRequest(@PathParam("userId") int userId, @PathParam("animalId") int animalId, @PathParam("treatmentTypeId") int treatmentTypeId) {
        db.makeTreatmentRequest(userId, animalId, treatmentTypeId);
    }
}
