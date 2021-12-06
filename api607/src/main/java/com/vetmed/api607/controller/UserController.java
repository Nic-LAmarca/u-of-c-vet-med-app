package com.vetmed.api607.controller;

import com.vetmed.api607.model.LoginData;
import com.vetmed.api607.model.TeacherRequestData;
import com.vetmed.api607.model.Users;

import com.vetmed.api607.model.TeacherRequestData;
//import com.vetmed.api607.service.UsersService;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.lang.reflect.Array;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class UserController {

    private DbController db = new DbController();

    @GetMapping()
    public ArrayList<Users> getUsers()
    {
        return db.getUserList();
    }


    @CrossOrigin
    @PostMapping("/login")
    public String userLogin(@RequestBody LoginData loginData) {
        if (db.verifyLogin(loginData.getUsername(), loginData.getPassword()) != null) {
            return db.verifyLogin(loginData.getUsername(), loginData.getPassword()).getUser_type();
        } else {
            return "";
        }
    }

    @CrossOrigin
    @GetMapping("/teacherAvailableRequests")
    public ArrayList<Integer> teacherRequestList() {
        ArrayList<Integer> requestList = new ArrayList<Integer>();
        for(int i = 0; i < db.getTeacherRequestList().size(); i++){
            requestList.add(db.getTeacherRequestList().get(i).getRequestId());
        }
        return requestList;
    }

    @CrossOrigin
    @PostMapping("/teacherRequest{requestAnimalId}")
    public String teacherRequest(@PathParam("requestAnimalId") int requestAnimalId) {
        if(db.searchAnimals(requestAnimalId) != null){
            Users u = new Users(0, "test", "test", "test", "test");
            u.makeRequest(db.searchAnimals(requestAnimalId));
            return db.searchAnimals(requestAnimalId).getName() + " has been requested.";
        }
        return "";
    }

    @CrossOrigin
    @PostMapping("/teacherCancellation{cancelRequestId}")
    public String teacherCancellation(@PathParam("cancelRequestId") int cancelRequestId) {
        if(db.searchTeacherRequests(cancelRequestId) != null){
            db.removeTeacherRequest(cancelRequestId);
            return "Request " + cancelRequestId + " has been cancelled.";
        }
        return "";
    }

    @CrossOrigin
    @GetMapping("/adminNewRequests")
    public ArrayList<Integer> adminRequestList() {
        ArrayList<Integer> requestList = new ArrayList<Integer>();
        for(int i = 0; i < db.getAdminRequestList().size(); i++){
            requestList.add(db.getAdminRequestList().get(i).getRequestId());
       }
        return requestList;
    }

    @CrossOrigin
    @PostMapping("/adminRequestApproval{requestId}")
    public String adminRequestApproval(@PathParam("requestId") int requestId) {
        if(db.searchNewAdminRequests(requestId) != null){
            db.approveNewAdminRequests(requestId);
            return "Request " + requestId + " has been approved by the admin.";
        }
        return "";
    }

    @CrossOrigin
    @PostMapping("/adminRequestDenial{requestId}")
    public String adminRequestDenial(@PathParam("requestId") int requestId) {
        if(db.searchNewAdminRequests(requestId) != null){
            db.denyNewAdminRequests(requestId);
            return "Request " + requestId + " has been denied by the admin.";
        }
        return "";
    }

    @CrossOrigin
    @GetMapping("/technicianNewRequests")
    public ArrayList<Integer> technicianNewRequests() {
        ArrayList<Integer> requestList = new ArrayList<Integer>();
        for(int i = 0; i < db.getTechnicianRequestList().size(); i++){
            requestList.add(db.getTechnicianRequestList().get(i).getRequestId());
        }
        return requestList;
    }

    @CrossOrigin
    @PostMapping("/technicianRequestApproval{requestId}")
    public String technicianRequestApproval(@PathParam("requestId") int requestId) {
        if(db.searchNewTechnicianRequests(requestId) != null){
            db.approveNewTechnicianRequests(requestId);
            return "Request " + requestId + " has been approved by the technician.";
        }
        return "";
    }

    @CrossOrigin
    @PostMapping("/technicianRequestDenial{id}")
    public String technicianRequestDenial(@PathParam("requestId") int requestId) {
        if(db.searchNewAdminRequests(requestId) != null){
            db.denyNewTechnicianRequests(requestId);
            return "Request " + requestId + " has been denied by the technician.";
        }
        return "";
    }
}
