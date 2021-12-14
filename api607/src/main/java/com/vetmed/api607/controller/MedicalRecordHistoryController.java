package com.vetmed.api607.controller;

import com.vetmed.api607.model.Image;
import com.vetmed.api607.model.MedicalRecordHistory;
import org.springframework.beans.factory.annotation.Autowired;
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
public class MedicalRecordHistoryController {
    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/animalMedicalRecordHistory{animalId}")
    public ArrayList<MedicalRecordHistory> getAnimalMedicalRecordHistory(@PathParam("animalId") int animalId) {
        return db.animalMedicalRecords(animalId);
    }

    @CrossOrigin
    @PostMapping("/addMedicalRecordHistory{medicalRecordId, animalId, date}")
    public void addMedicalRecordHistory(@PathParam("medicalRecordId") int medicalRecordId, @PathParam("animalId") int animalId, @PathParam("date") String date)
    {
        db.addMedicalRecordHistory(medicalRecordId, animalId, date);
    }


}
