package com.vetmed.api607.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.vetmed.api607.model.Animal;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class AnimalController
{
    private DbController db = new DbController();

    @PostMapping("/searchForAnimal{animalId}")
    public Animal searchForAnimal(@PathParam("animalId") int animalId)
    {
        return db.searchForAnimal(animalId);
    }

    @GetMapping("/animals")
    public ArrayList<Animal> getAllAnimals()
    {
        return db.getAllAnimals();
    }

    @GetMapping("/filteredAnimals{animalName, animalSpecies, animalStatus}")
    public ArrayList<Animal> getFilteredAnimals(@PathParam("animalName") String animalName, @PathParam("animalSpecies") String animalSpecies,
                                                @PathParam("animalStatus") String animalStatus)
    {
        return db.getFilteredAnimals(animalName, animalSpecies, animalStatus);
    }

//    @GetMapping("/filteredAnimals{animalName, animalSpecies, animalBreed, animalStatus}")
//    public ArrayList<Animal> getFilteredAnimals(@PathParam("animalName") String animalName, @PathParam("animalSpecies") String animalSpecies,
//                                                @PathParam("animalBreed") String animalBreed, @PathParam("animalStatus") String animalStatus)
//    {
//        return db.getFilteredAnimals(animalName, animalSpecies, animalBreed, animalStatus);
//    }
}
