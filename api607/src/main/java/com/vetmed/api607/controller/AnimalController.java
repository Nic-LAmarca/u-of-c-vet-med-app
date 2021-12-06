package com.vetmed.api607.controller;

import com.vetmed.api607.model.Request;
import com.vetmed.api607.model.Users;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.vetmed.api607.model.Animal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class AnimalController
{
    private DbController db = new DbController();

    @CrossOrigin
    @GetMapping("/teacherAvailableAnimals")
    public ArrayList<Integer> getAvailableAnimals()
    {
        ArrayList<Integer> availableAnimals = new ArrayList<Integer>();
        for(int i = 0; i < db.getAvailableAnimalList().size(); i++){
            if(db.getAvailableAnimalList().get(i).isAvailable()){
                availableAnimals.add(db.getAvailableAnimalList().get(i).getId());
            }
        }
        return availableAnimals;
    }

    @GetMapping("/animals/{id}")
    public Animal getAnimalById(@PathVariable int id)
    {
        return db.searchAnimals(id);
    }
}
