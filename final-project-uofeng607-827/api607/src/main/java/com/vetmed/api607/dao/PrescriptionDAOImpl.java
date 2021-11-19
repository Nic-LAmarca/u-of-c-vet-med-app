package com.vetmed.api607.dao;

import com.vetmed.api607.model.Prescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class PrescriptionDAOImpl implements PrescriptionDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int save(Prescription prescription) {
        return 0;
    }

    @Override
    public int update(Prescription prescription, int id) {
        return 0;
    }

    @Override
    public int delete(int id) {
        return 0;
    }

    @Override
    public List<Prescription> getAll() {
        return jdbcTemplate.query("SELECT * FROM medicalrecordstype", new BeanPropertyRowMapper<Prescription>(Prescription.class));
    }
}