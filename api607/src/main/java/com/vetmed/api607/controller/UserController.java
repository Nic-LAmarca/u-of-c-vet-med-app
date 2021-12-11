package com.vetmed.api607.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.vetmed.api607.model.*;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class UserController {

    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/login{email, password}")
    public String login(@PathParam("email") String email, @PathParam("password") String password){
        User u = db.searchUserByEmailAndPassword(email, password);
        return u.getUserType();
    }
}
