package com.vetmed.api607.controller;

import com.vetmed.api607.dao.UserDAO;
import com.vetmed.api607.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class UserController {
    @Autowired
    private UserDAO uDAO;

    @GetMapping("/user")
    public List<Users> getAnimals()
    {
        return uDAO.getAll();
    }
}
