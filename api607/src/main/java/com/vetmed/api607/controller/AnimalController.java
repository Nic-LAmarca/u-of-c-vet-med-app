package com.vetmed.api607.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.vetmed.api607.model.Animal;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class AnimalController {
    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/searchForAnimal{animalId}")
    public Animal searchForAnimal(@PathParam("animalId") int animalId) {
        return db.searchForAnimal(animalId);
    }

    @CrossOrigin
    @GetMapping("/animals")
    public ArrayList<Animal> getAllAnimals() {
        return db.getAllAnimals();
    }

    @CrossOrigin
    @GetMapping("/teacherAvailableAnimals")
    public ArrayList<Animal> getTeacherAvailableAnimals() {
        return db.getAllAnimals();
    }

    @CrossOrigin
    @GetMapping("/filteredAnimals{animalName, animalSpecies, animalStatus}")
    public ArrayList<Animal> getFilteredAnimals(@PathParam("animalName") String animalName, @PathParam("animalSpecies") String animalSpecies, @PathParam("animalStatus") String animalStatus)
    {
        return db.getFilteredAnimals(animalName, animalSpecies, animalStatus);
    }

    @CrossOrigin
    @PostMapping("/addAnimal{animalName, species, weight, tattooNum, cityTattoo, dob, breed, sex, rfid, microchip, status, location, purpose, region, subspecies, color, distinguishingFeatures}")
    public void addAnimal(@PathParam("animalName") String animalName, @PathParam("species") String species, @PathParam("weight") double weight, @PathParam("tattooNum") int tattooNum, @PathParam("cityTattoo") String cityTattoo, @PathParam("dob") String dob, @PathParam("breed") String breed, @PathParam("sex") String sex, @PathParam("rfid") long rfid, @PathParam("microchip") long microchip, @PathParam("status") String status, @PathParam("location") String location, @PathParam("purpose") String purpose, @PathParam("region") String region, @PathParam("subspecies") String subspecies, @PathParam("color") String color, @PathParam("distinguishingFeatures") String distinguishingFeatures)
    {
        db.addAnimal(animalName, species, weight, tattooNum, cityTattoo, dob, breed, sex, rfid, microchip, status, location, "", purpose, region, subspecies, color, distinguishingFeatures);
    }

    @CrossOrigin
    @PostMapping("/removeAnimal{rfid}")
    public void removeAnimal(@PathParam("rfid") long rfid)
    {
        db.removeAnimal(rfid);
    }
}
