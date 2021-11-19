package com.vetmed.api607.controller;

import com.vetmed.api607.dao.TreatmentDAO;
import com.vetmed.api607.model.Treatment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class TreatmentController {
    @Autowired
    private TreatmentDAO tDAO;

    @GetMapping("/treatments")
    public List<Treatment> getTreatments()
    {
        return tDAO.getAll();
    }
}
