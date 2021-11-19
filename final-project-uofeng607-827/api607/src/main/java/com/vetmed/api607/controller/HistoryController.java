package com.vetmed.api607.controller;

import com.vetmed.api607.dao.HistoryDAO;
import com.vetmed.api607.model.History;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HistoryController {
    @Autowired
    private HistoryDAO hDAO;

    @GetMapping("/history")
    public List<History> getHistory()
    {
        return hDAO.getAll();
    }
}
