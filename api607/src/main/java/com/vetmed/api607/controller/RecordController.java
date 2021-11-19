package com.vetmed.api607.controller;

import com.vetmed.api607.dao.RecordDAO;
import com.vetmed.api607.model.Record;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class RecordController {
    @Autowired
    private RecordDAO rDAO;

    @GetMapping("/records")
    public List<Record> getTreatments()
    {
        return rDAO.getAll();
    }
}