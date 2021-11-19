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
    public int add(Users user) {
        return jdbcTemplate.update("INSERT INTO users (id, user_name, user_type, email, activation_date) VALUES(?, ?, ?, ?, ?)",
                new Object[] { user.getId(), user.getUser_name(), user.getUser_type(),user.getEmail(), user.getActivation_date()});
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

    @Override
    public Users getById(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM USERS WHERE id=?", new BeanPropertyRowMapper<Users>(Users.class), id);
    }


}
