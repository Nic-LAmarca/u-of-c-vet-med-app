package com.vetmed.api607.controller;

import com.vetmed.api607.model.Image;
import com.vetmed.api607.model.PrescriptionHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.time.LocalDate;
import java.util.ArrayList;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class PrescriptionHistoryController {
    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/animalPrescriptions{animalId}")
    public ArrayList<PrescriptionHistory> getAnimalPrescriptions(@PathParam("animalId") int animalId) {
        return db.animalPrescriptionHistory(animalId);
    }

    @CrossOrigin
    @PostMapping("/addPrescription{userId, animalId, date, drugName, instructions, dosage, delivery method")
    public void addPrescriptionHistory(@PathParam("userId") int userId, @PathParam("animalId") int animalId, @PathParam("date") String date, @PathParam("drugName") String drugName, @PathParam("instructions") String instructions, @PathParam("dosage") double dosage, @PathParam("deliveryMethod") String deliveryMethod )
    {
        db.addPrescriptionHistory(userId, animalId, date, drugName, instructions, dosage, deliveryMethod);
    }

    @CrossOrigin
    @PostMapping("/addPrescription{userId, animalId, drugName, instructions, dosage, deliveryMethod}")
    public void getAnimal(@PathParam("userId") int userId, @PathParam("animalId") int animalId, @PathParam("drugName") String drugName, @PathParam("instructions") String instructions, @PathParam("dosage") double dosage, @PathParam("deliveryMethod") String deliveryMethod) {
        String date = LocalDate.now().toString();
        db.addPrescriptionHistory(userId, animalId, date, drugName, instructions, dosage, deliveryMethod);
    }

}
