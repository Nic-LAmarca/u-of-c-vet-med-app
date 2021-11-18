package com.vetmed.api607.dao;

import com.vetmed.api607.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class UserDAOImpl implements UserDAO{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int save(Users users) {
        return 0;
    }

    @Override
    public int update(Users users, int id) {
        return 0;
    }

    @Override
    public int delete(int id) {
        return 0;
    }

    @Override
    public List<Users> getAll() {
        return jdbcTemplate.query("SELECT * FROM USERS", new BeanPropertyRowMapper<Users>(Users.class));
    }


}
