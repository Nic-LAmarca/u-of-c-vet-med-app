package com.vetmed.api607.controller;

import com.vetmed.api607.model.Comment;
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
public class TreatmentHistoryController {
    private DbController db = new DbController();

    @GetMapping("/technicianTreatmentRequests")
    public ArrayList<TreatmentHistory> getTechnicianRequestList() {
        return db.getAllTreatmentHistories();
    }
}
