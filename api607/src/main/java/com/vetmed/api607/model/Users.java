package com.vetmed.api607.model;

import com.vetmed.api607.model.Animal;
import com.vetmed.api607.model.Request;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;

@Data
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String user_name;
    private String user_type;
    private String email;
    private String password;
    private ArrayList<Request> teacherAnimalRequestList = new ArrayList<Request>();

    public ArrayList<Request> getTeacherAnimalRequestList() {
        return teacherAnimalRequestList;
    }

    public static ArrayList<Request> getAdminAnimalRequestApprovalList() {
        return adminAnimalRequestApprovalList;
    }

    public static ArrayList<Request> getTechnicianAnimalRequestApprovalList() {
        return technicianAnimalRequestApprovalList;
    }

    private static ArrayList<Request> adminAnimalRequestApprovalList  = new ArrayList<Request>();
    private static ArrayList<Request> technicianAnimalRequestApprovalList = new ArrayList<Request>();
    private int userCount;

    public Users(int id, String user_name, String user_type, String email, String password)
    {
        this.id = id;
        this.user_name = user_name;
        this.user_type = user_type;
        this.email = email;
        this.password = password;
        if(this.user_type == "teacher")
        {
            this.teacherAnimalRequestList = new ArrayList<Request>();
        }
        this.userCount += 1;
    }

//    public Request getTeacherAnimalRequest(Request animalRequest)
//    {
//        for(int i = 0; i < teacherAnimalRequestList.size(); i++)
//        {
//            if(animalRequest == teacherAnimalRequestList.get(i))
//            {
//                return animalRequest;
//            }
//        }
//        return null;
//    }
//
//    public Request getAdminAnimalRequest(Request animalRequest)
//    {
//        for(int i = 0; i < adminAnimalRequestApprovalList.size(); i++){
//            if(animalRequest == adminAnimalRequestApprovalList.get(i)){
//                return animalRequest;
//            }
//        }
//        return null;
//    }
//
//    public Request getTechnicianAnimalRequest(Request animalRequest)
//    {
//        for(int i = 0; i < technicianAnimalRequestApprovalList.size(); i++)
//        {
//            if(animalRequest == technicianAnimalRequestApprovalList.get(i))
//            {
//                return animalRequest;
//            }
//        }
//        return null;
//    }

//    public String makeRequest(Animal animal)
//    {
//
//        Request request = new Request(this.getId(), animal.getId(), );
//        adminAnimalRequestApprovalList.add(request);
//        teacherAnimalRequestList.add(request);
//        return "Request sent.";
//
//    }
//
//
//    public Request searchNewTeacherRequests(int id)
//    {
//        for (int i = 0; i < teacherAnimalRequestList.size(); i++)
//        {
//            if (id == teacherAnimalRequestList.get(i).getRequestId())
//            {
//                return teacherAnimalRequestList.get(i);
//            }
//        }
//        return null;
//    }
//
//    public Request searchNewAdminRequests(int id)
//    {
//        for(int i = 0; i < adminAnimalRequestApprovalList.size(); i++)
//        {
//            if(id == adminAnimalRequestApprovalList.get(i).getRequestId())
//            {
//                return adminAnimalRequestApprovalList.get(i);
//            }
//        }
//        return null;
//    }
//
//    public void adminApproval(Request request)
//    {
//        request.setAdminApproved(true);
//        request.setNewStatus(false);
//        adminAnimalRequestApprovalList.remove(request);
//        technicianAnimalRequestApprovalList.add(request);
//    }
//
//    public void adminRejection(Request request)
//    {
//        request.setAdminApproved(false);
//        request.setRequestSuccessful(false);
//        request.setNewStatus(false);
//        adminAnimalRequestApprovalList.remove(request);
//    }
//
//    public Request searchNewTechnicianRequests(int id){
//        for(int i = 0; i < technicianAnimalRequestApprovalList.size(); i++)
//        {
//            if(id == teacherAnimalRequestList.get(i).getRequestId()){
//                return technicianAnimalRequestApprovalList.get(i);
//            }
//        }
//        return null;
//    }
//
//    public void technicianAppoval(Request request)
//    {
//        request.setTechnicianApproved(true);
//        request.setRequestSuccessful(true);
//        request.setRequestComplete(true);
//        request.getRequestedAnimal().setAvailable(false);
//        technicianAnimalRequestApprovalList.remove(request);
//    }
//
//    public void technicalRejection(Request request)
//    {
//        request.setTechnicianApproved(false);
//        request.setRequestSuccessful(false);
//        request.setRequestComplete(true);
//        technicianAnimalRequestApprovalList.remove(request);
//    }
//
//    public String cancelRequest(int id)
//    {
//        String message;
//        Request toBeCancelled = searchNewTeacherRequests(id);
//        if (toBeCancelled.isNewStatus()) {
//            teacherAnimalRequestList.remove(toBeCancelled);
//            adminAnimalRequestApprovalList.remove(toBeCancelled);
//            message = " Request Successfully Cancelled!";
//            return message;
//        }
//        else if ((toBeCancelled.isNewStatus() == false) && (toBeCancelled.isAdminApproved() == true) && (toBeCancelled.isRequestComplete() == false))
//        {
//            teacherAnimalRequestList.remove(toBeCancelled);
//            adminAnimalRequestApprovalList.remove(toBeCancelled);
//            message =  " Request Successfully Cancelled!";
//            return message;
//        }
//        message =  "Error. Request may no longer be cancelled.";
//        return  message;
//    }
//        public String getRequestStatus(int id)
//        {
//          String status;
//          Request request = searchNewTeacherRequests(id);
//          if (request.isRequestSuccessful())
//          {
//            status = "Your request for Animal " + request.getRequestedAnimal().getId() + " was accepted!" ;
//            return status;
//          }
//          else if (request.isRequestSuccessful() == false && request.isRequestComplete())
//          {
//              status = "Your request for Animal " + request.getRequestedAnimal().getId() + " was rejected." ;
//              return status;
//          }
//          status = "Request still in progress.";
//          return status;
//        }



}


