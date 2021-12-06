package com.vetmed.api607.controller;

import com.vetmed.api607.model.Animal;
import com.vetmed.api607.model.Request;
import com.vetmed.api607.model.Users;

import java.util.ArrayList;

public class DbController {

    private ArrayList<Users> userList;
    private ArrayList<Animal> animalList;
    private ArrayList<Request> requestList;

    public DbController(){
        this.userList = new ArrayList<Users>();
        this.animalList = new ArrayList<Animal>();
        this.requestList = new ArrayList<Request>();
//        loadUsers();
//        loadAnimals();
//        loadRequests();
    }

    public Users searchUsers(int id){
        for(int i = 0; i < userList.size(); i++){
            if(id == userList.get(i).getId()){
                return userList.get(i);
            }
        }
        return null;
    }

    public Users verifyLogin(String username, String password){
        for(int i = 0; i < userList.size(); i++){
            if(username.equals(userList.get(i).getUser_name()) && password.equals(userList.get(i).getPassword())){
                return userList.get(i);
            }
        }
        return null;
    }

    public ArrayList<Users> getUserList(){
        return this.userList;
    }

    public boolean verifyUser(String email, String password){
        boolean verified = false;
        for(int i = 0; i < userList.size(); i++){
            if(email == userList.get(i).getEmail() && password == userList.get(i).getPassword());
                verified = true;
        }
        return verified;
    }

    public Animal searchAnimals(int id){
        for(int i = 0; i < animalList.size(); i++){
            if(id == animalList.get(i).getId()){
                return animalList.get(i);
            }
        }
        return null;
    }

    public void removeTeacherRequest(int id){
        for(int i = 0; i < requestList.size(); i++){
            if(id == requestList.get(i).getRequestId() && !requestList.get(i).isAdminApproved() || !requestList.get(i).isTechnicianApproved()){
                requestList.remove(requestList.get(i));
            }
        }
    }

    public Request searchTeacherRequests(int id){
        for(int i = 0; i < requestList.size(); i++){
            if(id == requestList.get(i).getRequestId() && !requestList.get(i).isAdminApproved() && !requestList.get(i).isTechnicianApproved()){
                return requestList.get(i);
            }
        }
        return null;
    }

    public ArrayList<Request> getTeacherRequestList(){
        ArrayList<Request> teacherRequests = new ArrayList<Request>();
        for(int i = 0; i < requestList.size(); i++){
            if(!requestList.get(i).isTechnicianApproved()){
                teacherRequests.add(requestList.get(i));
            }
        }
        return requestList;
    }

    public ArrayList<Request> getAdminRequestList(){
        ArrayList<Request> adminRequests = new ArrayList<Request>();
        for(int i = 0; i < requestList.size(); i++){
            if(!requestList.get(i).isTechnicianApproved()){
                adminRequests.add(requestList.get(i));
            }
        }
        return requestList;
    }

    public Request searchNewAdminRequests(int id){
        for(int i = 0; i < requestList.size(); i++){
            if(id == requestList.get(i).getRequestId() && !requestList.get(i).isTechnicianApproved()){
                return requestList.get(i);
            }
        }
        return null;
    }

    public void approveNewAdminRequests(int id){
        for(int i = 0; i < requestList.size(); i++){
            if(id == requestList.get(i).getRequestId() && !requestList.get(i).isAdminApproved() && !requestList.get(i).isTechnicianApproved()){
                requestList.get(i).setAdminApproved(true);
            }
        }
    }

    public void denyNewAdminRequests(int id){
        for(int i = 0; i < requestList.size(); i++){
            if(id == requestList.get(i).getRequestId() && !requestList.get(i).isAdminApproved() && !requestList.get(i).isTechnicianApproved()){
                requestList.remove(i);
            }
        }
    }

    public ArrayList<Request> getTechnicianRequestList(){
        ArrayList<Request> technicianRequests = new ArrayList<Request>();
        for(int i = 0; i < requestList.size(); i++){
            if(requestList.get(i).isAdminApproved() && !requestList.get(i).isTechnicianApproved()){
                technicianRequests.add(requestList.get(i));
            }
        }
        return requestList;
    }

    public Request searchNewTechnicianRequests(int id){
        for(int i = 0; i < requestList.size(); i++){
            if(id == requestList.get(i).getRequestId() && !requestList.get(i).isTechnicianApproved()){
                return requestList.get(i);
            }
        }
        return null;
    }

    public void approveNewTechnicianRequests(int id){
        for(int i = 0; i < requestList.size(); i++){
            if(id == requestList.get(i).getRequestId() && requestList.get(i).isAdminApproved() && !requestList.get(i).isTechnicianApproved()){
                requestList.get(i).setTechnicianApproved(true);
            }
        }
    }

    public void denyNewTechnicianRequests(int id){
        for(int i = 0; i < requestList.size(); i++){
            if(id == requestList.get(i).getRequestId() && requestList.get(i).isAdminApproved() && !requestList.get(i).isTechnicianApproved()){
                requestList.remove(i);
            }
        }
    }
//
//    public ArrayList<Animal> getAvailableAnimalList(){
//        ArrayList<Animal> availableAnimals = new ArrayList<Animal>();
//        for(int i = 0; i < animalList.size(); i++){
//            if(animalList.get(i).isAvailable()){
//                availableAnimals.add(animalList.get(i));
//            }
//        }
//        return availableAnimals;
//    }

    public ArrayList<Animal> getAnimalList(){
        return this.animalList;
    }

//    public void loadRequests(){
//        // Teacher requests
//        Request request1 = new Request(userList.get(0), animalList.get(1));
//        Request request2 = new Request(userList.get(1), animalList.get(2));
//        Request request3 = new Request(userList.get(2), animalList.get(3));
//
//        // Teacher requests approved by Admin
//        Request request4 = new Request(userList.get(0), animalList.get(4));
//        Request request5 = new Request(userList.get(1), animalList.get(5));
//        Request request6 = new Request(userList.get(2), animalList.get(6));
//
//        // Teacher requests approved by Technician
//        Request request7 = new Request(userList.get(0), animalList.get(7));
//        Request request8 = new Request(userList.get(1), animalList.get(8));
//        Request request9 = new Request(userList.get(2), animalList.get(9));
//        request7.setAdminApproved(true);
//        request8.setAdminApproved(true);
//        request9.setAdminApproved(true);
////
//        // Add to dummy data of requests
//        requestList.add(request1);
//        requestList.add(request2);
//        requestList.add(request3);
//        requestList.add(request4);
//        requestList.add(request5);
//        requestList.add(request6);
//        requestList.add(request7);
//        requestList.add(request8);
//        requestList.add(request9);
//    }
//
//    public void loadUsers(){
//        userList.add(new Users(1, "Instructor_1", "teacher", "user1@ucalgary.ca", "pt@123"));
//        userList.add(new Users(2, "Admin_1", "admin", "user2@ucalgary.ca", "pa"));
//        userList.add(new Users(3, "Technician", "technician", "user3@ucalgary.ca", "pe"));
//    }
//
//    public void loadAnimals(){
//        animalList.add(new Animal(1, "dog", "Spark"));
//        animalList.add(new Animal(2, "dog", "Jim"));
//        animalList.add(new Animal(3, "dog", "Charlie"));
//        animalList.add(new Animal(4, "dog", "Junior"));
//        animalList.add(new Animal(5, "dog", "Calvin"));
//        animalList.add(new Animal(6, "dog", "David"));
//        animalList.add(new Animal(7, "dog", "Nic"));
//        animalList.add(new Animal(8, "dog", "Woofy"));
//        animalList.add(new Animal(9, "cat", "Lola"));
//        animalList.add(new Animal(10, "cat", "Spazz"));
//        animalList.add(new Animal(11, "cat", "Kitty"));
//        animalList.add(new Animal(12, "cat", "Mittens"));
//        animalList.add(new Animal(13, "cat", "cat5"));
//        animalList.add(new Animal(14, "cat", "cat6"));
//        animalList.add(new Animal(15, "cat", "cat7"));
//        animalList.add(new Animal(16, "cat", "cat8"));
//        animalList.add(new Animal(17, "horse", "horse1"));
//        animalList.add(new Animal(18, "horse", "horse2"));
//        animalList.add(new Animal(19, "horse", "horse3"));
//        animalList.add(new Animal(20, "horse", "horse4"));
//        animalList.add(new Animal(21, "horse", "horse5"));
//        animalList.add(new Animal(22, "horse", "horse6"));
//        animalList.add(new Animal(23, "horse", "horse7"));
//        animalList.add(new Animal(24, "horse", "horse8"));
//    }
}
