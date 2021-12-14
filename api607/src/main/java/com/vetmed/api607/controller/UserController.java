package com.vetmed.api607.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.vetmed.api607.model.*;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.time.LocalDate;
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
        String userValues = u.getUserId() + "-" + u.getUserType() + "-" + u.getFName() + " " + u.getLName();
        return userValues;
    }

    @CrossOrigin
    @PostMapping("/personalSettings{userId, fName, lName, email, password}")
    public void personalSettings(@PathParam("userId") int userId, @PathParam("fName") String fName, @PathParam("lName") String lName, @PathParam("email") String email, @PathParam("password") String password){
        db.updatePersonalSettings(userId, fName, lName, email, password);
    }

    @CrossOrigin
    @PostMapping("/addUser{fName, lName, email, userType, password}")
    public void addUser(@PathParam("fName") String fName, @PathParam("lName") String lName,  @PathParam("email") String email, @PathParam("userType") String userType,@PathParam("password") String password) {
        String date = LocalDate.now().toString();
        db.addUser(fName, lName, email, date, userType, password);
    }

    @CrossOrigin
    @PostMapping("/blockUser{email, password}")
    public void blockUser(@PathParam("email") String email, @PathParam("password") String password) {
        db.blockUser(email, password);
    }

    @CrossOrigin
    @PostMapping("/removeUser{Email, password}")
    public void removeUser(@PathParam("email") String email, @PathParam("password") String password) {
        db.removeUser(email, password);
    }
}
