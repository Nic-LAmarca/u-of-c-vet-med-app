package com.vetmed.api607.controller;

import com.vetmed.api607.model.User;

import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Properties;
import java.sql.Date;

public class DbController {
    private Connection dbConnect;
    private Properties dbDetails;
    private ResultSet results;

    // ******************************************************
    // ****** SECTION USED FOR USER QUERY INTERACTIONS ******
    // ******************************************************

    /**
     *
     * Method is used to search the database for a user with the entered id and return the User object if found
     *
     * @param id is the unique id value to search with
     * @return a new user object that matches the id passed as an argument
     */
    public User searchForUser(int id) {
        User foundUser = new User();
        try {
            String query = "SELECT * FROM USER WHERE userId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("userId") == id) {
                    foundUser.setUserId(id);
                    foundUser.setFName(results.getString("fName"));
                    foundUser.setLName(results.getString("lName"));
                    foundUser.setEmail(results.getString("email"));
                    foundUser.setActivationDate(results.getDate("activationDate").toString());
                    foundUser.setUserType(results.getString("userType"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     *
     * Method is used to return an arraylist of users that are in the database
     *
     * @return a new list of user objects from the db
     */
    public ArrayList<User> getAllUsers() {
        ArrayList<User> userList = new ArrayList<User>();
        try {
            String query = "SELECT * FROM USER";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                User addUser = new User();
                addUser.setUserId(results.getInt("userId"));
                addUser.setFName(results.getString("fName"));
                addUser.setLName(results.getString("lName"));
                addUser.setEmail(results.getString("email"));
                addUser.setActivationDate(results.getDate("activationDate").toString());
                addUser.setUserType(results.getString("userType"));
                userList.add(addUser);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userList;
    }

    /**
     *
     * Method is used to add a user into the database based on the entered credentials
     *
     * @param fName is the first name of the user
     * @param lName is the last name of the user
     * @param email is the email of the user
     * @param activationDate is the date that the user is activated in the system
     * @param userType is the type of user (Student, Teacher, Admin ...)
     */
    public void addUser(String fName, String lName, String email, String activationDate, String userType) {
        try {
            String query = "INSERT INT0 USER (fName, lName, email, activationDate, userType) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, fName);
            myStmt.setString(1, lName);
            myStmt.setString(1, email);
            myStmt.setDate(1, Date.valueOf(activationDate));
            myStmt.setString(1, userType);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // ******************************************************
    // ****** SECTION USED FOR USER QUERY INTERACTIONS ******
    // ******************************************************
}
