package com.vetmed.api607.dao;

import com.vetmed.api607.model.Comment;

public interface CommentDAO {
    Comment getCommentsByAnimalId(int animal_id);
}
