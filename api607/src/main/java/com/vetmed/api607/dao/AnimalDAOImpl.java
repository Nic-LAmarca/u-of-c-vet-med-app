package com.vetmed.api607.dao;

import com.vetmed.api607.model.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class AnimalDAOImpl implements AnimalDAO
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int add(Animal animal) {
        return jdbcTemplate.update("INSERT INTO animal (id, type, weight, tattoo, city_tattoo, dob, breed, sex, rfid, microchip, status, draught, meat, region, distinguishing_features, color) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                new Object[] { animal.getId(), animal.getType(), animal.getWeight(), animal.getTattoo(), animal.getCity_tattoo(),
            animal.getDob(), animal.getBreed(), animal.getSex(), animal.getRfid(), animal.getMicrochip(), animal.getStatus(),animal.getDraught(), animal.getMeat(), animal.getRegion(),
                        animal.getDistinguishing_features(), animal.getColor()});
    }

    @Override
    public int update(Animal animal, int id) {
        return 0;
    }

    @Override
    public int delete(int id) {
        return 0;
    }

    @Override
    public List<Animal> getAll() {
        return jdbcTemplate.query("SELECT * FROM ANIMAL", new BeanPropertyRowMapper<Animal>(Animal.class));
    }

    @Override
    public Animal getById(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM ANIMAL WHERE id=?", new BeanPropertyRowMapper<Animal>(Animal.class), id);
    }



}
