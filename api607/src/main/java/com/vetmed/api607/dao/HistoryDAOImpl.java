package com.vetmed.api607.dao;

import com.vetmed.api607.model.History;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HistoryDAOImpl implements HistoryDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int save(History history) {
        return 0;
    }

    @Override
    public int update(History history, int id) {
        return 0;
    }

    @Override
    public int delete(int id) {
        return 0;
    }

    @Override
    public List<History> getAll() {
        return jdbcTemplate.query("SELECT * FROM History", new BeanPropertyRowMapper<History>(History.class));
    }
}
