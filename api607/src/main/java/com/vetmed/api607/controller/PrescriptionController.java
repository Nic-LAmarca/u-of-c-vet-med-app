package com.vetmed.api607.controller;

import com.vetmed.api607.dao.PrescriptionDAO;
import com.vetmed.api607.model.Prescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class PrescriptionController {
    @Autowired
    private PrescriptionDAO pDAO;

    @GetMapping("/prescriptions")
    public List<Prescription> getTreatments()
    {
        return pDAO.getAll();
    }
}