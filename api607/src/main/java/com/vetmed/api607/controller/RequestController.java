package com.vetmed.api607.controller;

import com.vetmed.api607.model.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class RequestController {
    private DbController db = new DbController();
}
