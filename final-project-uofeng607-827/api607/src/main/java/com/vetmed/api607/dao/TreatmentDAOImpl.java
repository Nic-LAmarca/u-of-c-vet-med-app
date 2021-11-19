package com.vetmed.api607.dao;

import com.vetmed.api607.model.Treatment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class TreatmentDAOImpl implements TreatmentDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int save(Treatment treatment) {
        return 0;
    }

    @Override
    public int update(Treatment treatment, int id) {
        return 0;
    }

    @Override
    public int delete(int id) {
        return 0;
    }

    @Override
    public List<Treatment> getAll() {
        return jdbcTemplate.query("SELECT * FROM treatmentmethod", new BeanPropertyRowMapper<Treatment>(Treatment.class));
    }
}
