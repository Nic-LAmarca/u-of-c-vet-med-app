package com.vetmed.api607.controller;

import com.vetmed.api607.dao.AnimalStatusImageDAO;
import com.vetmed.api607.model.AnimalStatusImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AnimalStatusImageController
{

    @Autowired
    private AnimalStatusImageDAO animalStatusImageDAO;

    @GetMapping("/animal/status/images/{id}")
    public AnimalStatusImage getByStatusHistoryId(@PathVariable int status_history)
    {
        return animalStatusImageDAO.getByStatusHistoryId(status_history);
    }
}
