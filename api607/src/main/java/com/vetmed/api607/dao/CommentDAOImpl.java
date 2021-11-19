package com.vetmed.api607.dao;


import com.vetmed.api607.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class CommentDAOImpl implements CommentDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Comment getCommentsByAnimalId(int animal_id) {
        return jdbcTemplate.queryForObject("SELECT * FROM comment WHERE animal_id=?", new BeanPropertyRowMapper<Comment>(Comment.class), animal_id);
    }
}
