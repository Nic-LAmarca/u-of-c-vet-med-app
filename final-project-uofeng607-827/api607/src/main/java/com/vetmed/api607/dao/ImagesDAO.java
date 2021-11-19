package com.vetmed.api607.dao;

import com.vetmed.api607.model.Images;

import java.util.List;

public interface ImagesDAO {

    int save(Images images);

    int update(Images images, int id);

    int delete(int id);

    List<Images> getAll();


}
