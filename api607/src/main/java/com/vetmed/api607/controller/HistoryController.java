package com.vetmed.api607.controller;

import com.vetmed.api607.model.History;
import com.vetmed.api607.model.Image;
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
public class HistoryController {

    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/animalHistory{animalId}")
    public ArrayList<History> getAnimalHistory(@PathParam("animalId") int animalId) {
        return db.animalHistory(animalId);
    }

    @CrossOrigin
    @PostMapping("/addHistory{date, animalId, measurement, results, userId}")
    public void addHistory(@PathParam("date") String date,  @PathParam("animalId") int animalId, @PathParam("measurement") String measurement, @PathParam("results") double results, @PathParam("userId") int userId )
    {
        db.addHistory(date, animalId, measurement, results, userId);
    }





}
