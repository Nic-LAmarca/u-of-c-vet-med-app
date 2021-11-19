package com.vetmed.api607.controller;

import com.vetmed.api607.dao.UserDAO;
import com.vetmed.api607.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class UserController {
    @Autowired
    private UserDAO uDAO;

    @GetMapping("/users")
    public List<Users> getUsers()
    {
        return uDAO.getAll();
    }

    @GetMapping("/users/{id}")
    public Users getUserById(@PathVariable int id)
    {
        return uDAO.getById(id);
    }

    @PostMapping("/users")
    public String addUser(@RequestBody Users user)
    {
        return uDAO.add(user) + " number of rows added to the users table.";
    }
}
