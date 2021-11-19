package com.vetmed.api607.dao;
import com.vetmed.api607.model.AnimalStatusHistory;

import java.util.List;
public interface AnimalStatusHistoryDAO
{
    List<AnimalStatusHistory> getAnimalStatusHistory(int animal_id);
}
