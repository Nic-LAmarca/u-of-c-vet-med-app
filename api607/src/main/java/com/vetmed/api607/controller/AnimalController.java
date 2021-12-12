package com.vetmed.api607.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.vetmed.api607.model.Animal;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class AnimalController
{
    private DbController db = new DbController();

    @GetMapping("/animal/{id}")
    public Animal searchForAnimal(@PathVariable int id)
    {
        return db.searchForAnimal(id);
    }

    @GetMapping("/animals")
    public ArrayList<Animal> getAllAnimals()
    {
        return db.getAllAnimals();
    }

    @GetMapping("/animals{animalName, animalSpecies, animalBreed, animalStatus")
    public ArrayList<Animal> getAllAnimals()
    {
        return db.getAllAnimals();
    }
}
