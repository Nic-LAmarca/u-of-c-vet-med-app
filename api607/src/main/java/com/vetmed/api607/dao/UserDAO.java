package com.vetmed.api607.dao;

import com.vetmed.api607.model.Users;

import java.util.List;

public interface UserDAO {

    int save(Users users);

    int update(Users users, int id);

    int delete(int id);

    List<Users> getAll();

   // Users getById(int id);
}
