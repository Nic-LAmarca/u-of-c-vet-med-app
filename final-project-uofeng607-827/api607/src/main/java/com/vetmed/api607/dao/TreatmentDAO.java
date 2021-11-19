package com.vetmed.api607.dao;

import com.vetmed.api607.model.Treatment;

import java.util.List;

public interface TreatmentDAO {

    int save(Treatment treatment);

    int update(Treatment treatment, int id);

    int delete(int id);

    List<Treatment> getAll();
}
