package com.vetmed.api607.controller;

import com.vetmed.api607.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.time.LocalDate;
import java.util.ArrayList;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class CommentController {
    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/comments{animalId}")
    public ArrayList<Comment> getAnimalComments(@PathParam("animalId") int animalId) {
        return db.animalComments(animalId);
    }

    @CrossOrigin
    @PostMapping("/addComment{userId, animalId, description}")
    public void getAnimalComments(@PathParam("userId") int userId, @PathParam("animalId") int animalId, @PathParam("description") String description) {
        String date = LocalDate.now().toString();
        db.addComment(userId, animalId, description, date);
    }
}
