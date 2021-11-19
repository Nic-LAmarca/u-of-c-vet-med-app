package com.vetmed.api607.controller;

import com.vetmed.api607.dao.AnimalDAO;
import com.vetmed.api607.model.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AnimalController
{
    @Autowired
    private AnimalDAO aDAO;

    @GetMapping("/animals")
    public List<Animal> getAnimals()
    {
        return aDAO.getAll();
    }

    @GetMapping("/animals/{id}")
    public Animal getAnimalById(@PathVariable int id)
    {
        return aDAO.getById(id);
    }

    
}
