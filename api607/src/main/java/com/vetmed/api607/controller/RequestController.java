package com.vetmed.api607.controller;

import com.vetmed.api607.model.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class RequestController {
    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/teacherTeachingRequest{animalId, userId, date}")
    public void addTeachingRequest(@PathParam("animalId") int animalId, @PathParam("userId") int userId, @PathParam("date") String date)
    {
        db.addRequest(animalId, userId, date);
    }

}
