package com.vetmed.api607.dao;

import com.vetmed.api607.model.Prescription;

import java.util.List;

public interface PrescriptionDAO
{
    int save(Prescription prescription);

    int update(Prescription prescription, int id);

    int delete(int id);

    List<Prescription> getAll();
}
