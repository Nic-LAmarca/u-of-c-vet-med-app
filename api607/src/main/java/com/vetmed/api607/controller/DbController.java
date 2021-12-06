package com.vetmed.api607.controller;

import com.vetmed.api607.model.*;

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


    }

    // ******************************************************
    // ****** SECTION USED FOR USER QUERY INTERACTIONS ******
    // ******************************************************











    // *********************************************************************
    // ****** SECTION USED FOR MEDICAL RECORD TYPE QUERY INTERACTIONS ******
    // *********************************************************************

    /**
     *
     * Method is used to search the database for a MedicalRecordType with the entered id and return the User object if found
     *
     * @param id is the unique id value to search with
     * @return a new MedicalRecordType object that matches the id passed as an argument
     */
    public MedicalRecordType searchForMedicalRecordType(int id) {
        MedicalRecordType foundMRT = new MedicalRecordType();
        try {
            String query = "SELECT * FROM MEDICAL_RECORD_TYPE WHERE medicalRecordId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("userId") == id) {
                    foundMRT.setMedicalRecordId(id);
                    foundMRT.setMedicalRecordType(results.getString("medicalRecordType"));
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
     * Method is used to return an arraylist of MedicalRecordTypes that are in the database
     *
     * @return a new list of MedicalRecordType objects from the db
     */
    public ArrayList<MedicalRecordType> getAllMedicalRecordTypes() {
        ArrayList<MedicalRecordType> medicalRecordTypeArrayList = new ArrayList<MedicalRecordType>();
        try {
            String query = "SELECT * FROM MEDICAL_RECORD_TYPE";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                MedicalRecordType addMRT = new MedicalRecordType();
                addMRT.setMedicalRecordId(results.getInt("medicalRecordId"));
                addMRT.setMedicalRecordType(results.getString("medicalRecordType"));
                medicalRecordTypeArrayList.add(addMRT);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return medicalRecordTypeArrayList;
    }

    /**
     *
     * Method is used to add a MedicalRecordType into the database based on the entered credentials
     *
     * @param medicalRecordType the type of the Medical Record
     */
    public void addMedicalRecordType(String medicalRecordType) {
        try {
            String query = "INSERT INT0 MEDICAL_RECORD_TYPE (medicalRecordType) VALUES (?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, medicalRecordType);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // *********************************************************************
    // ****** SECTION USED FOR MEDICAL RECORD TYPE QUERY INTERACTIONS ******
    // *********************************************************************











    // **********************************************************************
    // ****** SECTION USED FOR PRESCRIPTION HISTORY QUERY INTERACTIONS ******
    // **********************************************************************

    /**
     *
     * Method is used to search the database for a PrescriptionHistory with the entered id and return the User object if found
     *
     * @param id is the unique id value to search with
     * @return a new PrescriptionHistory object that matches the id passed as an argument
     */
    public  PrescriptionHistory searchForPrescriptionHistory(int id) {
        PrescriptionHistory foundPH = new PrescriptionHistory();
        try {
            String query = "SELECT * FROM PRESCRIPTION_HISTORY WHERE prescriptionId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("prescriptionId") == id) {
                    foundPH.setPrescriptionId(id);
                    foundPH.setUserId(results.getInt("userId"));
                    foundPH.setAnimalId(results.getInt("animalId"));
                    foundPH.setDate((results.getDate("date").toString()));
                    foundPH.setDrugName(results.getString("drugName"));
                    foundPH.setInstructions(results.getString("instructions"));
                    foundPH.setDosage(results.getDouble("dosage"));
                    foundPH.setDeliveryMethod(results.getString("deliveryMethod"));
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
     * Method is used to return an arraylist of PrescriptionHistory objects that are in the database
     *
     * @return a new list of PrescriptionHistory objects from the db
     */
    public ArrayList<PrescriptionHistory> getAllPrescriptionHistories() {
        ArrayList<PrescriptionHistory> prescriptionHistoryArrayList = new ArrayList<PrescriptionHistory>();
        try {
            String query = "SELECT * FROM PRESCRIPTION_HISTORY";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                PrescriptionHistory addPH = new PrescriptionHistory();
                addPH.setPrescriptionId(id);
                addPH.setUserId(results.getInt("userId"));
                addPH.setAnimalId(results.getInt("animalId"));
                addPH.setDate((results.getDate("date").toString()));
                addPH.setDrugName(results.getString("drugName"));
                addPH.setInstructions(results.getString("instructions"));
                addPH.setDosage(results.getDouble("dosage"));
                addPH.setDeliveryMethod(results.getString("deliveryMethod"));
                prescriptionHistoryArrayList.add(addPH);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return prescriptionHistoryArrayList;
    }

    /**
     *
     * Method is used to add a PrescriptionHistory into the database based on the entered credentials
     *
     * @param userId is the ID of the user prescribing the medication
     * @param animalId is the ID of the animal who the prescription history is for
     * @param date is the date the prescription was written
     * @param drugName is the name of the prescribed drug
     * @param instructions are the instructions for how to take the drug
     * @param dosage is the required dosage to be taken
     * @param deliveryMethod is how the medication should be taken
     */
    public void addPrescriptionHistory( int userId, int animalId, String date, String drugName, String instructions, double dosage, String deliveryMethod) {
        try {
            String query = "INSERT INT0 USER (userId, animalId, date, drugName, instructions, dosage, deliveryMethod) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, userId);
            myStmt.setInt(1, animalId);
            myStmt.setDate(1, Date.valueOf(date));
            myStmt.setString(1, drugName);
            myStmt.setString(1, instructions);
            myStmt.setDouble(1, dosage);
            myStmt.setString(1, deliveryMethod);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // **********************************************************************
    // ****** SECTION USED FOR PRESCRIPTION HISTORY QUERY INTERACTIONS ******
    // **********************************************************************












    // *********************************************************
    // ****** SECTION USED FOR REQUEST QUERY INTERACTIONS ******
    // *********************************************************

    /**
     *
     * Method is used to search the database for a Request with the entered id and return the User object if found
     *
     * @param id is the unique id value to search with
     * @return a new PrescriptionHistory object that matches the id passed as an argument
     */
    public  Request searchForRequest(int id) {
        Request foundRequest = new Request();
        try {
            String query = "SELECT * FROM REQUEST WHERE requestId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("requestId") == id) {
                    foundRequest.setRequestId(id);
                    foundPH.setUserId(results.getInt("userId"));
                    foundPH.setDate((results.getDate("date").toString()));
                    foundPH.setDrugName(results.getString("drugName"));
                    foundPH.setInstructions(results.getString("instructions"));
                    foundPH.setDosage(results.getDouble("dosage"));
                    foundPH.setDeliveryMethod(results.getString("deliveryMethod"));
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
     * Method is used to return an arraylist of PrescriptionHistory objects that are in the database
     *
     * @return a new list of PrescriptionHistory objects from the db
     */
    public ArrayList<PrescriptionHistory> getAllPrescriptionHistories() {
        ArrayList<PrescriptionHistory> prescriptionHistoryArrayList = new ArrayList<PrescriptionHistory>();
        try {
            String query = "SELECT * FROM PRESCRIPTION_HISTORY";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                PrescriptionHistory addPH = new PrescriptionHistory();
                addPH.setPrescriptionId(id);
                addPH.setUserId(results.getInt("userId"));
                addPH.setDate((results.getDate("date").toString()));
                addPH.setDrugName(results.getString("drugName"));
                addPH.setInstructions(results.getString("instructions"));
                addPH.setDosage(results.getDouble("dosage"));
                addPH.setDeliveryMethod(results.getString("deliveryMethod"));
                prescriptionHistoryArrayList.add(addPH);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return prescriptionHistoryArrayList;
    }

    /**
     *
     * Method is used to add a PrescriptionHistory into the database based on the entered credentials
     *
     * @param PrescriptionHistory the type of the Medical Record
     */
    public void addPRescriptionHistory(String prescriptionHistory) {
        try {
            String query = "INSERT INT0 PRESCRIPTION_HISTORY (prescriptionHistory) VALUES (?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, medicalRecordType);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // *********************************************************
    // ****** SECTION USED FOR REQUEST QUERY INTERACTIONS ******
    // *********************************************************
}
