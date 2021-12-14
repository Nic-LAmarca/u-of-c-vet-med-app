package com.vetmed.api607.controller;

import com.vetmed.api607.model.Comment;
import com.vetmed.api607.model.Request;
import com.vetmed.api607.model.TreatmentHistory;
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
public class RequestController {
    private DbController db = new DbController();

    @CrossOrigin
    @PostMapping("/animalRequest{animalId}")
    public ArrayList<Request> getAnimalRequests(@PathParam("animalId") int animalId) {
        return db.animalRequests(animalId);
    }

    @CrossOrigin
    @PostMapping("/teacherTeachingRequest{animalId, userId, date}")
    public void addTeachingRequest(@PathParam("animalId") int animalId, @PathParam("userId") int userId, @PathParam("date") String date)
    {
        db.addRequest(animalId, userId, date);
    }

    @CrossOrigin
    @GetMapping("/technicianTeachingRequests")
    public ArrayList<Request> technicianTeachingRequest()
    {
        return db.getAllTechnicianRequests();
    }

    @CrossOrigin
    @GetMapping("/adminTeachingRequests")
    public ArrayList<Request> adminTeachingRequest()
    {
        return db.getAllAdminRequests();
    }

    @PostMapping("/technicianTeachingRequestDecision{requestId, decision}")
    public ArrayList<Request> technicianApproveTreatmentRequest(@PathParam("requestId") int requestId, @PathParam("decision") boolean decision) {
        return db.technicianUpdateTeachingRequest(requestId, decision);
    }

    @PostMapping("/adminTeachingRequestDecision{requestId, decision}")
    public ArrayList<Request> adminApproveTreatmentRequest(@PathParam("requestId") int requestId, @PathParam("decision") boolean decision) {
        return db.adminUpdateTeachingRequest(requestId, decision);
    }

}
