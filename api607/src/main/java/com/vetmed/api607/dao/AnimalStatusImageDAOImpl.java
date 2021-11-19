package com.vetmed.api607.dao;


import com.vetmed.api607.model.AnimalStatusImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AnimalStatusImageDAOImpl implements AnimalStatusImageDAO
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public AnimalStatusImage getByStatusHistoryId(int status_history) {
        return jdbcTemplate.queryForObject("SELECT * FROM animalstatusimages WHERE id=?", new BeanPropertyRowMapper<AnimalStatusImage>(AnimalStatusImage.class), status_history);
    }
}
