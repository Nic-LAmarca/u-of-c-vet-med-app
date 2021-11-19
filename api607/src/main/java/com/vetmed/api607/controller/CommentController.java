package com.vetmed.api607.controller;

import com.vetmed.api607.dao.CommentDAO;
import com.vetmed.api607.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class CommentController {

    @Autowired
    private CommentDAO commentDAO;

    @GetMapping("/comments/{animal_id}")
    public Comment getCommentsByAnimalId(@PathVariable int animal_id)
    {
        return commentDAO.getCommentsByAnimalId(animal_id);
    }
}
