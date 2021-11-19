package com.vetmed.api607.dao;
import com.vetmed.api607.model.AnimalStatusImage;


public interface AnimalStatusImageDAO
{
    AnimalStatusImage getByStatusHistoryId(int id);

}
