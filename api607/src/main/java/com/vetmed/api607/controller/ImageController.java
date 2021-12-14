package com.vetmed.api607.controller;

import com.vetmed.api607.model.Animal;
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
public class ImageController {
    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/animalImages{animalId}")
    public ArrayList<Image> getAnimalImages(@PathParam("animalId") int animalId) {
        return db.searchForAnimalImages(animalId);
    }

    @CrossOrigin
    @PostMapping("/addImage{userId, creationDate, file, animalId}")
    public void addImage(@PathParam("userId") int userId, @PathParam("creationDate") String creationDate, @PathParam("file") String file, @PathParam("animalId") int animalId, @PathParam("type") String type)
    {
        db.addImage(userId, creationDate, file, animalId);
    }
}
