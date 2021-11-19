package com.vetmed.api607.controller;

import com.vetmed.api607.dao.ImagesDAO;
import com.vetmed.api607.model.Images;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ImagesController {
    @Autowired
    private ImagesDAO iDAO;

    @GetMapping("/images")
    public List<Images> getImages()
    {
        return iDAO.getAll();
    }
}
