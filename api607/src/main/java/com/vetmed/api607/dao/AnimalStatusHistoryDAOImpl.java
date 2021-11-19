package com.vetmed.api607.dao;

import com.vetmed.api607.model.AnimalStatusHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AnimalStatusHistoryDAOImpl implements AnimalStatusHistoryDAO
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public AnimalStatusHistory getAnimalStatusHistory(int animal_id)
    {
        return jdbcTemplate.queryForObject("SELECT * FROM animalstatushistory WHERE animal_id = ?", new BeanPropertyRowMapper<AnimalStatusHistory>(AnimalStatusHistory.class),animal_id);

    }
}
