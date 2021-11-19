package com.vetmed.api607.dao;

import com.vetmed.api607.model.Record;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class RecordDAOImpl implements RecordDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int save(Record record) {
        return 0;
    }

    @Override
    public int update(Record record, int id) {
        return 0;
    }

    @Override
    public int delete(int id) {
        return 0;
    }

    @Override
    public List<Record> getAll() {
        return jdbcTemplate.query("SELECT * FROM medicalrecordstype", new BeanPropertyRowMapper<Record>(Record.class));
    }
}