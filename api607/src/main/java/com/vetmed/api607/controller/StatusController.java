package com.vetmed.api607.controller;

import com.vetmed.api607.model.History;
import com.vetmed.api607.model.Status;
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
public class StatusController {

    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/animalStatus{animalId}")
    public ArrayList<Status> getAnimalStatuses(@PathParam("animalId") int animalId) {
        return db.animalStatuses(animalId);
    }

    @CrossOrigin
    @PostMapping("/addStatus{animalId, date, description, location, statusType, imageId}")
    public void addHistory(@PathParam("animalId") int animalId, @PathParam("date") String date, @PathParam("description") String description, @PathParam("location") String location, @PathParam("statusType") String statusType,  @PathParam("imageId") int imageId )
    {
        db.addStatus(animalId, date, description, location, statusType, imageId);
    }

}
