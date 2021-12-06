package com.vetmed.api607.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.vetmed.api607.model.*;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class UserController {

    private DbController db = new DbController();

    @GetMapping("/user/{id}")
    public User searchForUser(@PathVariable int id)
    {
        return db.searchForUser(id);
    }

    @GetMapping("/users")
    public ArrayList<User> getAllUsers()
    {
        return db.getAllUsers();
    }
}
