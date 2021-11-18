package com.vetmed.api607.dao;

import com.vetmed.api607.model.Animal;

import java.util.List;

public interface AnimalDAO
{
    int save(Animal animal);

    int update(Animal animal, int id);

    int delete(int id);

    List<Animal> getAll();

    Animal getById(int id);
}
