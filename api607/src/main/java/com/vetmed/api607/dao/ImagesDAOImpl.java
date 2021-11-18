package com.vetmed.api607.dao;

import com.vetmed.api607.model.Images;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ImagesDAOImpl implements ImagesDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int save(Images images) {
        return 0;
    }

    @Override
    public int update(Images images, int id) {
        return 0;
    }

    @Override
    public int delete(int id) {
        return 0;
    }

    @Override
    public List<Images> getAll() {
        return jdbcTemplate.query("SELECT * FROM Images", new BeanPropertyRowMapper<Images>(Images.class));
    }
}
