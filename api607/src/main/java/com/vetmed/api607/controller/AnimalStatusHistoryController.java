package com.vetmed.api607.controller;

import com.vetmed.api607.dao.AnimalStatusHistoryDAO;
import com.vetmed.api607.model.AnimalStatusHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController

public class AnimalStatusHistoryController {

    @Autowired
    private AnimalStatusHistoryDAO animalStatusHistoryDAO;

    @GetMapping("/animal/status/history/{animal_id}")
    public AnimalStatusHistory getAnimalStatusHistory(@PathVariable int animal_id)
    {
        return animalStatusHistoryDAO.getAnimalStatusHistory(animal_id);
    }

}