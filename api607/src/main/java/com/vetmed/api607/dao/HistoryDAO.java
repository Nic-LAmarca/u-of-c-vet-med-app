package com.vetmed.api607.dao;

import com.vetmed.api607.model.History;


import java.util.List;

public interface HistoryDAO {

    int save(History history);

    int update(History history, int id);

    int delete(int id);

    List<History> getAll();

}
