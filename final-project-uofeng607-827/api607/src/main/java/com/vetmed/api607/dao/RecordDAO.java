package com.vetmed.api607.dao;

import com.vetmed.api607.model.Record;

import java.util.List;

public interface RecordDAO {

    int save(Record record);

    int update(Record record, int id);

    int delete(int id);

    List<Record> getAll();
}